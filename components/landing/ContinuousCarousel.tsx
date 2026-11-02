"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

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
  const groupRef = useRef<HTMLDivElement>(null);
  const position = useRef(0);
  const cycle = useRef(0);
  const pointer = useRef<{ id: number; startX: number; lastX: number; dragged: boolean } | null>(null);
  const suppressClick = useRef(false);

  useEffect(() => {
    const release = () => {
      if (pointer.current) suppressClick.current = pointer.current.dragged;
      pointer.current = null;
    };
    window.addEventListener("pointerup", release);
    window.addEventListener("pointercancel", release);
    window.addEventListener("blur", release);
    return () => {
      window.removeEventListener("pointerup", release);
      window.removeEventListener("pointercancel", release);
      window.removeEventListener("blur", release);
    };
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    const group = groupRef.current;
    if (!viewport || !group) return;
    const measure = () => {
      const width = group.getBoundingClientRect().width;
      if (width <= 0) return;
      position.current = cycle.current
        ? width + ((position.current - cycle.current) / cycle.current) * width
        : width;
      cycle.current = width;
      viewport.scrollLeft = position.current;
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(group);
    const wheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY) || event.shiftKey) {
        event.preventDefault();
        move(event.deltaX || event.deltaY);
      }
    };
    viewport.addEventListener("wheel", wheel, { passive: false });
    let frame: number;
    let previous = 0;
    const tick = (time: number) => {
      const delta = previous ? Math.min(time - previous, 50) : 0;
      previous = time;
      if (!paused && !pointer.current && cycle.current) {
        position.current += (delta / 1000) * speed;
        if (position.current >= cycle.current * 2) position.current -= cycle.current;
        viewport.scrollLeft = position.current;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      viewport.removeEventListener("wheel", wheel);
    };
  }, [paused, speed]);

  function move(distance: number) {
    const viewport = viewportRef.current;
    if (!viewport || !cycle.current) return;
    position.current += distance;
    // Keep an identical copy on either side so dragging wraps without a jump.
    position.current = cycle.current + ((position.current % cycle.current) + cycle.current) % cycle.current;
    viewport.scrollLeft = position.current;
  }

  function releasePointer() {
    const active = pointer.current;
    if (!active) return;
    suppressClick.current = active.dragged;
    pointer.current = null;
    if (viewportRef.current?.hasPointerCapture(active.id)) viewportRef.current.releasePointerCapture(active.id);
  }

  return (
    <div className={`carousel ${className}`}>
      <div ref={viewportRef} className="carousel-viewport" role="region" aria-roledescription="carousel" aria-label={label} tabIndex={0}
        onPointerDown={(event) => {
          if (!event.isPrimary || event.button !== 0) return;
          suppressClick.current = false;
          pointer.current = { id: event.pointerId, startX: event.clientX, lastX: event.clientX, dragged: false };
        }}
        onPointerMove={(event) => {
          const active = pointer.current;
          if (!active || active.id !== event.pointerId) return;
          if (!active.dragged && Math.abs(event.clientX - active.startX) < 5) return;
          if (!active.dragged) event.currentTarget.setPointerCapture(event.pointerId);
          active.dragged = true;
          move(active.lastX - event.clientX);
          active.lastX = event.clientX;
        }}
        onPointerUp={releasePointer} onPointerCancel={releasePointer} onLostPointerCapture={releasePointer}
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
          if (viewportRef.current) position.current = viewportRef.current.scrollLeft;
        }}
      >
        <div className="carousel-track">
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
