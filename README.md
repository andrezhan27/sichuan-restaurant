# The Old House

Landing page for The Old House, built with Next.js, React, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 20.9.0 or newer
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
- Node.js version: 20.x or newer

Add `NEXT_PUBLIC_DIG_IN_RESERVATION_WIDGET_URL` in Vercel project settings if the reservation buttons should open the external widget.
