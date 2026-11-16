# HarmaTek website — GitHub Pages

## Publish
1. Create a GitHub repository (or use an existing one).
2. Upload **everything inside this folder** to the repository root (keep the folder structure, including `.nojekyll`).
3. In the repository go to **Settings → Pages**, set **Source: Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After a minute the site is live at `https://<your-user>.github.io/<repo>/` — `index.html` opens the Home page.

## Pages
- `Home.dc.html`, `Products.dc.html`, `Brochures.dc.html`, `About.dc.html`, `Contact.dc.html`
- `Admin.dc.html` — admin panel (link in the footer)
- `Header.dc.html` / `Footer.dc.html` are shared parts loaded by every page — keep them.

## Notes
- The site needs an internet connection for fonts and the page runtime (loaded from unpkg / Google Fonts).
- Product photos are in `src/assets/productImages/` and brochure PDFs in `public/`. Everything the site needs is in this folder.
- Admin panel edits are stored in the browser that made them. They are not shared with other visitors on GitHub Pages (static hosting has no database).
- The admin login is checked in the browser, so it is not secure on a public static host.
- The contact form posts to `https://harmatek.sa/contact.php`; it only works if that endpoint accepts requests from your GitHub Pages domain.
