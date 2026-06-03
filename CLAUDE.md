# OutdoorLift — Funnel Website

## Project purpose

A lightweight awareness funnel for the OutdoorLift product by CDC (Cableway Development Company).

**Single goal:** Visitors land here, get introduced to the technology, and click through to the main corporate site at https://www.cdc.company for full details, specs, and contact.

This is NOT a full product site. No deep navigation, no complex CMS, no e-commerce. It is a visually impressive, fast-loading funnel page.

## Product overview

**OutdoorLift** — self-propelled vertical transport system for off-road and outdoor environments. Designed for terrain where traditional infrastructure (elevators, stairs, roads) is not feasible.

**Key differentiators:**
- Minimal environmental impact, no ground excavation
- Flexible routing — handles direction and incline changes
- Modular cabin design, no external engine room
- Built-in redundant safety systems + real-time monitoring
- Fast, non-invasive installation

**Applications and capacity:**
- Hotels & resorts: up to 10 people / 650 kg
- Vacation homes & residential: 4–6 people / 300–450 kg
- Tourist attractions: up to 14 people / 1050 kg
- Public short-haul transport: 2×14 people / 2100 kg

**Three value pillars:** Ecology · Functionality · Safety

## Target audience

B2B decision-makers and investors across: hospitality, real estate development, tourism, municipal transport, private estates. International audience.

## Primary CTA

All CTAs on this site redirect to https://www.cdc.company — specifically to the OutdoorLift section or the contact page. No forms, no internal conversions.

## Brand & design

**Reference:** https://www.cdc.company — this site defines the visual language. Match its tone: professional, minimal, confident, premium.

**Color palette:** Orange `#F47A1F` + dark `#1C1C1C` + light gray `#F4F4F4` + white. Same as CDC corporate.

**Fonts — organized in `assets/fonts/`:**
- Goodly-Bold.woff / .ttf — primary headlines
- Goodly-SemiBold.woff / .ttf — subheadings
- Goodly-Regular.woff / .ttf — medium text
- Goodly-Light.woff / .ttf — body display
- Lato TTF files are in `data materials/Lato/` — use for body text

**Logos — organized in `assets/logos/`:**
- `assets/logos/cdc-logo-orange (5).png` — full horizontal logo
- `assets/logos/cdc-logo-orange-pictogram (4).png` — pictogram only (for footer)

**Photos — organized in `assets/images/` — ALL are real product shots (Langkawi, Malaysia installation):**
- `assets/images/Sample_Picture_Langkawi.JPG` — wide panoramic, mountain + sky bridge → **use as hero background**
- `assets/images/Malaysia.jpg` — cabin close-up from above, jungle canopy
- `assets/images/20160125_125651.jpg` — cabin with passengers, clear sky + platform
- `assets/images/20170419_124027 - Kopie.jpg` — cabin on track, wide mountain view

**Visual style:** Large hero imagery, clean sections, generous whitespace, strong typography hierarchy. No generic stock AI aesthetic.

**Design reference:** cdc.company — white sticky nav, full-viewport hero with dark overlay + large white type, CDC lettermark style. Sections alternate white / light-gray. Orange used as accent only.

## Funnel page structure (proposed)

1. **Hero** — bold headline, one-line product description, primary CTA button → cdc.company
2. **What is OutdoorLift** — short intro, 2–3 sentences
3. **Three pillars** — Ecology / Functionality / Safety (icon + short text each)
4. **Applications** — 4 use cases with image + caption
5. **Why CDC** — brief trust signals (ISO certs, 20+ countries, since...)
6. **CTA section** — "Explore the full technology" → cdc.company link

## Tech stack

**Pure HTML + CSS + JavaScript.** No build tools, no framework, no dependencies. Single page funnel — this is the right call. Easy to deploy to GitHub Pages directly.

## Language

**English only.**

## Deployment

**GitHub Pages.** Repository: github.com/Petrikin83/outdoorlift (to be created).
Branch for deploy: `main` or `gh-pages`.

## Assets to source before build

- [ ] High-quality product photos of installed OutdoorLift units (real or renders)
- [ ] CDC brand color hex values (confirm exact orange)
- [ ] Confirm deployment target (GitHub Pages, Netlify, custom server?)
- [ ] Confirm language(s)

## What NOT to do

- Do not build a full multi-page site
- Do not add a contact form (redirect to cdc.company instead)
- Do not deviate from CDC brand colors, fonts, and tone
- Do not add animations or effects that feel cheap or generic
- Do not use placeholder/Lorem ipsum in final output
