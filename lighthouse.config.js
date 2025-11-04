/**
 * Lighthouse CI Configuration
 * 
 * This configuration runs Lighthouse audits on every build
 * and fails if performance budgets are exceeded.
 */

module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000'],
      startServerCommand: 'pnpm start',
      startServerReadyPattern: 'Ready on',
      startServerReadyTimeout: 30000,
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        // Performance budgets
        'categories:performance': ['error', { minScore: 0.75 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        
        // Core Web Vitals - Mobile
        'first-contentful-paint': ['error', { maxNumericValue: 1800 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'total-blocking-time': ['error', { maxNumericValue: 300 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        
        // Bundle size checks
        'total-byte-weight': ['warn', { maxNumericValue: 500000 }], // 500KB
        'dom-size': ['warn', { maxNumericValue: 1500 }],
        
        // Image optimization
        'uses-optimized-images': ['error'],
        'uses-webp-images': ['warn'],
        'modern-image-formats': ['warn'],
        
        // Font optimization
        'font-display': ['error'],
        'preload-fonts': ['warn'],
        
        // Resource hints
        'uses-rel-preconnect': ['warn'],
        'uses-rel-preload': ['warn'],
        
        // JavaScript
        'unused-javascript': ['warn'],
        'unminified-javascript': ['error'],
        'unused-css-rules': ['warn'],
        
        // Caching
        'uses-long-cache-ttl': ['warn'],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}

