"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export function ContinuousCarousel({ label, renderItems, className = "", speed = 30, showControls = true }: {
  label: string;
  renderItems: (duplicate: boolean) => ReactNode;
  className?: string;
  speed?: number;
  showControls?: boolean;
}) {
  const { language } = useLanguage();
  const pt = language === "pt";
  const reducedMotion = useReducedMotion();
  const [manualPause, setManualPause] = useState<boolean | null>(null);
  const paused = manualPause ?? reducedMotion ?? false;
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const position = useRef(0);
  const cycle = useRef(0);
  const pointer = useRef<{ input: "pointer" | "touch"; id: number; startX: number; startY: number; lastX: number; dragged: boolean; samples: { x: number; time: number }[] } | null>(null);
  const suppressClick = useRef(false);
  const momentum = useRef<number | null>(null);

  const paint = useCallback(() => {
    if (trackRef.current) trackRef.current.style.transform = `translate3d(${-position.current}px, 0, 0)`;
  }, []);

  const move = useCallback((distance: number) => {
    if (!trackRef.current || !cycle.current) return;
    // Keep an identical copy on either side, including when dragging backwards.
    position.current = cycle.current + ((position.current + distance) % cycle.current + cycle.current) % cycle.current;
  }, []);

  const releasePointer = useCallback((coast = false) => {
    const active = pointer.current;
    if (!active) return;
    momentum.current = null;
    if (coast && active.dragged && !reducedMotion) {
      const last = active.samples[active.samples.length - 1];
      const first = active.samples[0];
      const elapsed = last.time - first.time;
      // Holding still before release should not fling using an old swipe speed.
      const velocity = performance.now() - last.time <= 80 && elapsed > 0
        ? ((first.x - last.x) / elapsed) * 1000
        : 0;
      momentum.current = Math.max(-3000, Math.min(3000, velocity));
    }
    suppressClick.current = active.dragged;
    pointer.current = null;
    if (active.input === "pointer" && viewportRef.current?.hasPointerCapture(active.id)) viewportRef.current.releasePointerCapture(active.id);
  }, [reducedMotion]);

  const dragTo = useCallback((x: number, y: number) => {
    const active = pointer.current;
    if (!active) return false;
    const time = performance.now();
    active.samples.push({ x, time });
    while (active.samples.length > 2 && active.samples[1].time < time - 80) active.samples.shift();
    if (!active.dragged) {
      const dx = Math.abs(x - active.startX);
      const dy = Math.abs(y - active.startY);
      // Give slightly diagonal swipes time to resolve before yielding to page scroll.
      if (dy >= 10 && dy > dx * 1.25) {
        releasePointer();
        return false;
      }
      if (dx < 3 || dx < dy) return false;
      active.dragged = true;
    }
    move(active.lastX - x);
    active.lastX = x;
    // Paint directly from input: no easing or extra animation-frame delay under
    // the finger. Momentum only applies once the gesture has ended.
    paint();
    return true;
  }, [move, paint, releasePointer]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    // A non-passive native listener can claim a horizontal swipe on iOS.
    // Touch gestures use this path exclusively, avoiding competing pointer events.
    const start = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        releasePointer();
        return;
      }
      const touch = event.touches[0];
      suppressClick.current = false;
      momentum.current = null;
      pointer.current = { input: "touch", id: touch.identifier, startX: touch.clientX, startY: touch.clientY, lastX: touch.clientX, dragged: false, samples: [{ x: touch.clientX, time: performance.now() }] };
    };
    const drag = (event: TouchEvent) => {
      const active = pointer.current;
      if (active?.input !== "touch") return;
      if (event.touches.length !== 1) {
        releasePointer();
        return;
      }
      const touch = Array.from(event.touches).find(item => item.identifier === active.id);
      if (touch && dragTo(touch.clientX, touch.clientY) && event.cancelable) event.preventDefault();
    };
    const end = (event: TouchEvent) => {
      if (pointer.current?.input === "touch" && Array.from(event.changedTouches).some(touch => touch.identifier === pointer.current?.id)) releasePointer(event.type === "touchend");
    };
    viewport.addEventListener("touchstart", start, { passive: true });
    viewport.addEventListener("touchmove", drag, { passive: false });
    viewport.addEventListener("touchend", end);
    viewport.addEventListener("touchcancel", end);
    return () => {
      viewport.removeEventListener("touchstart", start);
      viewport.removeEventListener("touchmove", drag);
      viewport.removeEventListener("touchend", end);
      viewport.removeEventListener("touchcancel", end);
    };
  }, [dragTo, releasePointer]);

  useEffect(() => {
    const release = (event: PointerEvent) => {
      if (pointer.current?.input === "pointer" && event.pointerId === pointer.current.id) releasePointer(event.type === "pointerup");
    };
    const cancel = () => releasePointer();
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", release);
    window.addEventListener("blur", cancel);
    return () => {
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
      window.removeEventListener("blur", cancel);
    };
  }, [releasePointer]);

  useEffect(() => {
    const viewport = viewportRef.current;
    const group = groupRef.current;
    if (!viewport || !group) return;
    const measure = () => {
      const width = group.getBoundingClientRect().width;
      if (width <= 0) return;
      position.current = cycle.current
        ? (position.current / cycle.current) * width
        : width;
      cycle.current = width;
      move(0);
      paint();
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(group);
    const wheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.shiftKey) {
        event.preventDefault();
        const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? viewport.clientWidth : 1;
        move((event.deltaX || event.deltaY) * unit);
      }
    };
    viewport.addEventListener("wheel", wheel, { passive: false });
    let frame: number;
    let previous = 0;
    const tick = (time: number) => {
      const delta = previous ? Math.min(time - previous, 50) : 0;
      previous = time;
      if (!pointer.current && !document.hidden) {
        const seconds = delta / 1000;
        const target = paused ? 0 : speed;
        if (momentum.current !== null && !reducedMotion) {
          // Integrate exponential friction, independent of the display refresh
          // rate. Swipes in either direction ease into the normal sliding speed.
          const decay = Math.exp(-seconds / 0.325);
          const difference = momentum.current - target;
          move(target * seconds + difference * 0.325 * (1 - decay));
          momentum.current = target + difference * decay;
          if (Math.abs(momentum.current - target) < 0.5) momentum.current = null;
        } else if (!paused) {
          move(seconds * speed);
        }
        paint();
      }
      frame = requestAnimationFrame(tick);
    };
    // Start with a fresh clock after returning from a background tab.
    const resetClock = () => { previous = 0; };
    document.addEventListener("visibilitychange", resetClock);
    frame = requestAnimationFrame(tick);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      viewport.removeEventListener("wheel", wheel);
      document.removeEventListener("visibilitychange", resetClock);
    };
  }, [paused, speed, move, paint, reducedMotion]);

  return (
    <div className={`carousel ${className}`}>
      <div ref={viewportRef} className="carousel-viewport" role="region" aria-roledescription="carousel" aria-label={label} tabIndex={0}
        onPointerDown={(event) => {
          if (event.pointerType === "touch" || !event.isPrimary || event.button !== 0) return;
          suppressClick.current = false;
          momentum.current = null;
          pointer.current = { input: "pointer", id: event.pointerId, startX: event.clientX, startY: event.clientY, lastX: event.clientX, dragged: false, samples: [{ x: event.clientX, time: performance.now() }] };
        }}
        onPointerMove={(event) => {
          const active = pointer.current;
          if (active?.input !== "pointer" || active.id !== event.pointerId) return;
          if (dragTo(event.clientX, event.clientY) && !event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.setPointerCapture(event.pointerId);
          }
        }}
        onPointerUp={(event) => { if (pointer.current?.input === "pointer" && pointer.current.id === event.pointerId) releasePointer(true); }}
        onPointerCancel={(event) => { if (pointer.current?.input === "pointer" && pointer.current.id === event.pointerId) releasePointer(); }}
        onLostPointerCapture={(event) => { if (pointer.current?.input === "pointer" && pointer.current.id === event.pointerId) releasePointer(); }}
        onDragStart={(event) => event.preventDefault()}
        onClickCapture={(event) => {
          if (suppressClick.current) {
            event.preventDefault(); event.stopPropagation(); suppressClick.current = false;
          }
        }}
        onKeyDown={(event) => {
          if (event.key === " " && event.target === event.currentTarget) {
            event.preventDefault(); setManualPause(!paused);
          }
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault(); move((event.key === "ArrowRight" ? 1 : -1) * 340);
          }
        }}
        onFocusCapture={() => {
          const viewport = viewportRef.current;
          if (viewport?.scrollLeft) {
            const distance = viewport.scrollLeft;
            viewport.scrollLeft = 0;
            move(distance);
          }
        }}
      >
        <div ref={trackRef} className="carousel-track">
          {[0, 1, 2].map((copy) => (
            <div className="carousel-group" key={copy} ref={copy === 1 ? groupRef : undefined} aria-hidden={copy !== 1 ? true : undefined}>
              {renderItems(copy !== 1)}
            </div>
          ))}
        </div>
      </div>
      {showControls && <div className="carousel-toolbar container">
        <p>{pt ? "Deslize para descobrir" : "Drag to discover"}</p>
        <div className="carousel-controls">
          <button type="button" onClick={() => move(-340)} aria-label={pt ? "Anterior" : "Previous"}><ArrowLeft size={17} /></button>
          <button type="button" onClick={() => setManualPause(!paused)} aria-label={paused ? (pt ? "Retomar movimento" : "Resume movement") : (pt ? "Pausar movimento" : "Pause movement")}>
            {paused ? <Play size={14} /> : <Pause size={14} />}
          </button>
          <button type="button" onClick={() => move(340)} aria-label={pt ? "Seguinte" : "Next"}><ArrowRight size={17} /></button>
        </div>
      </div>}
    </div>
  );
}
