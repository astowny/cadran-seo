# Cadran SEO

Landing page (single static HTML file) for a fictional service: SEO optimisation of
WordPress sites for small local businesses in France.

Built as a conversion-copywriting sample: value proposition, PAS problem framing,
four-step method, proof block with figures, three-tier pricing, objection handling,
and a qualifying lead form.

## Contents

- `index.html` — the whole page. No build step, no external asset except Google Fonts.

## Serving

Any static host. On Dokploy: application type `static`, publish directory `/`.

## Design notes

- Instrument-panel visual world: measured gauges, dotted rules, tabular figures.
- Fonts: Bricolage Grotesque (display), Newsreader (body), JetBrains Mono (data).
- Light and dark palettes are both defined at token level on `:root`,
  `prefers-color-scheme`, and `[data-theme]`, so the page holds on any ground.

## Licence

MIT. Copy is a demonstration sample; the figures quoted are illustrative, not
client data.
