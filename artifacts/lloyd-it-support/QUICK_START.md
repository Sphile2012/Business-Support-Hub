# 🚀 Quick Start Guide

## Prerequisites
- Node.js 18 or higher ([Download](https://nodejs.org/))
- npm (comes with Node.js)

## Local Development

### 1. Install Dependencies
```bash
cd artifacts/lloyd-it-support
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit: http://localhost:5173

### 3. Build for Production
```bash
npm run build
```

Output will be in: `dist/public/`

## Deploy to Netlify

### ✅ Build Issue Fixed!
The PORT environment variable error has been resolved. The build now works out of the box.

### Method 1: GitHub + Netlify (Best for Production)
1. Push code to GitHub
2. Import to Netlify
3. It auto-detects `netlify.toml`
4. Click Deploy ✅

### Method 2: Netlify Drop (Fastest)
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag `dist/public` folder
4. Done! ✅

## Project Structure
```
artifacts/lloyd-it-support/
├── src/
│   ├── components/
│   │   ├── layout/navbar.tsx    # Nav with hamburger menu
│   │   └── sections/            # Page sections
│   ├── pages/
│   └── App.tsx
├── public/
│   └── _redirects              # SPA routing
├── attached_assets/
│   └── cosmic-hero.jpg         # Main hero image
├── netlify.toml                # Deploy config
└── package.json
```

## Features Included
✅ Cosmic-themed hero section  
✅ Responsive hamburger menu  
✅ Services showcase  
✅ Pricing tiers  
✅ Contact form  
✅ SEO optimized  
✅ Netlify-ready (Build fixed!)

## Need Help?
- **Build issues?** See `NETLIFY_FIX.md`
- **Deployment guide?** See `DEPLOYMENT.md`
