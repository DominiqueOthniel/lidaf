# Next.js

A modern Next.js 15 application built with TypeScript and Tailwind CSS.

## Features

- **Next.js 15** — Latest version with improved performance and features
- **React 19** — Latest React version with enhanced capabilities
- **Tailwind CSS** — Utility-first CSS framework for rapid UI development

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── (site)/           # Pages publiques (architecture multipage)
│   │   ├── layout.tsx    # Header + Footer partagés
│   │   ├── page.tsx      # Accueil
│   │   ├── services/
│   │   ├── formations/
│   │   ├── clients/
│   │   └── contact/
│   ├── components/       # Sections réutilisables par page
│   ├── api/contact/      # API formulaire de contact
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/           # Composants partagés
│   ├── ui/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── PageHero.tsx
└── styles/
    ├── index.css
    └── tailwind.css
```

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |
| `npm run format`| Format code with Prettier|
