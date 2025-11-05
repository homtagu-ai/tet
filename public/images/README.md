# Image Assets Directory

This directory contains all image assets used throughout the PaymentScope Analytics website.

## Directory Structure

```
public/images/
├── hero/              # Hero section images
├── services/          # Service-related imagery
├── insights/          # Article and blog post images
├── about/             # About page images
├── team/              # Team member photos
├── partners/          # Partner and client logos
├── regions/           # Regional market imagery
├── payment-methods/   # Payment method icons and illustrations
├── icons/             # UI icons and symbols
└── backgrounds/       # Background images and patterns
```

## Image Requirements

### Hero Images
- **Dimensions:** 1920x1080px (minimum)
- **Format:** JPG or WebP
- **Size:** < 500KB (optimized)
- **Content:** Professional business imagery, payment technology, global commerce

### Service Images
- **Dimensions:** 800x600px
- **Format:** JPG, PNG, or WebP
- **Size:** < 200KB
- **Content:** Illustrations of analytics, consulting, research activities

### Insight/Article Images
- **Dimensions:** 1200x630px (optimal for social sharing)
- **Format:** JPG or WebP
- **Size:** < 300KB
- **Content:** Data visualizations, charts, regional maps, payment trends

### Team Photos
- **Dimensions:** 400x400px (square)
- **Format:** JPG or WebP
- **Size:** < 100KB
- **Content:** Professional headshots with consistent background

### Partner Logos
- **Dimensions:** Variable (maintain aspect ratio)
- **Format:** PNG or SVG (preferred)
- **Size:** < 50KB
- **Content:** Client and partner company logos

### Icons
- **Dimensions:** 48x48px, 96x96px, or SVG
- **Format:** PNG or SVG
- **Content:** Payment method icons, service icons, feature icons

## Image Naming Convention

Use lowercase with hyphens:
- `hero-payment-analytics.jpg`
- `service-market-research.jpg`
- `insight-north-america-2024.jpg`
- `payment-method-apple-pay.png`

## Optimization Guidelines

1. **Compress all images** before uploading using tools like:
   - TinyPNG
   - Squoosh
   - ImageOptim

2. **Use appropriate formats:**
   - JPG for photographs
   - PNG for graphics with transparency
   - WebP for modern browser support
   - SVG for logos and icons

3. **Provide multiple sizes** for responsive images when possible

4. **Add descriptive alt text** in the code for accessibility

## Recommended Stock Photo Sources

For professional business imagery:
- Unsplash (https://unsplash.com)
- Pexels (https://pexels.com)
- Pixabay (https://pixabay.com)

For data visualization and infographics:
- Create custom graphics using Figma or Canva
- Purchase from professional stock sites

## Required Images for Launch

### Critical (Must Have):
- [ ] Hero image for homepage
- [ ] Company logo (multiple sizes)
- [ ] Favicon (16x16, 32x32, 192x192, 512x512)
- [ ] Social media sharing image (1200x630)

### Important (Should Have):
- [ ] Service icons (6 icons for main services)
- [ ] Featured insight images (12 images)
- [ ] Regional illustrations (4 major regions)
- [ ] Payment method icons (common methods)

### Nice to Have:
- [ ] Team member photos
- [ ] Partner logos
- [ ] Office location images
- [ ] Background patterns

## Next.js Image Component

When using images in components, use Next.js Image component:

```tsx
import Image from 'next/image'

<Image 
  src="/images/hero/payment-analytics.jpg"
  alt="Payment analytics dashboard"
  width={1920}
  height={1080}
  priority
/>
```

## Notes

- All images should be uploaded to this directory structure
- Keep original high-resolution files backed up separately
- Update this README when adding new image categories
- Ensure all images have appropriate licensing for commercial use

