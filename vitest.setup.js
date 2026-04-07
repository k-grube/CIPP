import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Suppress jsdom "Not implemented" warnings for getComputedStyle with pseudo-elements
const originalConsoleError = console.error
console.error = (...args) => {
  if (typeof args[0] === 'string' && args[0].includes('Not implemented: Window')) return
  originalConsoleError(...args)
}
