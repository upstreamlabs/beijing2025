# GOBI 2025 Beijing Website

This is the official website for GOBI 2025: From Source to Scale - Open Source Business and Innovation Conference.

## Project Overview

The website is built using Astro.js framework with a component-based architecture. It features:

- Bilingual support (Chinese/English)
- Responsive design for all devices
- Modern UI with gradient backgrounds and smooth animations
- Reusable components for consistent styling

## Key Features

- Hero section with event details and call-to-action buttons
- Agenda timeline with detailed schedule
- Track descriptions for specialized sessions
- Speaker profiles and target audience information
- Registration and partnership options
- FAQ section
- City tour indicator (Beijing | Paris | SF)

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