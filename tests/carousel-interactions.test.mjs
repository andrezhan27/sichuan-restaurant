import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

const source = readFileSync(new URL("../components/landing/ContinuousCarousel.tsx", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
});

function setup(speed, { reducedMotion = false } = {}) {
  const effects = [];
  const listeners = new Map();
  const frames = new Map();
  let frameId = 0;
  let clock = 1000;
  const viewport = {
    clientWidth: 390,
    scrollLeft: 0,
    addEventListener: (name, handler, options) => listeners.set(name, { handler, options }),
    removeEventListener: name => listeners.delete(name),
    hasPointerCapture: () => false,
  };
  const track = { style: {} };
  const group = { getBoundingClientRect: () => ({ width: 1000 }) };
  function jsx(type, props) {
    if (props.ref) props.ref.current = props.className === "carousel-viewport" ? viewport : props.className === "carousel-track" ? track : group;
    return { type, props };
  }
  const modules = {
    react: { useRef: current => ({ current }), useState: () => [null, () => {}], useEffect: fn => effects.push(fn), useCallback: fn => fn },
    "react/jsx-runtime": { jsx, jsxs: jsx },
    "framer-motion": { useReducedMotion: () => reducedMotion },
    "@/components/LanguageProvider": { useLanguage: () => ({ language: "en" }) },
    "lucide-react": {},
  };
  const exports = {};
  vm.runInNewContext(outputText, {
    exports,
    performance: { now: () => clock },
    require: name => modules[name],
    window: { addEventListener() {}, removeEventListener() {} },
    document: { hidden: false, addEventListener() {}, removeEventListener() {} },
    ResizeObserver: class { observe() {} disconnect() {} },
    requestAnimationFrame: fn => { frames.set(++frameId, fn); return frameId; },
    cancelAnimationFrame: id => frames.delete(id),
  });
  const tree = exports.ContinuousCarousel({ label: "Test", speed, showControls: false, renderItems: () => null });
  const props = tree.props.children[0].props;
  const cleanups = effects.map(effect => effect());
  const step = time => {
    clock = time;
    const pending = [...frames.values()];
    frames.clear();
    pending.forEach(fn => fn(time));
  };
  let prevented = false;
  const touch = (name, x, y, count = 1, time = clock) => {
    clock = time;
    const point = { identifier: 7, clientX: x, clientY: y };
    prevented = false;
    listeners.get(name).handler({
      type: name,
      touches: name === "touchend" || name === "touchcancel" ? [] : Array.from({ length: count }, () => point),
      changedTouches: [point], cancelable: true, preventDefault: () => { prevented = true; },
    });
    return prevented;
  };
  const position = () => -Number(track.style.transform.match(/translate3d\(([-.\d]+)px/)[1]);
  step(1000);
  return { props, listeners, step, touch, position, close: () => cleanups.forEach(fn => fn?.()) };
}

for (const [section, speed] of [["menu", 30], ["reviews", 22]]) {
  test(`${section}: touch drag follows the finger, wraps both ways without jumping on release`, () => {
    const carousel = setup(speed);
    assert.equal(carousel.listeners.get("touchmove").options.passive, false);
    carousel.touch("touchstart", 300, 200);
    assert.equal(carousel.touch("touchmove", 299, 205), false);
    assert.equal(carousel.touch("touchmove", 180, 206), true);
    assert.equal(carousel.position(), 1120, "the image follows input without waiting for another frame");
    carousel.step(1016);
    assert.equal(carousel.position(), 1120);
    carousel.step(1032);
    assert.equal(carousel.position(), 1120, "autoplay pauses while the finger is down");
    carousel.touch("touchmove", -1820, 206);
    carousel.step(1048);
    assert.equal(carousel.position(), 1120, "forward wrapping keeps the same visible content");
    carousel.touch("touchmove", 250, 206);
    carousel.step(1064);
    assert.equal(carousel.position(), 1050, "backward wrapping stays within the repeated groups");
    carousel.touch("touchend", 250, 206);
    carousel.step(1080);
    assert.ok(Math.abs(carousel.position() - 1050) < 60, "release does not jump or reset the position");
    carousel.close();
  });
}

test("vertical swipes, cancelled touches and pinch gestures release autoplay without blocking page gestures", () => {
  const carousel = setup(30);
  for (const end of ["vertical", "touchcancel", "pinch"]) {
    carousel.touch("touchstart", 200, 200);
    if (end === "vertical") assert.equal(carousel.touch("touchmove", 203, 240), false);
    else if (end === "pinch") assert.equal(carousel.touch("touchmove", 200, 200, 2), false);
    else carousel.touch(end, 200, 200);
    const before = carousel.position();
    carousel.step(end === "vertical" ? 1016 : end === "touchcancel" ? 1032 : 1048);
    assert.ok(carousel.position() > before);
  }
  carousel.close();
});

test("touch pointer events do not compete with the native touch path", () => {
  const carousel = setup(30);
  carousel.props.onPointerDown({ pointerType: "touch", isPrimary: true, button: 0, pointerId: 7, clientX: 300, clientY: 200 });
  carousel.step(1016);
  assert.ok(carousel.position() > 1000, "a touch pointer alone does not leave autoplay stuck");
  carousel.touch("touchstart", 300, 200);
  carousel.touch("touchmove", 200, 200);
  carousel.props.onPointerCancel({ pointerId: 7 });
  carousel.step(1032);
  const before = carousel.position();
  carousel.step(1048);
  assert.equal(carousel.position(), before, "pointer cancellation does not interrupt an active native touch drag");
  carousel.touch("touchend", 200, 200);
  carousel.step(1064);
  assert.ok(carousel.position() > before);
  carousel.close();
});

for (const speed of [30, 22]) {
  test(`at ${speed}px/s autoplay, faster swipes coast farther and gradually settle back to autoplay`, () => {
    function swipe(duration) {
      const carousel = setup(speed);
      carousel.touch("touchstart", 300, 200);
      carousel.touch("touchmove", 250, 200, 1, 1000 + duration / 2);
      carousel.step(1000 + duration / 2);
      carousel.touch("touchmove", 200, 200, 1, 1000 + duration);
      carousel.step(1000 + duration);
      carousel.touch("touchend", 200, 200);
      const start = carousel.position();
      const distances = [];
      for (let i = 1; i <= 200; i++) {
        const before = carousel.position();
        carousel.step(1000 + duration + i * 16);
        distances.push((carousel.position() - before + 1000) % 1000);
      }
      return { carousel, start, distances };
    }
    const fast = swipe(50);
    const slow = swipe(200);
    assert.ok(fast.distances[0] > slow.distances[0] * 2);
    assert.ok(fast.distances[0] > fast.distances[10], "coasting decelerates");
    assert.ok(Math.abs(fast.distances.at(-1) - speed * 0.016) < 0.01, "normal sliding speed returns smoothly");
    fast.carousel.close();
    slow.carousel.close();
  });
}

test("reverse swipes coast backwards, and touching again immediately stops momentum", () => {
  const carousel = setup(30);
  carousel.touch("touchstart", 100, 200);
  carousel.touch("touchmove", 200, 200, 1, 1050);
  carousel.step(1050);
  const releasedAt = carousel.position();
  carousel.touch("touchend", 200, 200);
  carousel.step(1066);
  assert.ok(carousel.position() < releasedAt);
  carousel.touch("touchstart", 200, 200);
  const caughtAt = carousel.position();
  carousel.step(1082);
  assert.equal(carousel.position(), caughtAt);
  carousel.touch("touchmove", 180, 200, 1, 1090);
  assert.equal(carousel.position(), caughtAt + 20, "the new drag remains exactly one-to-one");
  carousel.close();
});

test("holding still before release does not fling using stale velocity", () => {
  const carousel = setup(30);
  carousel.touch("touchstart", 300, 200);
  carousel.touch("touchmove", 200, 200, 1, 1050);
  carousel.step(1050);
  carousel.step(1300);
  carousel.touch("touchend", 200, 200);
  const before = carousel.position();
  carousel.step(1316);
  assert.ok(carousel.position() - before < 1);
  carousel.close();
});

test("reduced motion permits direct dragging and disables release momentum", () => {
  const carousel = setup(30, { reducedMotion: true });
  carousel.touch("touchstart", 300, 200);
  carousel.touch("touchmove", 200, 200, 1, 1050);
  assert.equal(carousel.position(), 1100);
  carousel.step(1050);
  carousel.touch("touchend", 200, 200);
  carousel.step(1066);
  assert.equal(carousel.position(), 1100);
  carousel.close();
});
