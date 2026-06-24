# CLAUDE.md

Guidance for working in this repo. Personal portfolio at https://mlsoftware.tech.

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript 6**
- **Tailwind CSS v4** — CSS-first config in `src/app/globals.css` (no `tailwind.config.ts` theme; tokens via `@theme` + CSS vars). Dark mode through `@custom-variant dark` + `next-themes` (`class` strategy).
- **next-intl v4** for i18n · **next-themes** (dark mode) · **motion** (`motion/react`, formerly framer-motion) · **sonner** (toasts) · **react-icons**
- Node pinned via asdf in `.tool-versions` (`nodejs 24.14.0`)

## Commands

- `npm run dev` — dev server (Turbopack)
- `npm run build` — production build
- `npm start` — serve the build
- `npm run lint` — `eslint .` (Next 16 removed `next lint`; flat config in `eslint.config.mjs` consumes `eslint-config-next/core-web-vitals` + `/typescript` natively)
- `npx tsc --noEmit` — typecheck

## Layout

- `src/app/[locale]/` — localized routes (`page.tsx`, `layout.tsx`, `experience/`, `not-found.tsx`)
- `src/app/api/contact/route.ts` — contact form POST → Formspree
- `src/components/` — `home/` (page sections), `shared/` (ContactCTA, ContactForm), plus Sidebar / CustomCursor / LocaleSwitcher
- `src/i18n/` — **authoritative i18n setup**: `routing.ts` (locales + localized pathnames), `request.ts` (next-intl request config, wired via `createNextIntlPlugin()` default path in `next.config.mjs`), `navigation.ts` (locale-aware `Link`/`useRouter`/etc.)
- `src/messages/{en,es,pt}.json` — translation strings
- `src/proxy.ts` — next-intl middleware (Next 16 `proxy` convention; replaces the old `middleware.ts`)
- `src/hooks/`, `src/lib/utils.ts`, `src/providers/ThemeProvider.tsx`
- `@/*` → `src/*` (see `tsconfig.json`)

## i18n rules

- Locales: `en` (default), `es`, `pt`. Localized paths in `src/i18n/routing.ts` (e.g. `/experience` → `/experiencia` for pt/es).
- **The three `src/messages/*.json` files must stay key-parallel** — identical key trees, same ordering. Any copy change touches all three. Use the `/i18n-sync` skill to keep them aligned.
- In server components use `getTranslations`; in client components `useTranslations`.

## Conventions

- Class names: compose with `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge).
- Icons: `react-icons`.
- shadcn/ui is configured (`components.json`, style "new-york", `@/components/ui`) but no UI components are generated yet.
- Env vars: `FORMSPREE_URL`, `WHATSAPP_NUMBER` (see `.env.template`).
- The `mounted` hydration guard in `Sidebar.tsx` is intentional (next-themes); it carries an `eslint-disable` for `react-hooks/set-state-in-effect`.

## Notes

- `npm audit` reports 2 moderate issues in postcss bundled inside Next itself; fixing requires downgrading Next, so they're left as-is.
- ESLint stays on v9 — several plugins (`import`, `jsx-a11y`, `react`) don't yet declare ESLint 10 peer support.
