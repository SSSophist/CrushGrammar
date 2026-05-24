# Crush Grammar

Crush Grammar 是一个面向大学英语四六级的语法闯关训练网站。项目目标不是做传统语法百科，而是帮助学习者按考场读句子的顺序训练：先抓句子骨架，再处理修饰、从句、并列转折、因果让步等影响理解的结构。

## Tech Stack

- React 18
- TypeScript
- Vite
- Vitest
- PostHog analytics, optional

## Quick Start

```bash
git clone https://github.com/SSSophist/CrushGrammar.git
cd CrushGrammar
npm install
npm run dev
```

Then open the local URL printed by Vite, usually:

```text
http://127.0.0.1:5173
```

## Scripts

```bash
npm run dev        # start local dev server
npm run build      # typecheck and build for production
npm run preview    # preview production build locally
npm run typecheck  # run TypeScript checks
npm run test       # run unit tests
```

## Optional Analytics

Local development does not need analytics credentials. If you want to test PostHog events, create a `.env.local` file:

```text
VITE_POSTHOG_KEY=your_project_api_key
VITE_POSTHOG_HOST=https://app.posthog.com
```

See `docs/analytics-setup.md` for the event catalog and dashboard suggestions.

## Project Notes

- Course and product docs are under `docs/`.
- The first-visit diagnostic, level map, lesson pages, practice feedback, and remediation flow are implemented in `src/`.
- The app is intended to run as a static Vite site and can be deployed to Netlify, Vercel, Cloudflare Pages, or any static hosting service.
