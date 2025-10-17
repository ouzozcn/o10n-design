# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Oğuzhan Özcan (o10n.design), built with Next.js 15, TypeScript, and Tailwind CSS. The site showcases work as an analytics and data-driven product designer with emphasis on accessibility, research-based design, and developer-friendly practices.

## Development Commands

### Primary Commands
- `npm run dev` - Start Next.js development server
- `npm run build` - Build production bundle (runs next-sitemap postbuild automatically)
- `npm start` - Start production server
- `npm run lint` - Run ESLint on codebase

### Storybook Commands
- `npm run storybook` - Start Storybook development server on port 6006
- `npm run build-storybook` - Build static Storybook
- `npm run chromatic` - Deploy to Chromatic for visual regression testing

### Testing
Tests are integrated with Storybook using Vitest:
- Test setup uses Playwright browser provider with Chromium
- Tests run in browser mode via `@storybook/addon-vitest`
- Workspace configuration in `vitest.config.ts`

## Architecture

### App Structure
- **Next.js App Router** (src/app/) - File-based routing with Server Components by default
- **Client Components** - Pages with client interactivity use `*Client.tsx` convention (e.g., `HomeClient.tsx`, `KromaClient.tsx`)
- **Path Alias** - `@/*` maps to `./src/*` for imports

### Key Directories
- `src/app/` - Next.js pages and routes (App Router)
- `src/components/` - Shared React components
  - `src/components/ui/` - shadcn/ui components (button, card, resizable)
  - `src/components/animate-ui/` - Animation components
  - `src/components/kibo-ui/` - Custom UI library components
  - `src/components/rough-notation/` - Rough notation wrapper components
- `src/lib/` - Utility functions and shared logic
- `src/hooks/` - Custom React hooks (use-controlled-state, use-is-in-view)
- `src/stories/` - Storybook story files
- `src/styles/` - Global styles and CSS modules
- `public/` - Static assets

### Component Design
- Mix of custom components (Button.tsx, Menu.tsx, etc.) and shadcn/ui components
- Component library documented in Storybook with accessibility testing (`@storybook/addon-a11y`)
- Uses class-variance-authority (CVA) for component variants

### Styling System
- **Tailwind CSS** with extensive custom color palette
- **CSS Variables** for shadcn/ui theming (--border, --input, --ring, etc.)
- **Font**: Space Grotesk (loaded from Google Fonts)
- Custom font sizes: h1-h4, title with defined line heights
- `tailwind-merge` and `clsx` for conditional class composition

### Key Features
- **Analytics**: Vercel Analytics, Speed Insights, custom Analytics component, and third-party tracking (Hotjar, Google Analytics/Tag Manager)
- **SEO**: Comprehensive metadata in layout.tsx, structured data via StructuredData component, sitemap generation with next-sitemap
- **Middleware** (src/middleware.ts): HTTPS enforcement and www-to-non-www redirects in production only
- **Image Optimization**: Next.js Image component with Unsplash remote patterns configured
- **Code Examples**: Interactive code sandboxes via `@codesandbox/sandpack-react`
- **Animations**: Motion library and rough-notation for interactive annotations

### Build Optimizations
- CSS optimization enabled (`experimental.optimizeCss: true`)
- Webpack minimization configured
- Critters for critical CSS inlining
- TypeScript and ESLint errors ignored during builds (intentional for deployment flexibility)

## Content Structure

The site includes:
- **Case Studies** (`/case-study/`) - Project showcases
- **Products** (`/product/`) - Product design work (e.g., Kroma, Brifl Design System)
- **Articles** (`/articles/`) - Design and development articles
- **Ideas** (`/ideas/`) - Experimental concepts
- **Lab** (`/lab/`) - Interactive experiments
- **Playground** (`/playground/`) - Testing ground for new features
- **About** (`/about-me/`) - Personal information
- **Tech Stack** (`/tech-stack/`) - Technology overview
- **Docs** (`/docs/`) - Component documentation via Storybook

## Important Notes

### Linting and Type Checking
- ESLint configured with TypeScript, React, and Prettier integration
- Prettier rules defined inline in eslint.config.mjs
- Note: Both TypeScript and ESLint errors are ignored during builds per next.config.ts

### Production Behavior
- Middleware redirects (HTTPS, www removal) only apply in production
- Local development on localhost/127.0.0.1 bypasses redirects

### Dependencies to Note
- **React Flow** (`@xyflow/react`) - For diagram/flowchart visualizations
- **MUI Icons** - Material UI icon library
- **Shiki** - Syntax highlighting for code blocks
- **Swiper** - Touch slider/carousel component
- **React Resizable Panels** - Draggable panel layouts
- **React GitHub Calendar** - GitHub contribution calendar visualization

### Deployment
- Hosted on Vercel (vercel.json configuration present)
- Domain: o10n.design
- Sitemap auto-generated post-build at /sitemap.xml
