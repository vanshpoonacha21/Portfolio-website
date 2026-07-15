# Vansh Poonacha — Racing-Themed Portfolio

A responsive, mobile-friendly personal portfolio with a **motorsport dashboard aesthetic**
(racing red, carbon black, amber warning accents, F1-style condensed type) — built with
**HTML, CSS, and Bootstrap 5**. Includes Home, Driver Profile, Skills Dashboard, Projects
("Pit Stops"), and Contact ("Radio") with a smooth-scrolling navbar.

## 🏁 Design Highlights
- **"Lights Out" intro** — a 5-light starting-grid sequence plays once per browser session
  before the page reveals (skippable, and respects reduced-motion settings).
- **Driver License card** — About section styled as a racing ID card with a spec sheet.
- **Performance gauges** — Skills section shown as animated tachometer-style bars that
  fill in when scrolled into view.
- **Pit Stop cards** — Projects numbered like laps, with racing number-plate styling.
- Checkered-flag section dividers, speed-line hero background, carbon/asphalt palette.

## 🛠 Tech Used
- HTML5, CSS3 (custom styles in `style.css`), Bootstrap 5 (via CDN, grid + icons)
- Google Fonts: **Titillium Web** (F1-broadcast-style display font) + **Space Mono** (telemetry/data font)
- Vanilla JavaScript (`script.js`) — intro sequence, scroll-triggered gauge animation, active nav highlighting

## 📁 Files
```
portfolio/
├── index.html   # All page content & structure
├── style.css    # Racing theme styling & responsiveness
├── script.js    # Lights intro, gauges, navbar behavior
└── README.md
```

## ✏️ Still To Do Before You Deploy
Name, education, theme, and project descriptions are already filled in. A few things still need your input:
1. **Profile photo** — the Driver License card currently shows a styled "Add Your Photo" placeholder (no external image service, so it never shows a broken-image icon). To add your real photo, in `index.html` replace the `<div class="license-photo license-photo-placeholder">...</div>` block with `<img src="assets/profile.jpg" alt="Vansh Poonacha" class="license-photo" />` (upload your photo to an `assets/` folder in the repo first).
2. **Skill levels** — each gauge has a `data-level="XX"` attribute (0–100) in `index.html` — adjust to match your actual proficiency.
3. **Projects** — as you finish each internship task (To-Do app, API project, UI clone), update its Pit Stop card: replace the `<div class="pit-img pit-img-placeholder">...</div>` block with `<img src="assets/todo-screenshot.png" class="pit-img" alt="..." />` (same pattern for each project), set `href="#"` links to your real hosted demo + GitHub repo, and change the "IN PROGRESS" badge to "COMPLETED".
4. **Contact form** — the form posts to Formspree (`action="https://formspree.io/f/your-form-id"`). Sign up free at [formspree.io](https://formspree.io), create a form, and paste your endpoint ID in. Or remove the form and just keep the social icon links.
5. **Social links** — update the email/GitHub/LinkedIn/Twitter URLs in the Contact section (currently placeholders).
6. **Resume button** — link it to your actual resume PDF (upload it to the repo, e.g. `assets/resume.pdf`).

## 🚀 Deploy on GitHub Pages

1. Create a new GitHub repository (e.g. `portfolio`).
2. Push these files to the repo root:
   ```bash
   git init
   git add .
   git commit -m "Racing-themed portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, select **Deploy from a branch**.
5. Choose branch **`main`** and folder **`/ (root)`**, then **Save**.
6. Wait ~1 minute — your site will be live at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

## ✅ Deliverables Checklist
- [ ] Live hosted link (GitHub Pages URL from step 6 above)
- [ ] Source code repo link (your GitHub repo URL)
- [ ] Tested on mobile (resize browser or use dev tools device toolbar)

## 💡 Notes
- Uses Bootstrap via CDN — nothing to install. Open `index.html` in a browser to preview locally, or use the VS Code "Live Server" extension.
- The lights intro only plays once per browser session (stored via `sessionStorage`) so repeat visits during the same session skip straight to the page.
- Fully responsive: navbar collapses into a hamburger menu on mobile, gauges/cards stack on small screens.
