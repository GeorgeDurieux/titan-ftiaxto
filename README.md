# titan-ftiaxto

A one-page product brochure for **FTIAXTO R3 Structural, Repair Dry Concrete**,
modelled on the shape of the Intermix ReBuilt R4 product page but without the
navigation or the corporate footer.

This is a **mockup**. The structure, palette and typography are real decisions;
much of the imagery and some of the copy are placeholders.

## Run it

```bash
npm install
npm run dev      # http://localhost:5180
npm run build    # tsc -b && vite build
```

## Deploy

Hosted on Cloudflare Pages through the GitHub integration, so a push to `main`
builds and publishes.

| Setting | Value |
|---|---|
| Framework preset | None (or Vite) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | pinned to 22 by `.node-version` |

The Node pin matters: Vite 7 needs Node 20.19+ or 22.12+, and without the file
Pages may pick an older default and the build fails on install.

## Where things live

| What | Where |
|---|---|
| Every string on the page | `src/data/product.ts` |
| Section components | `src/components/` |
| All styling, one file | `src/styles.css` |
| Images | `src/assets/img/` |
| Downloadable documents | `public/downloads/` |

There is no CSS framework and no component library. The page is small enough
that one stylesheet with custom properties is easier to follow than either.

## Palette

Three colours, taken from the Pantone swatches printed on the packaging artwork
and sampled from the rendered PDF, plus white, black and grey. Nothing else.

| Role | Hex | Swatch on the artwork |
|---|---|---|
| Navy | `#162a75` | Pantone 3581C |
| Green | `#71bf43` | Pantone 368C |
| Red | `#d72c20` | Pantone 485C |

**Red is reserved for the safety notice.** It is the hazard colour on the bag,
so spending it on a button or a hover state would make a warning read as
decoration.

## Where the content came from

Everything factual is from `Ftiaxto - Ftiaxto FINAL MAKETA.pdf`: the uses, the
dosage table, the technical characteristics, the standards, the five feature
marks, and the warning text. Treat that artwork as the source of truth and
change these only against a newer version or the technical data sheet.

The images are cropped out of the same PDF at 150 dpi:

- `bag.png` is the pack shot from page 2, cut out of its white background
- `pallet.png` is the pallet from page 3
- `logo-ftiaxto.png` and `logo-titan.png` are lifted from the flat artwork on page 1
- `feature-*.png` are the five icons from the bottom of the front panel, each
  scaled to the same glyph height so the row reads evenly

They are screenshots, good enough to judge the layout and nothing more.

## What is still a placeholder

- **Two gallery slots** are drawn as hatched panels naming the shot that belongs
  there: a trowel on a repaired slab, and casting into formwork
- **The four documents** in `public/downloads/` are one-page PDFs that state
  which document they stand in for. Replace the files and nothing else changes
- **The images** are all PDF crops and want replacing with real assets

## Notes for whoever picks this up

`src/styles.css` sets `img { height: auto }` deliberately. The `width` and
`height` attributes on an `<img>` are presentational hints, so setting only
`width` in CSS leaves the attribute's height in force and the image stretches
vertically. The attributes are worth keeping, they reserve the right space
before the image loads, but the stylesheet has to override the height.
