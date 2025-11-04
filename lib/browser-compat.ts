/**
 * Cross-Browser Compatibility Utilities
 * 
 * Feature detection and polyfills for better cross-browser support
 * without adding unnecessary polyfills to all browsers.
 */

/**
 * Detect if WebGL is supported
 */
export function isWebGLSupported(): boolean {
  if (typeof window === 'undefined') return false
  
  try {
    const canvas = document.createElement('canvas')
    return !!(
      canvas.getContext('webgl') || 
      canvas.getContext('experimental-webgl')
    )
  } catch (e) {
    return false
  }
}

/**
 * Detect if Intersection Observer is supported
 */
export function isIntersectionObserverSupported(): boolean {
  if (typeof window === 'undefined') return false
  return 'IntersectionObserver' in window
}

/**
 * Detect if CSS Custom Properties are supported
 */
export function isCSSVariablesSupported(): boolean {
  if (typeof window === 'undefined') return false
  return CSS.supports('color', 'var(--fake-var)')
}

/**
 * Detect device capabilities for performance optimization
 */
export interface DeviceCapability {
  isLowEnd: boolean
  hardwareConcurrency: number
  deviceMemory: number
  supportsWebGL: boolean
  supportsIntersectionObserver: boolean
  supportsCSSVariables: boolean
}

export function getDeviceCapability(): DeviceCapability {
  if (typeof window === 'undefined') {
    return {
      isLowEnd: false,
      hardwareConcurrency: 4,
      deviceMemory: 4,
      supportsWebGL: true,
      supportsIntersectionObserver: true,
      supportsCSSVariables: true,
    }
  }

  const hardwareConcurrency = navigator.hardwareConcurrency || 2
  const deviceMemory = (navigator as any).deviceMemory || 2
  const isLowEnd = hardwareConcurrency < 4 || deviceMemory < 4

  return {
    isLowEnd,
    hardwareConcurrency,
    deviceMemory,
    supportsWebGL: isWebGLSupported(),
    supportsIntersectionObserver: isIntersectionObserverSupported(),
    supportsCSSVariables: isCSSVariablesSupported(),
  }
}

/**
 * Intersection Observer polyfill (lazy load only if needed)
 */
export async function loadIntersectionObserverPolyfill(): Promise<void> {
  if (isIntersectionObserverSupported()) {
    return Promise.resolve()
  }

  // Only load polyfill if needed
  return import('intersection-observer').catch(() => {
    console.warn('Intersection Observer polyfill failed to load')
  })
}

/**
 * Check if current browser is supported
 */
export function isBrowserSupported(): boolean {
  if (typeof window === 'undefined') return true
  
  // Check for modern browser features
  const hasFetch = typeof fetch !== 'undefined'
  const hasPromise = typeof Promise !== 'undefined'
  const hasArrayFrom = typeof Array.from !== 'undefined'
  
  return hasFetch && hasPromise && hasArrayFrom
}

