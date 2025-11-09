# GOBI 2025: Global Open Source Business Innovation Conference

This is the official website for GOBI 2025 - Global Open Source Business Innovation Conference, connecting developers, businesses, and policy partners to explore sustainable paths from "source" to "industry".

## About GOBI

GOBI 2025 aims to transform individual creativity into a driving force for the future of industry. AI is becoming the ultimate bridge connecting developers and creators, bringing massive talent into the open source ecosystem like never before. A new creator-centric business paradigm is rising - it's no longer about simply consuming open source, but about empowering and amplifying open source as a digital public product.

### Mission

Open source is a digital public product. GOBI 2025 connects developers, businesses, and policy partners to explore sustainable paths from "source" to "industry" through transparent collaboration that drives technological innovation and commercial mechanisms that amplify social and economic value.

### Date & Venue

- **Date**: December 21, 2025
- **Location**: Renaissance Beijing Haidian Hotel, Beijing, China
- **Website**: https://beijing2025.upstreamlabs.org

## Technical Overview

The website is built using Astro.js 5.13.3 with a component-based architecture. It features:

- Bilingual support (Chinese/English) with synchronized content
- Responsive design optimized for all devices
- Modern UI with gradient backgrounds and smooth animations
- Reusable components for consistent styling
- Dynamic content loading from JSON files
- SEO-optimized static site generation

## Key Features

- Hero section with event details and co-organizer logos
- Mission statement and overview
- Featured speakers from various domains
- Detailed agenda schedule
- Upstream Open Source Business Camp integration
- Selling points highlighting breakthrough, gathering, creation, and sustainability themes
- Venue information with interactive map
- Registration and proposal submission buttons

## Color Scheme

- Primary (Azure): #2B74FF
- Aqua/Water Green: #00C896
- Osmanthus Gold: #FFC640
- Ink Black: #1C1D24

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- `src/components/` - Reusable UI components
- `src/layouts/` - Page layouts
- `src/pages/` - Page content (separated by language)
- `src/styles/` - SCSS styling files
- `public/` - Static assets (images, icons, etc.)

## Custom Components

- `Badge.astro` - Special badges for voting and training camp
- `CityTour.astro` - City tour indicator
- `Hero.astro` - Main hero section with badges support

## Deployment

The website can be deployed to any static hosting service. For GitHub Pages, use:
```bash
npm run build:gh-pages
```