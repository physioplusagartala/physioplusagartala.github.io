# Image Setup Instructions for Physio Plus

## Required Doctor Images

The following images need to be placed in the `public/images/` folder:

### 1. Dr. Birat Banik

- **Filename**: `dr-birat-banik.jpg`
- **Location**: `/public/images/dr-birat-banik.jpg`
- **Description**: Dr. Birat Banik in gray medical scrubs
- **Recommended size**: 1200x1200px (or 1200x900px), optimized for web (100-150KB)

### 2. Dr. Parijat Saha

- **Filename**: `dr-parijat-saha.jpg`
- **Location**: `/public/images/dr-parijat-saha.jpg`
- **Description**: Dr. Parijat Saha in blue medical scrubs
- **Recommended size**: 1200x1200px (or 1200x900px), optimized for web (100-150KB)

## How to Add the Images

### Option 1: From Attachments (Quick)

1. Open your file explorer
2. Navigate to `public/images/` folder
3. Copy the two doctor images from the attachments provided to you
4. Paste them into the `public/images/` folder
5. Ensure filenames match exactly as indicated above (case-sensitive on some servers)

### Option 2: Manual Download/Save

1. Download the doctor images from your source
2. Optimize them for web using an image editor or tool like TinyPNG
3. Save them as:
   - `public/images/dr-birat-banik.jpg`
   - `public/images/dr-parijat-saha.jpg`

## Image Optimization Tips

For best performance and Google rankings:

- **Format**: Use JPEG (.jpg) for photos
- **Size**: Keep under 150KB each
- **Dimensions**: 1200x1200px or 1200x900px
- **Quality**: Maintain good clarity for professional appearance
- **Compression**: Use tools like ImageOptim, TinyPNG, or your build system's image optimization

## Verification

After adding images:

1. Run the build:

   ```bash
   bun run build
   ```

2. Start the dev server:

   ```bash
   bun run dev
   ```

3. Open http://localhost:5173/our-team
4. Verify images display correctly on:
   - Desktop (1920px+)
   - Tablet (768px)
   - Mobile (375px)

## What's Been Done

✅ Added image properties to teamMembers array in OurTeam.tsx
✅ Created img elements with:

- Lazy loading for performance
- Responsive sizing (aspect-square on desktop, aspect-video on mobile)
- SEO-optimized alt text including doctor name, role, and clinic name
- Async image decoding for better performance

✅ Added JSON-LD Physician schema for Google Rich Results
✅ Updated meta tags in index.html with doctor names for SEO
✅ Optimized for mobile, desktop, and search engines
✅ `public/images/` folder created and ready

## Next Steps

1. ✅ Add the two doctor images to `public/images/`
2. Run `bun run build` to verify no TypeScript errors
3. Deploy to production
4. Monitor Google Search Console for doctor profile indexing
