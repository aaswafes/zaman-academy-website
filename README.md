# Zaman Academy — marketing site

Vanilla HTML + Tailwind CDN + a single `js/main.js` interactivity bundle.
No build step, no npm, no React. Ships straight to GitHub Pages from `main`.

Live: <https://aaswafes.github.io/zaman-academy-website/>

## Token swap checklist (do before launch)

| Token                          | Location                                       | Notes |
| ------------------------------ | ---------------------------------------------- | ----- |
| `TODO_FORMSPREE_ID`            | `js/main.js` (line ~14, `TODO_FORMSPREE_ID`)   | Sign up at <https://formspree.io/>, create a form, paste the form ID (without the `f/` prefix). All four forms (lead modal, inline lead, newsletter, certificate lookup) POST there. |
| `TODO_GA_ID`                   | `js/main.js` (line ~15) **and** the `<script>` block in every page's `<head>` (commented out) | Uncomment the two `gtag` lines + the `<script src=…>` line in each page once you have a real Measurement ID like `G-XXXXXXXX`. |
| Yandex map iframe              | `index.html`, contact section `<iframe src=…>` | The current embed uses the academy coordinates. Replace the whole `src` if you ever change branch location. |
| Real teacher photos            | `img/teachers/*.webp` + `js/data.js` (`TEACHERS[].photo`) | Replace the four `placeholder-*.svg` files with real `.webp` portraits and update each `photo:` path. |
| Real gallery photos            | `img/gallery/*.webp` + `js/data.js` (`GALLERY[].src`) | Same pattern — six placeholder SVGs, update the `src` and `caption` in `data.js`. |
| Final legal text               | `public-offer.html` + `privacy.html`           | Both pages ship with reasonable placeholder copy marked `<!-- TODO: owner to provide final legal text -->`. Lawyer review required before launch. |
| Real student outcomes          | `js/data.js` (`RESULTS[]`)                     | Replace the three sample cards. `youtubeId: 'abc123'` un-hides an embedded testimonial video. |
| Lead recipient(s)              | Formspree dashboard                            | Add admin email + Telegram (Formspree integration) so submissions land where the team can act on them. |

## Deploy

GitHub Pages is wired to the `main` branch. Any push to `main` deploys in ~30s.

```bash
git checkout main
git pull
# make changes
git add .
git commit -m "feat: describe change"
git push origin main
```

For larger work, branch off and PR:

```bash
git checkout -b feat/short-description
# work
git push -u origin feat/short-description
gh pr create --fill
```

## Architecture (3 layers)

```
index.html, teachers.html, gallery.html, certificate.html,
public-offer.html, privacy.html, 404.html
                                          ↓ load
                              js/data.js (content arrays)
                              js/i18n.js (UZ/EN/RU bundles)
                              js/main.js (interactivity)
```

**One HTML file per route.** Header and footer are copy-pasted across pages — that's the trade-off for "no build step." When you change the header on one page, change it on the others too. The lead modal markup, the global lang switcher, and all `data-*` hooks are identical across pages so `js/main.js` ships once and Just Works.

**All content lives in `js/data.js`.** Want to add a teacher, a gallery photo, a student result, or a new FAQ entry? Edit the relevant array — no HTML touched.

**All copy lives in `js/i18n.js`.** Every translatable element on the page has `data-i18n="KEY"` or `data-i18n-attr="placeholder:KEY"`. UZ is authoritative; EN and RU are review-ready stubs.

## How to…

### Add a teacher
1. Drop a square portrait into `img/teachers/firstname-lastname.webp`.
2. Append a new object to `TEACHERS` in `js/data.js`:
   ```js
   {
     id: 'firstname-lastname',
     name: 'Ustoz Familiya Ism',
     photo: 'img/teachers/firstname-lastname.webp',
     badge: 'C1 · 5 yil',
     years: 5,
     bioShort: 'Bir-ikki gapli qisqa ta’rif.',
     bioLong: 'Modal oynada chiqadigan uzunroq biografiya…',
     education: ['Universitet — Yo‘nalish'],
     certs: ['CEFR C1', 'Boshqa sertifikat'],
     telegram: 'https://t.me/handle'
   }
   ```
3. `data-limit="4"` on the home grid caps the homepage to four cards; `teachers.html` has no limit so all teachers appear there.

### Add a gallery photo
1. Drop the image into `img/gallery/short-name.webp`.
2. Append to `GALLERY` in `js/data.js`:
   ```js
   { src: 'img/gallery/short-name.webp', caption: 'Caption that screen-readers and lightbox will use' }
   ```

### Add a new FAQ entry
1. Append a `{ q, a }` pair to `FAQ` in `js/data.js`.
2. Mirror the new entry into the `mainEntity` array of the **JSON-LD FAQPage** block at the bottom of `index.html` so it shows up in Google's rich results.
3. Add a `<details>` block to the FAQ section in `index.html` for the on-page accordion.

### Add a new section / nav item
1. Pick a unique `id="…"` (this is the anchor target).
2. Add the section in the right place in `index.html`. Use the same structure as existing sections (`<section id … class="relative py-24 sm:py-32">`, with `<div class="section-no reveal" data-i18n="…">NN — Name</div>` eyebrow).
3. Add a nav `<a href="#…">` to **both** the desktop nav and mobile drawer.
4. Add matching entries to all three language bundles in `js/i18n.js`.

### Change pricing
Pricing lives in two places — keep them in sync:
- The pricing table in `index.html` (search for `<!-- PRICING -->`).
- The `hasOfferCatalog.itemListElement` array in the EducationalOrganization JSON-LD (also `index.html`).

## File layout

```
.
├── index.html                home page (Hero, About+counters, Courses, Teachers,
│                             Why us, Process, Results, Certificates, Gallery,
│                             Pricing, FAQ, Contact + map, SEO long-form, Footer)
├── teachers.html             full teachers index
├── gallery.html              full academy gallery
├── certificate.html          certificate lookup stub (always shows "not found")
├── public-offer.html         legal — public offer (placeholder copy, owner review)
├── privacy.html              legal — privacy policy (placeholder copy, owner review)
├── 404.html                  branded 404 page
├── 0516.mp4                  hero background video (1280×720 H.264, 8.5 MB)
├── favicon.svg               vector favicon
├── favicon-96x96.png         96px PNG favicon
├── apple-touch-icon.png      180px PNG for iOS home-screen
├── site.webmanifest          PWA manifest
├── sitemap.xml               sitemap with hreflang alternates
├── robots.txt
├── images/certificates/      eight real student certificate JPGs
├── img/teachers/             4 SVG placeholders — replace with real .webp
├── img/gallery/              6 SVG placeholders — replace with real .webp
├── img/og-default.svg        social-share image
├── img/icon-192.png          PWA icons
├── img/icon-512.png
└── js/
    ├── data.js               TEACHERS, GALLERY, CERTIFICATES, RESULTS, FAQ, LOCATION
    ├── i18n.js               STRINGS = { uz, en, ru }
    └── main.js               lang switcher, lightbox, lead modal + rate limit,
                              counters, header scroll behaviour, mobile drawer,
                              phone mask, toast, teacher/result/gallery renderers
```

## Accessibility & performance notes

- Every interactive element has `aria-*` and a visible `:focus-visible` ring (`#EC4899`).
- `prefers-reduced-motion: reduce` disables hero video autoplay, reveal animations, count-ups and marquee scrolling.
- The hero `<video>` is muted/looped/`playsinline` (required for autoplay in all browsers) and falls back to a static paper-tinted overlay if it can't play.
- All images use `loading="lazy"` and `decoding="async"`. Hero video is the only above-the-fold media.
- Lead form has a localStorage rate limit (`zaman_lead_attempts`, max 2 / 30 min) so the Formspree quota isn't burned by accidental double-submits or bots.
- Cert lookup is intentionally a stub — always returns "not found" because there's no real backend. The not-found copy points users to the official `sertifikat.uzbmb.uz` lookup and the academy phone line.

## Local preview

```bash
# any static file server works; from the repo root:
python -m http.server 8000
# then open http://localhost:8000/
```

Or just double-click `index.html`.
