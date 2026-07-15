# Lloyd IT Support Portfolio

Professional IT support portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🎨 Modern, brutalist design aesthetic
- 📱 Fully responsive with mobile hamburger menu
- ⚡ Fast performance with Vite
- 🌙 Dark mode support
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Deployment on Netlify

### Option 1: Deploy via Git (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Netlify
3. Netlify will auto-detect the configuration from `netlify.toml`
4. Click "Deploy"

### Option 2: Manual Deploy

1. Build the project locally:
   ```bash
   npm run build
   ```

2. Drag and drop the `dist/public` folder to Netlify

### Option 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── navbar.tsx       # Navigation with mobile menu
│   │   ├── sections/
│   │   │   ├── hero.tsx         # Hero section with cosmic image
│   │   │   ├── services.tsx     # Services showcase
│   │   │   ├── pricing.tsx      # Pricing plans
│   │   │   ├── process.tsx      # Work process
│   │   │   └── contact.tsx      # Contact form
│   │   └── ui/                  # Reusable UI components
│   ├── pages/
│   │   ├── home.tsx
│   │   └── not-found.tsx
│   ├── App.tsx
│   └── main.tsx
├── public/
│   ├── _redirects              # SPA routing for Netlify
│   ├── favicon.svg
│   └── robots.txt
└── netlify.toml                # Netlify configuration

```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Accessible components
- **Lucide React** - Icons
- **React Hook Form** - Form handling
- **Wouter** - Lightweight routing

## License

All rights reserved.
