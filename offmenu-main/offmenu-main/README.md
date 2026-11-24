# OFFMENU.

**GLOBAL FLAVOURS. NO RULEBOOK.**

A fictional experimental restaurant in Vijayawada, built for a college web development assignment with semantic HTML5, CSS3 and vanilla JavaScript. No packages, framework, API key, build step or backend is required.

## Open locally

1. Extract the supplied ZIP and keep the `offmenu` folder intact.
2. Open `offmenu/index.html` in a modern browser. All images, CSS and JavaScript load locally; an internet connection is not required.
3. Alternatively, open a terminal inside `offmenu`, run `python -m http.server 8000`, and visit `http://localhost:8000`. Python is optional and is used only as a local static preview server.

The delivery folder was saved under Windows Temp because this environment denied writes to the home directory. Copy the extracted project into your normal coursework folder for long-term storage.

## GitHub Pages deployment

1. Create a public GitHub repository, for example `offmenu`.
2. Upload the **contents** of the local `offmenu` folder to its root. `index.html`, `style.css`, `script.js`, `README.md` and `assets` should be directly visible in the repository. Do not upload only the ZIP or nest everything in another `offmenu` folder.
3. Open the repository's **Settings → Pages**. Choose **Deploy from a branch**, select **main** and **/(root)**, then save.
4. Wait for deployment and use the **Visit site** link. The project URL normally follows `https://YOUR-USERNAME.github.io/offmenu/`.
5. Push or upload later file changes to the same branch. Keep filename case and relative paths unchanged.

Official reference: [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site). No deployment has been performed on your behalf.

## Project structure

```text
offmenu/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── images/
        ├── hero-plated-dish.jpg
        ├── kitchen-detail.jpg
        ├── charred-corn.jpg
        ├── basque-cheesecake.jpg
        ├── blood-orange-cooler.jpg
        ├── the-detour.jpg
        ├── restaurant-interior.jpg
        ├── chef-preparing.jpg
        └── dining-table.jpg
```

## Design and implementation

- Warm ivory and ink-black editorial spreads, restrained acid-lime accents, asymmetric imagery, large typography and thin rules.
- Grid for major page compositions; Flexbox for navigation, price alignment, filters and action groups.
- CSS variables hold colours, typography and spacing. Media queries adapt the page for mobile and tablet; the mobile gallery has its own arrangement.
- The type stack prefers locally installed Space Grotesk / DM Sans, falling back to Arial / Helvetica. Serif accents use Georgia. No remote font service is required and no proprietary font files are distributed.
- All ten dishes are authored in HTML and available without JavaScript. Category buttons progressively appear when JavaScript is active and update `aria-pressed` and a live result count.
- Mobile navigation toggles open/closed, closes on link selection, outside click or Escape, and returns keyboard focus on Escape. Without JavaScript, links remain visible.
- Forms have explicit labels, per-field errors, `aria-invalid`, a live status message and focus management. Date validation uses Vijayawada's Asia/Kolkata timezone, rejects past dates and Monday closures, and rejects already-passed times for today. Time options stay within the supplied service periods. Guest choices range from one to eight.
- Reduced-motion preferences disable scrolling animation, hover transforms and reveals. Below-the-fold photographs use lazy loading; the hero has high fetch priority.

## Reservation and fictional-content notice

**This is only a front-end demonstration.** The form prevents submission, validates in the browser and reports a demo success. It does not send an email, create a booking, call an API or store entered data. With JavaScript disabled, its submit button remains disabled. Your browser may independently offer its normal autofill feature.

The restaurant, menu, guest comments and brand are fictional. No ratings, awards, precise address, phone number or real map location are claimed. `hello@offmenu.example` is a reserved example address. Social entries are visibly marked replacement placeholders and deliberately have no fake destination.

## Image provenance and art direction

All nine images were created for this project with the built-in image-generation tool. They are **AI-generated concept images**, including the chef and interior; they are not photographs documenting a real restaurant, employee or customer. External stock downloads were unavailable in this environment. No third-party stock files, watermarks or fragile hotlinked images are included.

The original generated PNGs were encoded as optimized progressive JPEGs without altering their compositions. Local images total approximately 3 MB. Each image is used once and has descriptive alt text.

Prompt set (all requested realistic editorial photography, natural material textures, no text, logos or watermarks):

| Asset | Final subject and art direction |
| --- | --- |
| `hero-plated-dish.jpg` | Portrait fine-dining composition of charred king oyster mushroom, vivid pumpkin puree, crisp rice and curry leaf oil on charcoal ceramic; hard warm sidelight and deep shadows. |
| `kitchen-detail.jpg` | Portrait ingredient still life of curry leaves, yuzu, dried Guntur chillies, miso and king oyster mushrooms on dark slate. |
| `charred-corn.jpg` | Three charred corn ribs with glossy miso butter, lime zest and a lime wedge on off-white ceramic against dark olive. |
| `basque-cheesecake.jpg` | Landscape close-up of burnt Basque cheesecake and filter coffee caramel on an ivory plate; espresso cup behind, warm directional light. |
| `blood-orange-cooler.jpg` | Portrait of a blood orange and rosemary cooler in a ribbed tumbler, ice, citrus slice, condensation and bubbles against olive tones. |
| `the-detour.jpg` | Landscape of charred pumpkin wedges, dark peanut mole, emerald curry leaf oil and crisp rice on earthy ceramic; cinematic light and dark background. |
| `restaurant-interior.jpg` | Wide contemporary Vijayawada restaurant concept with dark wood, concrete, textured plaster, linen pendant lamps, olive seating and late-afternoon window light. |
| `chef-preparing.jpg` | Indian chef in black apron finishing an experimental vegetable dish with tweezers; close attention to hands and plate in a warm, dim professional kitchen. |
| `dining-table.jpg` | Off-centre dark wood dining-table detail with handmade ceramic plates, stemmed glasses, ivory linen, minimal cutlery, a branch vase and candlelight. |

## Verification and remaining visual review

Completed checks:

- JavaScript syntax validation.
- Thirteen interaction checks in a lightweight DOM harness: navigation toggle state, five menu categories and counts, empty/invalid form handling, past dates, Monday closure, successful demo wording, restaurant-local minimum date and time conversion.
- HTML audit: one H1, unique IDs, associated labels, descriptive image alt text, deferred external script, no inline CSS/JavaScript, working fragment targets and existing relative asset references.
- All nine local images decoded successfully and were visually inspected for relevance and distinct composition.
- CSS brace balance and reduced-motion implementation reviewed.

**Browser rendering and actual device testing remain unverified.** Headless Edge failed to initialize its GPU process and Chrome timed out under this environment's restrictions. The interaction harness is not a substitute for a real browser accessibility or layout audit. No screenshot or cross-browser approval is claimed.

Before submission, open the site and check 320, 375, 768, 1024 and 1440 px widths; confirm no horizontal scrolling, menu/keyboard operation, visible focus, all category counts (10 / 3 / 3 / 2 / 2), invalid email feedback, past-date and Monday rejection, successful demo wording, reduced motion, and images offline. Check at 200% zoom as well.

## Editing

Change content and prices in `index.html`, design tokens and layouts in `style.css`, and interaction behavior in `script.js`. Keep photos under `assets/images` and update both the relative `src` and meaningful `alt` text when replacing them. Replace fictional contact/social information only when you have real approved details.
