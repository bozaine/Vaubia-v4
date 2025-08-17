# Vaubia v5 – base propre (Vite + React + Router)

- Mobile top-nav avec menu burger, styles responsive
- Pages : Accueil, Tarifs (carousel swipe + -17% annuel), Login, Dashboard, 404
- SEO & Assets : favicon, robots.txt, sitemap.xml, metadonnées
- Config Vercel (SPA rewrite) – push GitHub → déploiement auto

## Scripts
- `npm run dev` : dev server
- `npm run build` : build prod
- `npm run preview` : prévisualisation du build

## Déploiement Vercel
Crée un projet lié à ton repo GitHub. Vercel détecte Vite via `package.json`.
Le `vercel.json` inclut les rewrites pour router côté client (`/pricing`, `/dashboard`, etc.).
