# Repository Guidelines

## Project Structure & Modules
- App code lives in `src/`: components in `src/Components`, shared hooks in `src/Hooks`, context/providers in `src/Context`, and types in `src/types`.
- Entry wiring: `src/main.tsx` wraps `App` with `QueryClientProvider` and `ProductContextProvider`; `src/App.tsx` renders `HomePage`.
- UI composition: `HomePage` uses `Products` (search/filter grid) and `Footer`; `Navigation`, `ProductList`, and supporting components sit under `src/Components`.
- Mock API data: `data/db.json` served via `json-server` (`http://localhost:5500/products`).
- Static assets: `public/` for Vite public files; `index.css` pulls Tailwind.

## Build, Test, and Development Commands
- `npm install` — install dependencies.
- `npm run dev` — start Vite dev server.
- `npm run json-server` — serve mock API from `data/db.json` on port 5500.
- `npm run build` — type-check then build for production.
- `npm run preview` — preview the production build.
- `npm run lint` — run ESLint checks.

## Coding Style & Naming Conventions
- Language: React + TypeScript; prefer functional components and hooks.
- Naming: `PascalCase` for components/files (`Products.tsx`), `camelCase` for variables/functions, `snake_case` JSON keys only if API requires.
- Formatting: rely on ESLint (`eslint.config.js`); keep imports ordered by origin (libs → internal).
- Styling: Tailwind utilities; keep semantic wrappers and avoid inline styles unless necessary.

## Testing Guidelines
- Add tests near code (e.g., `src/Components/__tests__/Products.test.tsx`) using your preferred React testing stack; mock React Query with a test `QueryClientProvider`.
- Test expectations: loading/error states, search/category filtering, and rendering of `ProductList` cards.
- Name tests clearly by feature (e.g., `Products.search filters results`).

## Commit & Pull Request Guidelines
- Commits: use concise, imperative subjects (e.g., `Add product filter by category`, `Fix ProductContext error handling`); group logical changes.
- Pull requests: include a short summary, testing notes (`npm run lint`, relevant UI checks), and screenshots/GIFs for UI changes. Link related issues when applicable.

## Architecture Notes
- Data fetching flows through React Query in `ProductContext`; consume via `useProducts` to avoid prop drilling.
- Keep UI state (search, filters, pagination) local to components; reserve context for shared domain data (e.g., products, cart).
