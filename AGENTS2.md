This repository contains a React application built with Vite and TypeScript. Use modern React with functional components and hooks. Keep the application source code inside src/ and organize reusable UI components separately from page-specific components.

Use the following structure:

src/
├── assets/ # Local images, icons, fonts, and static assets
├── components/ # Reusable React components
│ ├── ui/ # Generic reusable UI primitives
│ ├── layout/ # Header, footer, navbar, containers, etc.
│ └── sections/ # Reusable page sections
├── pages/ # Route-level pages
├── layouts/ # Page/application layouts
├── hooks/ # Reusable React hooks
├── lib/ # Libraries and configured third-party clients
├── services/ # API clients and external service integrations
├── types/ # Shared TypeScript types and interfaces
├── utils/ # Stateless utility/helper functions
├── constants/ # Application constants
├── App.tsx
├── main.tsx
└── index.css

Keep reusable components in components/. Generic UI primitives such as buttons, cards, dialogs, inputs, and badges belong in components/ui/. Shared structural components such as Header, Footer, Navbar, and Container belong in components/layout/.

Place landing-page sections inside components/sections/. Each major section should have its own directory when the section contains multiple components, assets, or logic.

For example:

components/
└── sections/
├── Hero/
│ ├── Hero.tsx
│ └── HeroContent.tsx
├── Services/
│ ├── Services.tsx
│ └── ServiceCard.tsx
├── About/
├── WhyUs/
├── Portfolio/
├── Process/
├── Testimonials/
└── CTA/

Keep route-level components inside pages/. Pages should compose reusable components and sections rather than containing large amounts of duplicated UI.

Use React functional components and TypeScript. Avoid class components unless there is a specific technical requirement.

Use custom hooks inside hooks/ for reusable stateful logic. Do not create custom hooks for simple logic that is only used by one component.

Place API communication inside services/ rather than directly inside page components. Keep API response types and shared models inside types/.

Use lib/ for configured third-party libraries and clients, such as Axios instances, analytics clients, or other external SDK configurations.

Use utils/ for pure, stateless helper functions. Utilities should not contain React-specific state or lifecycle logic.

Store local static assets in src/assets/. Use kebab-case filenames and prefer optimized WebP, AVIF, SVG, or other appropriate formats.

Store publicly accessible assets that do not require bundling in public/assets/. Organize them by purpose, for example:

public/
└── assets/
├── images/
├── icons/
├── logos/
└── fonts/

Reference public assets using local /assets/... URLs. Do not introduce remote stock-image placeholders unless explicitly requested.

Use Tailwind CSS for styling. Keep global styles in src/index.css. Avoid unnecessary CSS files when the styling can be expressed using Tailwind utilities.

Keep App.tsx lightweight. Do not place the entire landing page inside App.tsx. App.tsx should primarily compose the application shell, routing, or main page structure.

Use TypeScript strictly. Avoid any unless there is a clear technical reason. Prefer explicit interfaces and types.

Use the @ alias for imports from src/ and avoid deeply nested relative imports.

Example:

import Hero from '@/components/sections/Hero/Hero';
import Button from '@/components/ui/Button';

Prefer:

@/components/sections/Hero/Hero

over:

../../../components/sections/Hero/Hero

If a feature becomes sufficiently complex, use feature-based organization rather than creating an excessive number of global folders.

For example:

src/
└── features/
└── contact/
├── components/
├── hooks/
├── services/
├── types/
└── ContactForm.tsx

Keep configuration files at the repository root, including package.json, vite.config.ts, tsconfig.json, .npmrc, .nvmrc, and environment files.

Use .env.example to document required environment variables. Never commit secrets or production credentials.

Tests should be colocated with the code they test or placed inside tests/ for integration and end-to-end flows.

Keep components focused on a single responsibility. Avoid unnecessarily large components and avoid duplicating UI code across pages.

The project should prioritize maintainability, reusability, accessibility, responsive design, and clean separation between presentation, application logic, API communication, and shared utilities.
