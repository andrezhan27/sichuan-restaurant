# Sichuan Restaurant · 川渝印象

Website for Sichuan Restaurant at Avenida Visconde de Valmor 15A, Lisbon. Built with Next.js, React, TypeScript and Tailwind CSS. Portuguese and English copy, continuously moving specialties and review carousels, a six-image ambience mosaic and direct phone reservations.

## Development

Requires Node.js 22+.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run typecheck`, `npm test` and `npm run build` to verify.

Turbopack's development disk cache is disabled in `next.config.ts` because cache writes and compaction caused long compilation stalls locally. In-memory caching and hot reload remain enabled; each dev-server restart compiles routes afresh. Production builds are unaffected.

## Content and photography

Restaurant details live in `data/restaurant.ts`; dishes in `data/menu.ts`. All photos are stored locally in `public/restaurant`. The hero, nine dish images and all six ambience images use the images supplied on 2 November 2026. The ambience collage leads with inviting dining-room views, followed by decorative details and the colourful stairway, then the skylit room and wood-panelled steps. Supplied filenames, original image URLs and listing sources are recorded in `public/restaurant/SOURCES.md`. The photographed menu is a listing snapshot; current prices and availability should be confirmed with the restaurant. Opening-day listings conflict, so the website asks visitors to confirm by phone. Google ratings and original-language review excerpts live in `data/reviews.ts`; these were checked on 2 November 2026 and are static content, not a live feed. Photo and review sources are recorded in `public/restaurant/SOURCES.md`.

## Optional legal links

The website runs without environment variables. To enable legal-document links, configure the Supabase URL and publishable key from `.env.example` and explicitly set `SUPABASE_RESTAURANT_ID` to this restaurant's record ID. No database query runs unless all three are set. The server reads `privacy_policy_url` and `terms_and_conditions_url` from the active `restaurants` row; links are cached for five minutes. No database records are created or changed by this website.

Reservations use the restaurant's verified phone number. There is no third-party booking integration configured.

## Deployment

Deploy as a standard Next.js project (for example on Vercel) using `npm run build`. No hosting project has been registered by this local codebase update.
