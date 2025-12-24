# Portfolio

A modern, accessible portfolio website built with Angular and TypeScript.

## Features

- **Standalone Components**: Utilizes Angular's standalone component architecture
- **Signal-based State Management**: Leverages Angular signals for reactive state
- **Accessibility First**: WCAG AA compliant with full keyboard navigation
- **Optimized Performance**: Lazy loading and OnPush change detection
- **Responsive Design**: Mobile-first approach with optimized images

## Tech Stack

- **Angular** v20+
- **TypeScript** with strict mode
- **Standalone Components** (no NgModules)
- **Angular Signals** for state management

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`

### Build

```bash
npm run build
```

Build artifacts will be stored in the `dist/` directory.

## Code Standards

- Strict TypeScript with type safety
- OnPush change detection strategy
- Reactive forms over template-driven
- Native control flow (`@if`, `@for`, `@switch`)
- `inject()` function for dependency injection

## License

MIT