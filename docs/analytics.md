# xiaohuang365 analytics plan

This document keeps the free-first analytics setup for `xiaohuang365.com` and future subdomains.

## Current Vercel projects

| Site | Vercel project | Domains | Code ownership |
| --- | --- | --- | --- |
| Main site | `xiaohuang-main` | `xiaohuang365.com`, `www.xiaohuang365.com` | This repository |
| WC2026 | `worldcup2026-ha7u` | `wc2026.xiaohuang365.com` | Separate repository/project |

Team: `team_07HrEZr9rdQ7RSJLQZOzbvuZ`

## Current implementation

The main site has Vercel Web Analytics installed with `@vercel/analytics` and mounted in `app/layout.tsx`:

```tsx
import { Analytics } from "@vercel/analytics/next";

// ...
<Analytics />
```

This tracks page views and visitors for the deployed main-site project after Web Analytics is enabled in the Vercel dashboard and the project is deployed.

Production check on 2026-06-22:

- `xiaohuang-main` exists in Vercel and has `xiaohuang365.com` plus `www.xiaohuang365.com` attached.
- The latest production deployment reported by Vercel is `READY`.
- Fetching `xiaohuang365.com` and `www.xiaohuang365.com` returned an older static-looking homepage titled `小黄365 - 2026世界杯前瞻推演与实用工具大全`.
- No `/_vercel/insights` or Vercel Analytics script marker was found in that live HTML.

Do not deploy this repository over production until the desired live homepage content is confirmed. If the older static homepage should remain, add the Vercel Analytics browser script to that homepage instead of replacing it with this Next.js entry page.

## Daily check

1. Open the Vercel dashboard.
2. Select the relevant project.
3. Open Analytics from the sidebar.
4. Check Visitors and Page Views for the desired date range.

Use these project-level dashboards:

- Main site: `xiaohuang-main`
- WC2026: `worldcup2026-ha7u`
- Future subdomains: the Vercel project that owns that subdomain

There is no paid dashboard or data warehouse in the minimum setup. For now, cross-subdomain totals should be read manually by checking each project dashboard.

## Free-first rules for future subdomains

For each new subdomain project:

1. Keep the subdomain content in its own project/repository when it has independent content.
2. Enable Web Analytics in that Vercel project dashboard.
3. Add `@vercel/analytics` to that project's app.
4. Mount the framework-specific analytics component in the root layout or app shell.
5. Deploy the project and visit the production domain once to verify data collection.
6. Add the new project and domain to this document.

## Limits and upgrade triggers

Vercel Web Analytics is available on all plans. On Hobby, the current documented included amount is 50,000 events per monthly billing cycle, shared across all projects in the same Vercel account. Events are page views plus any custom events.

For Hobby teams, Vercel pauses collection after the allocation and grace period instead of charging for overage. Upgrade only if:

- the combined traffic across projects regularly exceeds the Hobby event limit,
- a longer reporting window is required,
- custom events or richer analysis become necessary,
- a single unified warehouse-style dashboard becomes worth the cost.

## Sources checked

- Vercel Web Analytics quickstart: https://vercel.com/docs/analytics/quickstart
- Vercel Web Analytics pricing: https://vercel.com/docs/analytics/limits-and-pricing
- Next.js local analytics guide: `node_modules/next/dist/docs/01-app/02-guides/analytics.md`
