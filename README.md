# Jaena's Portfolio ✨

A playful, multi-page personal portfolio for **Princess Jaena Marie O. De La Peña**, built with [Next.js](https://nextjs.org/) (App Router) and React.

## Pages

- **Home** (`/`) — hero, about, featured projects, quick facts
- **Projects** (`/projects`) — research, hackathons, game jams, and coursework
- **Skills** (`/skills`) — technical toolbox + how-I-work
- **Leadership** (`/leadership`) — volunteer & community work, UPCSG/CESPA roles
- **Contact** (`/contact`) — emails, LinkedIn, GitHub, CV download

All content lives in one file: **`lib/data.js`** — edit that to update the site without touching markup.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build

```bash
npm run build
npm start
```

## Deploy

- **Vercel / Netlify** — easiest. Import this folder; framework preset = Next.js. No extra config.
- **GitHub Pages / static** — not recommended as-is (this project uses the Next.js server). For a fully static export you'd run `next build` with `output: 'export'` and push the `out/` folder.

## Notes

- The **Download CV** button serves `public/cv.pdf`. Replace that file whenever the CV is updated.
- Fonts load from Google Fonts (Fredoka + Nunito). No other external dependencies.
- The accent colors and playful styling live in `app/globals.css` (CSS custom properties at the top).
