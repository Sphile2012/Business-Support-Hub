# Netlify Deployment Guide

## Quick Deploy Options

### Option 1: Direct Netlify Deploy (Easiest)

1. Visit [Netlify Drop](https://app.netlify.com/drop)
2. Build your project:
   ```bash
   cd artifacts/lloyd-it-support
   npm install
   npm run build
   ```
3. Drag and drop the `dist/public` folder to Netlify

### Option 2: GitHub + Netlify (Recommended for Production)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Netlify will auto-detect settings from `netlify.toml`
   - Click "Deploy site"

### Option 3: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   cd artifacts/lloyd-it-support
   npm install
   npm run build
   netlify deploy --prod
   ```

## Configuration

The project includes:
- ✅ `netlify.toml` - Build configuration
- ✅ `public/_redirects` - SPA routing rules
- ✅ Optimized Vite build settings

## Build Settings (Pre-configured)

```toml
Build command: npm install && npm run build
Publish directory: dist/public
Base directory: artifacts/lloyd-it-support
```

## Environment Variables

No environment variables are required for basic deployment.

## Custom Domain

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow DNS configuration instructions

## Troubleshooting

### Build fails with module errors
- Make sure you're in the correct directory: `artifacts/lloyd-it-support`
- Delete `node_modules` and `package-lock.json`, then run `npm install` again

### 404 errors on page refresh
- The `_redirects` file handles this automatically
- Ensure `public/_redirects` exists in your build

### Cosmic image not loading
- The image is stored in `attached_assets/cosmic-hero.jpg`
- It's referenced via Vite's alias: `@assets/cosmic-hero.jpg`

## Performance Optimization

The site is already optimized with:
- ⚡ Vite for fast builds
- 🎨 Tree-shaking and code splitting
- 📦 Optimized asset compression
- 🖼️ Image optimization ready

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify mobile hamburger menu works
- [ ] Check contact form functionality
- [ ] Test responsive design on different devices
- [ ] Validate SEO meta tags
- [ ] Test page load speed with Lighthouse

## Support

For deployment issues, check:
- [Netlify Documentation](https://docs.netlify.com)
- [Vite Build Guide](https://vitejs.dev/guide/build.html)
