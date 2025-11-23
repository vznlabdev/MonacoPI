/**
 * Image Optimization Script for Monaco PI
 * 
 * This script uses Sharp to optimize images in the public/images folder.
 * 
 * Usage:
 *   npm install sharp --save-dev
 *   node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../public/images');
const BACKUP_DIR = path.join(__dirname, '../public/images/originals');
const QUALITY = 80; // JPEG quality (80 is good balance of quality/size)

// Images that need optimization (based on analysis)
const IMAGES_TO_OPTIMIZE = [
  'corporate-fraud-kevin-matos-Nl_FMFpXo2g-unsplash.jpg',
  'custody-investigation-daiga-ellaby-JZ51o_-UOY8-unsplash.jpg'
];

async function optimizeImages() {
  try {
    // Create backup directory if it doesn't exist
    if (!fs.existsSync(BACKUP_DIR)) {
      fs.mkdirSync(BACKUP_DIR, { recursive: true });
      console.log('✅ Created backup directory');
    }

    console.log('🎨 Starting image optimization...\n');

    for (const filename of IMAGES_TO_OPTIMIZE) {
      const inputPath = path.join(IMAGES_DIR, filename);
      const backupPath = path.join(BACKUP_DIR, filename);
      const outputPath = inputPath; // Overwrite original

      // Check if file exists
      if (!fs.existsSync(inputPath)) {
        console.log(`⚠️  Skipping ${filename} - file not found`);
        continue;
      }

      // Get original file size
      const originalStats = fs.statSync(inputPath);
      const originalSizeKB = (originalStats.size / 1024).toFixed(2);

      // Backup original file
      fs.copyFileSync(inputPath, backupPath);
      console.log(`💾 Backed up: ${filename}`);

      // Optimize image
      await sharp(inputPath)
        .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
        .toFile(inputPath + '.tmp');

      // Replace original with optimized
      fs.renameSync(inputPath + '.tmp', outputPath);

      // Get new file size
      const newStats = fs.statSync(outputPath);
      const newSizeKB = (newStats.size / 1024).toFixed(2);
      const reduction = (((originalStats.size - newStats.size) / originalStats.size) * 100).toFixed(1);

      console.log(`✅ Optimized: ${filename}`);
      console.log(`   Before: ${originalSizeKB} KB`);
      console.log(`   After:  ${newSizeKB} KB`);
      console.log(`   Saved:  ${reduction}%\n`);
    }

    console.log('🎉 Image optimization complete!');
    console.log(`📁 Original files backed up to: ${BACKUP_DIR}`);
    
  } catch (error) {
    console.error('❌ Error during optimization:', error);
    process.exit(1);
  }
}

// Run optimization
optimizeImages();

