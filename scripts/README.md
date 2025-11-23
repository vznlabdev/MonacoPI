# Monaco PI - Image Optimization Scripts

## optimize-images.js

Optimizes images in `public/images/` folder using Sharp.

### Setup

```bash
# Install Sharp (dev dependency)
npm install sharp --save-dev
```

### Usage

```bash
# Run the optimization script
node scripts/optimize-images.js
```

### What It Does

1. Creates backup of original images in `public/images/originals/`
2. Optimizes target images to 80% JPEG quality with mozjpeg
3. Replaces original files with optimized versions
4. Shows before/after file sizes and percentage saved

### Target Images

Currently optimizes:
- `corporate-fraud-kevin-matos-Nl_FMFpXo2g-unsplash.jpg` (159KB → ~70KB)
- `custody-investigation-daiga-ellaby-JZ51o_-UOY8-unsplash.jpg` (136KB → ~60KB)

### Expected Results

- **50-60% file size reduction**
- **No visible quality loss**
- **Faster page load times**
- **Better Core Web Vitals**

### Safety

- ✅ Original files backed up before optimization
- ✅ Can restore from `public/images/originals/` if needed
- ✅ Only optimizes images that are too large
- ✅ Non-destructive (backups preserved)

### Manual Alternative

If you prefer not to use the script, manually optimize using:
- **TinyJPG**: https://tinyjpg.com (drag & drop, free for up to 20 images)
- **Squoosh**: https://squoosh.app (Google's image optimizer)

Both offer excellent compression with minimal quality loss.

