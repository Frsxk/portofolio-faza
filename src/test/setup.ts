import "@testing-library/jest-dom/vitest"
import { cleanup } from "@testing-library/react"
import { afterEach, vi } from "vitest"

// jsdom has no layout: observer callbacks are driven explicitly by tests, not fabricated here.
class TestIntersectionObserver implements IntersectionObserver {
  readonly root = null
  readonly rootMargin = "0px"
  readonly scrollMargin = "0px 0px 0px 0px"
  readonly thresholds = [0]
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
  takeRecords = vi.fn(() => [])
}

class TestResizeObserver implements ResizeObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}

vi.stubGlobal("IntersectionObserver", TestIntersectionObserver)
vi.stubGlobal("ResizeObserver", TestResizeObserver)
vi.stubGlobal("matchMedia", (query: string): MediaQueryList => {
  const events = new EventTarget()
  return {
    media: query,
    matches: query === "(prefers-reduced-motion: reduce)",
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: events.addEventListener.bind(events),
    removeEventListener: events.removeEventListener.bind(events),
    dispatchEvent: events.dispatchEvent.bind(events),
  }
})

if (!window.PointerEvent) {
  class TestPointerEvent extends MouseEvent {
    readonly pointerId: number
    readonly pointerType: string
    readonly isPrimary: boolean

    constructor(type: string, init: PointerEventInit = {}) {
      super(type, init)
      this.pointerId = init.pointerId ?? 1
      this.pointerType = init.pointerType ?? "mouse"
      this.isPrimary = init.isPrimary ?? true
    }
  }
  vi.stubGlobal("PointerEvent", TestPointerEvent)
}

for (const method of ["scrollIntoView", "setPointerCapture", "releasePointerCapture"] as const) {
  if (!HTMLElement.prototype[method]) {
    Object.defineProperty(HTMLElement.prototype, method, { configurable: true, value: vi.fn() })
  }
}
if (!HTMLElement.prototype.hasPointerCapture) {
  Object.defineProperty(HTMLElement.prototype, "hasPointerCapture", {
    configurable: true,
    value: vi.fn(() => false),
  })
}

if (!HTMLElement.prototype.animate) {
  Object.defineProperty(HTMLElement.prototype, "animate", {
    configurable: true,
    value: vi.fn(() => ({ cancel: vi.fn(), finished: Promise.resolve() })),
  })
}

// Keep tests independent of a previous test's saved color-mode choice.
afterEach(() => {
  cleanup()
  localStorage.clear()
})
