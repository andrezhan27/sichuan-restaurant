# Sichuan Restaurant · 川渝印象

Website for Sichuan Restaurant at Avenida Visconde de Valmor 15A, Lisbon. Built with Next.js, React, TypeScript and Tailwind CSS. Portuguese and English copy, continuously moving specialties and review carousels, a six-image ambience mosaic and direct phone reservations.

## Development

Requires Node.js 22.x (also specified in `.nvmrc` and `package.json`).

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Run `npm run check:files`, `npm run lint`, `npm test`, `npm run build` and `npm run typecheck` to verify. GitHub Actions runs these checks on pushes and pull requests.

Turbopack's development disk cache is disabled in `next.config.ts` because cache writes and compaction caused long compilation stalls locally. In-memory caching and hot reload remain enabled; each dev-server restart compiles routes afresh. Production builds are unaffected.

## Content and photography

Restaurant details live in `data/restaurant.ts`; dishes in `data/menu.ts`. All photos are stored locally in `public/restaurant`. The hero, nine dish images and six ambience tiles use the images supplied on 2 November 2026. The ambience collage leads with inviting dining-room views, followed by decorative details and the colourful stairway, then the skylit room and wood-panelled steps. Current menu prices and availability should be confirmed with the restaurant. Opening-day listings conflict, so the website asks visitors to confirm by phone. Google ratings and original-language review excerpts live in `data/reviews.ts`; these were checked on 2 November 2026 and are static content, not a live feed.

The old menu PDF is retired and excluded in `.gitignore`. `npm run check:files` rejects tracked or unignored files over 50 MiB; it does not scan old commits. Previously committed PDFs and images remain in Git history even after deletion. Purging those would require a separate history rewrite and coordinated force-push.

## Optional legal links

The website runs without environment variables. To enable legal-document links, configure the Supabase URL and publishable key from `.env.example` and explicitly set `SUPABASE_RESTAURANT_ID` to this restaurant's record ID. No database query runs unless all three are set. The server reads `privacy_policy_url` and `terms_and_conditions_url` from the active `restaurants` row; links are cached for five minutes. No database records are created or changed by this website.

Reservations use the restaurant's verified phone number. There is no third-party booking integration configured.

## Deployment

Import this GitHub repository into Vercel with these settings:

- Framework preset: Next.js
- Root directory: repository root (`.`)
- Node.js: 22.x (selected by `package.json`)
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: leave the framework default; do not override it to `public` or `out`.

No environment variables are required for the website to build and run. To show the optional legal links, add all three variables from `.env.example` to the relevant Vercel environments and redeploy. Keep `.env.local` and `.vercel` untracked. Use `npm start` to smoke-test the production build locally. This checkout does not itself create or deploy a Vercel project.
