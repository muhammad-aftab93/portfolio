# Senior / Staff Software Engineer Portfolio Website
### Distributed Systems & High-Performance Frontend Architectures

A production-ready, highly polished portfolio engineered for a Senior / Staff Software Engineer specializing in Angular (v18/19+), Node.js, Cloud Native systems (AWS/GCP), and System Design.

---

## 🏛️ Architectural Highlights & Modern Angular Paradigms

1. **Standalone Components Exclusively**:
   - Zero `NgModule` overhead. Every component is declared with `standalone: true`, ensuring optimal tree-shaking and component-level code-splitting.

2. **Modern Control Flow Syntax (`@if`, `@for`, `@switch`)**:
   - Complete replacement of legacy structural directives (`*ngIf`, `*ngFor`).
   - Faster compilation, zero runtime directive overhead, and enhanced type narrowing in templates.

3. **Angular Signals Reactive State Model**:
   - Granular reactivity using `signal()`, `computed()`, and `effect()`.
   - Theme switching (`isDarkMode`), active project category filtering (`filteredProjects`), and mobile navigation toggles operate via deterministic signals without triggering whole-tree dirty checking.

4. **Deferrable Views (`@defer`) for Core Web Vitals**:
   - Heavy sub-views like the interactive project grid and the reactive contact form canvas are lazy-loaded via `@defer (on viewport; prefetch on idle)`.
   - Guaranteed sub-second First Contentful Paint (FCP) and Largest Contentful Paint (LCP).

5. **`NgOptimizedImage` Integration**:
   - High-fidelity image optimization preventing Cumulative Layout Shift (CLS) and enabling responsive `srcset` generation.

6. **Reactive Forms Validation**:
   - Real-time field validation with immediate user feedback, character bounds, RFC-compliant email checks, and async submit handling.

7. **Dedicated `ProfileDataService`**:
   - Decoupled state and data-layer service leveraging RxJS Observables and Signals. Ready for immediate plug-and-play wiring to a headless CMS (e.g., Contentful, Strapi, Sanity) or GraphQL API.

---

## 🚀 Quickstart & Local Execution

### Prerequisites
- **Node.js**: v18.19.0 or v20+ / v22+
- **NPM**: v9.0.0+
- **Angular CLI**: v18 or v19 (`npm install -g @angular/cli`)

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/your-username/senior-engineer-portfolio.git
cd senior-engineer-portfolio

# Install dependencies
npm install
```

### 2. Development Server

To launch the local development server with Hot Module Replacement and live reload:

```bash
npm run dev
# or for native Angular CLI:
ng serve --open
```

Navigate to `http://localhost:3000` (or `http://localhost:4200`).

### 3. Production Build

```bash
npm run build
```

This compiles optimized, minified production assets with Differential Loading and ahead-of-time (AOT) compilation into the `dist/` directory.

---

## 📁 Repository Structure

```text
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/          # Sticky glassmorphism header & theme toggle
│   │   │   ├── hero/            # Geometric canvas animation, CTAs, telemetry pills
│   │   │   ├── experience/      # Vertical interactive timeline with expandable metrics
│   │   │   ├── skills/          # Categorized badge grid with mastery filters
│   │   │   ├── projects/        # Advanced portfolio grid with real-time category filters
│   │   │   ├── testimonials/    # Leadership endorsements & LinkedIn verified tags
│   │   │   ├── contact/         # Reactive form with real-time validation & status states
│   │   │   └── footer/          # Architectural tags & quick navigation
│   │   ├── models/
│   │   │   └── portfolio.model.ts  # Strict TypeScript domain interfaces
│   │   ├── services/
│   │   │   └── profile-data.service.ts # Signal + RxJS CMS data streaming service
│   │   ├── app.component.ts     # Root standalone component with @defer boundaries
│   │   └── app.config.ts        # Standalone application configuration (Routing, HTTP)
│   ├── index.html               # Entry point with preconnected developer fonts
│   └── styles.css               # Tailwind CSS utility imports
├── angular.json                 # Angular workspace configuration
├── tsconfig.json                # Strict TypeScript configuration
└── package.json                 # Dependencies and execution scripts
```

---

## 🧪 Quality & Testing Standards

- **Strict Type Checking**: TypeScript `strict: true` enabled; `noImplicitAny: true`.
- **Accessibility**: Built with semantic HTML landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), ARIA attributes, and high-contrast WCAG AA compliant palettes.
- **Responsive Range**: Tested across mobile (375px), tablet (768px), desktop (1280px), and ultra-wide screens (1920px+).
