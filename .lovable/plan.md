# Modernise the T-CAT ph site + GitHub

## 1. Modern visual upgrade

Keep the brand (navy, signal red, white, Archivo/IBM Plex Sans) but sharpen the execution so it reads as a current, premium workshop site rather than a template.

- **Hero**: full-bleed workshop photo with a stronger duotone navy treatment, larger display type, a thin red rule, and a compact trust strip (all brands · diagnostics-led · Trans-Amadi) directly beneath the buttons.
- **Depth and motion**: soft elevation on cards, hairline borders, hover lift on service and gallery tiles, and staggered scroll reveals (already respecting reduced-motion).
- **Section rhythm**: alternate light / graphite / photo-backed bands so the homepage has clear pacing instead of uniform blocks.
- **Service cards**: each card gets its photo as a cropped 16:10 image with a dark gradient and the service name over it, plus a red arrow affordance.
- **Typography scale**: tighter tracking on display headings, wider eyebrow letterspacing, clearer size steps between h1/h2/h3.

## 2. Use the uploaded photos properly

Every uploaded photo gets a purposeful placement, correctly cropped and described:

- Hero: technicians under the bonnet (existing).
- Homepage capability band: diagnostics, technicians, exterior bays as an asymmetric photo trio.
- Reception and office photos in the customer-experience and contact sections.
- Car wash and AC service photos in the maintenance/services bands.
- Gallery: all nine photos in a masonry-style grid with category filters and a lightbox on click.
- Every image: descriptive alt text, explicit aspect ratio to stop layout shift, `loading="lazy"` below the fold, and the hero preloaded.

## 3. GitHub

I cannot push to GitHub from here. Use the **GitHub** button in the top-right of the Lovable editor to connect your account and create the repository — after that every change is pushed automatically. Say the word once it's connected if you want me to confirm the sync.

## Technical notes

- Styling changes stay in `src/styles.css` (new tokens: elevation, duotone overlay, stagger utility) and the components; no hardcoded colour classes.
- Files touched: `src/styles.css`, `src/components/home/hero.tsx`, `src/components/home/service-grid.tsx`, `src/components/tcat/sections.tsx`, `src/routes/index.tsx`, `src/routes/gallery.tsx`, `src/routes/services.index.tsx`.
- No content claims added; existing `[TO BE CONFIRMED]` placeholders stay as they are.
