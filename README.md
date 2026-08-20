# The Old House

Landing page for The Old House, built with Next.js, React, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 22.0.0 or newer
- npm

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Copy `.env.example` to `.env.local` for local development.

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL used by the server-only footer query. |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Yes | Supabase publishable key. The query runs as the `anon` database role and is subject to RLS. |
| `NEXT_PUBLIC_DIG_IN_RESERVATION_WIDGET_URL` | No | External reservation widget URL used by booking calls to action. Falls back to the page booking section when empty. |

## Production Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Vercel Deployment

Vercel should detect this as a Next.js app automatically.

- Framework preset: `Next.js`
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: leave default
- Node.js version: 22.x or newer

Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in Vercel project settings for Production, Preview, and Development as appropriate. Adding or changing environment variables requires a redeployment.

The footer reads legal-document URLs from the active `public.restaurants` row with `id = 'theoldhouse'`. Database URL changes appear after the five-minute cache revalidation interval and do not require a redeployment.

Add `NEXT_PUBLIC_DIG_IN_RESERVATION_WIDGET_URL` if the reservation buttons should open the external widget.
