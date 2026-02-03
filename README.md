# Azure Trails Tourism — Itinerary Showcase

## Overview
This project is a production-ready, frontend-only tourism itinerary showcase built with React (Vite + TypeScript), Ant Design v6.2.2, and Tailwind CSS v4. All dynamic content (itineraries, day plans, pricing, images, footer cards, and contact data) is driven by JSON so updates instantly reflect in the UI.

## Folder Structure (Feature-First)
```
src/
  app/                      # App shell + routing
  components/               # Reusable UI-only atoms/layout wrappers
    layout/
    ui/
  data/                     # JSON content (single source of truth)
  features/                 # Domain-driven features
    about/
    contact/
    home/
    itineraries/
      components/
      hooks/
      pages/
      services/
      types.ts
    site/
      hooks/
      services/
      types.ts
  styles/                   # Global styling + Tailwind entrypoint
```

## Feature-Based Architecture
- **Every feature is self-contained.** UI components, hooks, services, and pages live inside the feature folder.
- **Global components are minimal.** `src/components/` only contains reusable layout wrappers and UI atoms.

## JSON-Driven Content
All dynamic content is stored in:
```
src/data/siteContent.json
```
This JSON includes:
- Itineraries (including day-by-day plans)
- Pricing, durations, categories, and tags
- Hero content and highlights
- About and contact details
- Footer company card details

### How It Works
Feature services read and return JSON data:
- `features/itineraries/services/itineraryService.ts`
- `features/site/services/siteContentService.ts`

Components never hardcode content; they only render from these services.

### Updating Content Daily
1. Open `src/data/siteContent.json`.
2. Update itinerary data, new images, or footer content.
3. Save the file — the UI updates instantly without any code changes.

## Routing
Routing is handled by React Router:
- `/` Home
- `/itineraries` Listing
- `/itineraries/:slug` Detail
- `/about`
- `/contact`

Routes are lazy-loaded to optimize initial load time.

## Animations & Transitions
- Tailwind utility classes provide smooth hover transitions.
- Global `scroll-behavior: smooth` enables a native smooth scroll.
- Subtle card reveal and translate animations are applied on hover.

## Adding a New Itinerary
1. Open `src/data/siteContent.json`.
2. Append a new itinerary object to the `itineraries` array.
3. Ensure each itinerary includes `id`, `title`, `location`, `duration`, `price`, `image`, `category`, `tags`, `featured`, `overview`, and `days`.
4. The listing and detail pages will update automatically.

## Type Safety
- TypeScript strict mode is enabled.
- Feature types (`types.ts`) define the shape of JSON data.
- Services cast JSON data to strict types to prevent runtime errors.

## Scaling the Project
- Add new features under `src/features/` with dedicated components, hooks, and services.
- Expand JSON or split it into multiple JSON files if the dataset grows.
- Add new routes inside `src/app/App.tsx` with lazy loading.
- Use `src/components/` for shared layout or UI primitives only.

## Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
