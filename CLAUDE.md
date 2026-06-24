# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Personal portfolio / landing page for **mlsoftware.tech** — a Next.js 16 (App Router)
site with internationalization, dark mode, and a contact funnel. Deployed on Vercel.

## Commands

The project pins Node via `.tool-versions` (asdf). Use the project's Node when running scripts.

```bash
npm install        # install dependencies
npm run dev        # dev server with Turbopack (http://localhost:3000)
npm run build      # production build (runs TypeScript typecheck)
npm run start      # serve the production build
npm run lint       # ESLint (flat config via eslint.config.mjs)
```

There is no test suite. Treat `npm run build` and `npm run lint` as the verification gates —
both must pass before considering a change done.

## Architecture

- **Framework:** Next.js 16 App Router (`src/app`). React 19.
- **Styling:** Tailwind CSS v4 (configured through `@tailwindcss/postcss` in `postcss.config.mjs`;
  no `autoprefixer` — Tailwind v4 handles it). Global styles in `src/app/globals.css`.
  `tw-animate-css` for animation utilities. `cn()` helper in `src/lib/utils.ts` (clsx + tailwind-merge).
- **i18n:** `next-intl` v4. Locales are `en`, `es`, `pt` (default `en`). The single source of truth
  for routing/locales is `src/i18n/routing.ts` (`defineRouting`). Related files:
  - `src/i18n/request.ts` — per-request message loading (wired via `createNextIntlPlugin()` in `next.config.mjs`).
  - `src/i18n/navigation.ts` — locale-aware `Link`, `redirect`, `usePathname`, `useRouter`.
  - `src/proxy.ts` — locale routing middleware (Next 16 `proxy` convention, formerly `middleware.ts`).
  - Translation catalogs live in `src/messages/{en,es,pt}.json` — **keep all three in sync** when
    adding or changing keys.
- **Routing:** `/[locale]` for the home page and `/[locale]/experience`. The `/experience` path is
  localized to `/experiencia` for `pt` and `es` (see `routing.ts` `pathnames`).
- **Theming:** `next-themes` via `src/providers/ThemeProvider.tsx`. Components that read the theme use a
  mount-gate (`useState(false)` + `setMounted(true)` in an effect) to avoid hydration mismatch — these
  carry an intentional `// eslint-disable-next-line react-hooks/set-state-in-effect`.
- **Components:** `src/components/home/*` (page sections), `src/components/shared/*` (reusable widgets:
  contact form, CTAs, WhatsApp, Facebook Pixel, etc.), plus top-level `Sidebar`, `Header`, locale switcher.
- **Contact form:** `src/app/api/contact/route.ts` proxies submissions to Formspree (`FORMSPREE_URL`).
- **Analytics:** Google Analytics / Google Tag (`@next/third-parties`) and a Facebook Pixel component.

## Environment variables

See `.env.template`. Set these in `.env.local` for local dev:

- `FORMSPREE_URL` — Formspree endpoint for the contact form (server-side, required for the form to work).
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — WhatsApp number for the floating chat button.
- `NEXT_PUBLIC_CALENDIFY_URL` — scheduling link.
- `GA_ID` / `GTM_ID` — Google Analytics / Tag Manager IDs.
- `FB_PIXEL_ID` — Facebook Pixel ID.

`NEXT_PUBLIC_*` vars are exposed to the browser; the rest are server-only.

## Conventions

- Path alias `@/*` maps to `src/*` (see `tsconfig.json`).
- TypeScript is `strict`. Prefer typed props and avoid `any`.
- Prettier config in `.prettierrc`. ESLint extends `eslint-config-next` (core-web-vitals + typescript)
  as native flat configs in `eslint.config.mjs`.
- When adding UI strings, add the key to **all three** message catalogs.
