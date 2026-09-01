# Repository Guidelines

## Project Structure & Module Organization

This is a React, TypeScript, and Vite application. Keep code in `src/`: `assets/` for bundled assets; `components/ui/` for primitives (for example, `Button` and `Dialog`); `components/layout/` for `Header`, `Footer`, and containers; `components/sections/` for landing-page sections; `pages/` for routes; and `layouts/` for page shells.

Use `hooks/` for reusable stateful logic, `services/` for API integrations, `lib/` for configured clients, `types/` for shared models, `utils/` for pure helpers, and `constants/` for application constants. Complex features may use `src/features/<feature>/` with local components, hooks, services, and types. Keep `App.tsx` lightweight: compose the shell, routing, or main page—not an entire page.

Use this baseline structure:

```text
src/
├── assets/       # Bundled images, icons, fonts, and static assets
├── components/
│   ├── ui/       # Buttons, cards, dialogs, inputs, badges
│   ├── layout/   # Header, footer, navbar, containers
│   └── sections/ # Reusable page sections
├── pages/        # Route-level pages
├── layouts/      # Page and application layouts
├── hooks/ lib/ services/ types/ utils/ constants/
├── App.tsx
├── main.tsx
└── index.css
```

Keep reusable UI in `components/` and route composition in `pages/`; pages must compose sections rather than duplicate UI. Give multi-part sections their own directories, e.g. `components/sections/Hero/Hero.tsx` and `HeroContent.tsx`, or `Services/Services.tsx` and `ServiceCard.tsx`. Store unbundled public files in `public/{images,icons,logos,fonts}/` and reference them using `/assets/...` URLs. Use kebab-case asset filenames and optimized SVG, WebP, or AVIF formats. Do not add remote stock-image placeholders unless requested.

## Component, Data, and Feature Boundaries

Use functional components and hooks; use class components only for a specific technical need. Create custom hooks only when stateful logic is reused. Keep API calls in `services/`, response models in `types/`, configured SDK clients (such as Axios or analytics) in `lib/`, and pure non-React helpers in `utils/`. Components should have a single responsibility.

When a feature grows beyond the shared folders, group it by feature, for example `src/features/contact/{components,hooks,services,types}/ContactForm.tsx`. This keeps related logic together without creating large, global folders.

## Build, Test, and Development Commands

Use Node.js 22 (`.nvmrc`).

- `npm ci` installs lockfile-pinned dependencies.
- `npm run dev` starts the Vite server with HMR.
- `npm run lint` checks TypeScript/React code with ESLint.
- `npm run build` type-checks and produces `dist/`.
- `npm run preview` serves the production build locally.

Run lint and build before submitting. No test runner is configured yet. Add tests with new non-trivial logic; colocate unit tests with their code and place integration/end-to-end tests in `tests/`.

## Coding Style & Naming Conventions

Use strict TypeScript, explicit interfaces/types, two-space indentation, single quotes, and trailing commas in multiline calls. Avoid `any` unless technically justified and avoid large or duplicated components. Use Tailwind utilities for styling and reserve `src/index.css` for global styles; avoid CSS files where utilities are sufficient. Components use PascalCase; functions and variables use camelCase.

Prefer the `@/` alias over deeply nested relative imports, e.g. `@/components/sections/Hero/Hero`. Pages should compose reusable components; keep API calls out of page components. Build accessible, responsive UI with clear separation between presentation, application logic, services, and utilities.

## Commit, Pull Request, and Configuration Guidelines

Git history is unavailable in this checkout, so use focused, imperative commit subjects such as `Add contact form validation`. PRs should describe the user-facing change, link an issue when applicable, list validation performed, and include screenshots for UI changes.

Keep configuration at the root. Add `.env.example` for required variables; never commit secrets or production credentials.
