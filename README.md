# heristop.vercel.app

My personal link-in-bio page — one place pointing at everything I publish: social profiles, the blog, and the side projects I ship.

**[heristop.vercel.app](https://heristop.vercel.app)**

Built on [Linkfolio](https://github.com/heristop/linkfolio), the open-source Linktree alternative I maintain. This repository is the deployment: the component library lives upstream and arrives as an npm dependency, so what is here is configuration, theme and the handful of pages a real site needs.

|                      Light                       |                      Dark                      |
| :----------------------------------------------: | :--------------------------------------------: |
| ![Light mode](./docs/preview-light.png?raw=true) | ![Dark mode](./docs/preview-dark.png?raw=true) |

## Stack

Next.js 16 (App Router, Turbopack, React Compiler) · React 19 · Tailwind CSS 4 · TypeScript 7 · `linkfolio` 3.1 · deployed on Vercel.

## Running it

```bash
pnpm install
pnpm dev
```

Node 20+ and pnpm 11 — both pinned in `package.json`, so `corepack` fetches the right pnpm for you.

| Command          | What it does                        |
| ---------------- | ----------------------------------- |
| `pnpm dev`       | dev server on http://localhost:3000 |
| `pnpm build`     | production build                    |
| `pnpm typecheck` | `tsc --noEmit`, strict              |
| `pnpm lint`      | oxlint                              |
| `pnpm fmt`       | oxfmt, writes in place              |

## What lives where

| Path                     | Purpose                                                                       |
| ------------------------ | ----------------------------------------------------------------------------- |
| `config/user.config.ts`  | The page itself: name, avatar, links, groups, SEO fields, dark theme          |
| `config/site.ts`         | Resolves the public base URL, with a guard for a blank or malformed env value |
| `app/globals.css`        | Brand tokens — palette, card, typography — as `@theme` custom properties      |
| `app/layout.tsx`         | Fonts, metadata, analytics                                                    |
| `app/lib/StatusPage.tsx` | Shared shell for the error and not-found pages                                |

### Links

Each entry in `socialNetworks` carries a `group` — `socialnetwork`, `website` or `project` — which decides how it is rendered. Adding a link is one object:

```ts
{
  url: "https://github.com/heristop",
  iconSrc: githubIcon,
  title: "GitHub",
  description: "Open-source contributions",
  group: "socialnetwork",
}
```

### Theme

Colours and type are set as tokens rather than by overriding the library's CSS, so upgrades don't fight local styles:

```css
@theme {
  --color-primary: #6b5278;
  --lf-card-bg: #fcfbfd;
  --lf-name-font-family: var(--font-display), Georgia, serif;
}
```

Only two rules sit outside `@theme`, and only because a token cannot express them. The full token list is in the [Linkfolio README](https://github.com/heristop/linkfolio#theme-tokens).

## Environment

All are optional; unset is a working default.

| Variable                       | Effect when unset                                                                               |
| ------------------------------ | ----------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`         | Falls back to `https://heristop.vercel.app` for canonical URLs, the sitemap and Open Graph tags |
| `NEXT_PUBLIC_GA_ID`            | No Google Analytics script is loaded — local and preview builds stay clean                      |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | Analytics falls back to Google Analytics, or to nothing                                         |
| `NEXT_PUBLIC_UMAMI_SRC`        | Umami loads from its own cloud rather than from your instance                                   |
| `NEXT_PUBLIC_UMAMI_HOST_URL`   | The tracker posts back to the origin it was served from                                         |

`NEXT_PUBLIC_UMAMI_WEBSITE_ID` is what switches the deploy to Umami — it is the
one value the adapter cannot default — and it leaves `NEXT_PUBLIC_GA_ID` ignored
rather than measuring through both. The other two are independent overrides on
top of it: `NEXT_PUBLIC_UMAMI_SRC` points the script at a self-hosted instance,
`NEXT_PUBLIC_UMAMI_HOST_URL` at a collect API on another origin.

`NEXT_PUBLIC_UMAMI_SRC` must be an absolute `http(s)` URL. A path or a bare
hostname is not an override the adapter accepts — it would quietly load Umami
Cloud instead, sending your visits somewhere you did not choose — so the build
fails on one rather than deploying it.

Umami sets no cookie and stores no visitor identifier, so that mode carries
nothing to consent to.

## Beyond the template

Things this deployment adds on top of what `create`-ing from the template gives you:

- Custom 404, 400 and 500 pages sharing one shell
- Security headers and `poweredByHeader: false`
- `/api/config` served statically, with `hidden` links filtered out so they cannot leak
- A complete web manifest, `robots.txt` and a generated sitemap
- Open Graph images generated at build time, with emoji stripped so satori doesn't render tofu

## Licence

MIT — and so is [Linkfolio](https://github.com/heristop/linkfolio). Fork either.
