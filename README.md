# Copper Cup Café

Single-page cafe site with hero, story, menu filters, signature drinks, gallery, visit info, and a reservation form (front-end only).

## Features
- Hero with CTA and stats
- Story and image stack
- Filterable menu grid with INR pricing
- Signature drinks, gallery, visit info, reservation form
- Responsive navigation with smooth scroll and reveal animations

## Stack
- Plain HTML, CSS, JS (no build tooling)

## Quick preview
- Open [index.html](index.html) directly in a browser; or
- Serve locally to avoid any file:// quirks:
  - Node: `npx serve .` (or any static file server)
  - Python (needs to be installed): `python -m http.server 8000` then visit http://localhost:8000

## File structure
- [index.html](index.html) — markup and sections
- [assets/css/styles.css](assets/css/styles.css) — palette, layout, animations, responsive nav
- [assets/js/script.js](assets/js/script.js) — menu data, filters, smooth scroll, mobile nav toggle, intersection reveals, simple form acknowledgement

## Customization
- Swap imagery (Unsplash URLs) in [index.html](index.html) and update copy, contacts, and hours
- Adjust menu items or INR pricing in [assets/js/script.js](assets/js/script.js) under `menuItems`
- Replace the map iframe with your address

## Deploy (GitHub Pages)
1) In GitHub, open Settings → Pages
2) Source: deploy from branch `main`, folder `/` (root)
3) Save; GitHub will publish the static site
