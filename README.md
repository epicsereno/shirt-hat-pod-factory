# Shirt & Hat POD Factory

Fully automated print-on-demand storefront for shirts and hats.  
Zero inventory. Design once → sell forever. Built to **run and build** with one push.

**Live (after first Actions run):** https://epicsereno.github.io/shirt-hat-pod-factory/

## Quick Start (local)

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # production build → dist/
npm run preview      # preview the build
```

## Automation Pipeline

| Trigger | What happens |
|---------|--------------|
| Push to `main` | GitHub Actions builds the Vite app and deploys to GitHub Pages |
| Manual | Actions → "Build & Deploy Factory" → Run workflow |
| New design | Drop PNG into `/designs`, update `data/products.json`, push |

### GitHub Actions

Workflow lives at `.github/workflows/deploy.yml`.  
It runs `npm ci` → `npm run build` → uploads the `dist` artifact → deploys to GitHub Pages.

Enable Pages in the repo settings if it is not already on (Settings → Pages → Source = GitHub Actions).

## Product Data

All products live in `data/products.json`.  
Each entry maps to a Printful-style base product + design file + colors/sizes.

## Printful / POD Payloads

Ready-to-adapt JSON templates live in `/payloads`:

- `printful-tshirt-example.json`
- `printful-hat-example.json`

Replace the image URLs with publicly hosted versions of your designs, then hit the Printful Sync Product endpoint (or your preferred POD API).

## Folder Layout

```
.
├── .github/workflows/deploy.yml   # auto build + deploy
├── data/products.json             # product catalog
├── designs/                       # drop print-ready art here
├── payloads/                      # Printful templates
├── src/                           # React + Tailwind storefront
├── package.json
└── README.md
```

## Team Notes

- Storefront is glassmorphism dark SaaS style (Tailwind + Framer Motion).
- Base path is already set for GitHub Pages (`/shirt-hat-pod-factory/`).
- Cart is UI-only for now — wire to Stripe / Printful checkout when ready.
- Want more products or a full order automation script? Just say the word.

Built by a small team that likes things that actually run and build.
