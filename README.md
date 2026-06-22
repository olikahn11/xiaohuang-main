# xiaohuang365

This is the top-level website project for `xiaohuang365.com`.

## Purpose

- Main domain: `xiaohuang365.com`
- Current priority subdomain: `wc2026.xiaohuang365.com`
- Hosting: Vercel
- Analytics: Vercel Analytics via `@vercel/analytics`

This project is intended to become the overall entry point for the xiaohuang365 website. Specific content for each subdomain should live in separate projects, while this project can keep the main site pages and lightweight analytics documentation or dashboards.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

## Analytics

Vercel Analytics is installed and mounted in `app/layout.tsx`. After deploying this project on Vercel and visiting the production domains, page views and visitors will appear in the Vercel Analytics dashboard.

The current free setup is intentionally simple: check daily page views and visitors in each Vercel project's Analytics tab. More detailed analytics can be added later when the site grows.

This repository does not maintain the content of subdomain projects such as `wc2026.xiaohuang365.com`; those projects keep their own codebases. This repository can document and link the analytics setup for the main domain and subdomains.

The current focus is tracking traffic for:

- `xiaohuang365.com`
- `wc2026.xiaohuang365.com`

See [docs/analytics.md](docs/analytics.md) for the project mapping, daily check workflow, free-plan limits, and future subdomain checklist.

## Useful Commands

```bash
npm run lint
npm run build
```
