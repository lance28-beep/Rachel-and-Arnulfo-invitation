# Unused Heavy Components Analysis

## Components Identified as Potentially Unused

### 1. `components/Particles.tsx`
**Status:** Not imported in main application  
**Size Impact:** ~50-100KB (includes ogl dependency if used)  
**Recommendation:** Remove if confirmed unused, or lazy load if needed later

**Action:**
```bash
# Check usage
grep -r "Particles" --include="*.tsx" --include="*.ts" app/ components/
```

### 2. `components/circular-gallery.tsx`
**Status:** Not imported in main application  
**Size Impact:** ~150KB (ogl library)  
**Recommendation:** Remove if confirmed unused, or lazy load if needed later

**Action:**
```bash
# Check usage
grep -r "CircularGallery\|circular-gallery" --include="*.tsx" --include="*.ts" app/ components/
```

### 3. `components/StaggeredMenu.tsx`
**Status:** Used in `components/navbar.tsx`  
**Size Impact:** ~30KB (GSAP dependency)  
**Recommendation:** Keep but optimize GSAP usage, consider migrating to Motion library

## Feature Flag for Removal

Create a feature flag system to safely remove components:

```typescript
// lib/feature-flags.ts
export const FEATURE_FLAGS = {
  ENABLE_PARTICLES: false,
  ENABLE_CIRCULAR_GALLERY: false,
  ENABLE_STAGGERED_MENU: true, // Keep for now
} as const
```

## Removal Instructions

### Step 1: Verify Unused Components
```bash
# Run these commands to verify
grep -r "Particles" app/ components/sections/
grep -r "CircularGallery\|circular-gallery" app/ components/sections/
```

### Step 2: Remove if Unused
```bash
# If confirmed unused, remove:
rm components/Particles.tsx
rm components/circular-gallery.tsx
```

### Step 3: Remove Associated Dependencies
If `circular-gallery.tsx` is removed, consider removing `ogl` dependency:
```bash
pnpm remove ogl
```

**Expected Savings:** ~200KB total if both components removed

