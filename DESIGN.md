---
name: OutdoorLift Funnel — CDC Brand
description: Awareness funnel for CDC's self-propelled vertical transport system.
colors:
  ember: "#ff751f"
  ember-deep: "#c45a0a"
  ember-hover: "#e5621a"
  site-dark: "#2e2e2e"
  fog: "#f3f4f5"
  white: "#ffffff"
  trail-ash: "#696969"
typography:
  display:
    fontFamily: "'Goodly', system-ui, sans-serif"
    fontSize: "clamp(68px, 8vw, 120px)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Goodly', system-ui, sans-serif"
    fontSize: "clamp(28px, 3.6vw, 52px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Goodly', system-ui, sans-serif"
    fontSize: "clamp(22px, 2.4vw, 34px)"
    fontWeight: 600
    lineHeight: 1.2
  body:
    fontFamily: "'Lato', system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "'Lato', system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.14em"
rounded:
  pill: "30px"
  image: "2px"
spacing:
  section-standard: "128px"
  section-editorial: "160px"
  section-compact: "88px"
  container-pad: "48px"
components:
  button-primary:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.site-dark}"
    rounded: "{rounded.pill}"
    padding: "14px 36px"
  button-primary-hover:
    backgroundColor: "{colors.ember-hover}"
    textColor: "{colors.site-dark}"
  button-hero:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.site-dark}"
    rounded: "{rounded.pill}"
    padding: "16px 44px"
  button-large:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.site-dark}"
    rounded: "{rounded.pill}"
    padding: "16px 36px"
---

# Design System: OutdoorLift — CDC

## 1. Overview

**Creative North Star: "The Mountain Ridge Site"**

This system feels like a site plan for mountain infrastructure: raw photography of real terrain, structural typography, signal orange used the way safety markers are used on a job site. Nothing decorative. Every element either carries load or stays invisible.

The palette is minimal by necessity, not restraint. Terrain has no color palette; infrastructure marks on it do. CDC Ember (#ff751f) is the only signal color. Everything else is surface: dark for editorial and night-reading sections, light fog for data-dense sections, white for breathing space. Sections alternate dark and light to create rhythm without competing visual weight. No two dark sections adjacent.

Real photography from real installations is non-negotiable. A CDC page without site photography reads as incomplete, not minimal. The Langkawi installation is the hero credential; every other project card extends that proof. The system is built around the premise that the product exists and can be seen.

**Key Characteristics:**
- Signal orange on dark: full #ff751f brightness, maximum visibility
- Signal orange as text on light: always #c45a0a (ember-deep), never #ff751f
- Goodly display font for all headings — custom weight, not a web default
- Lato body — CDC brand requirement, B2B readability priority
- Section spacing varies deliberately: 128px standard, 160px editorial centrepiece, 88px utility
- Zero decoration: no gradients, no glassmorphism, no icon arrays

## 2. Colors: The Site Palette

One signal color on a terrain-neutral base.

### Primary
- **CDC Ember** (`#ff751f`): The single signal color. Used on dark backgrounds only — hero section, dark editorial sections, dark project grid, CTA section. Never applied as text color on white or fog backgrounds.
- **CDC Ember (on light)** (`#c45a0a`): The same signal, dimmed for light-background contexts where contrast is required. Applied to trust-bar numbers, tier specs, section-heading accents, overlines on light or white sections.
- **CDC Ember Hover** (`#e5621a`): Button hover state only. Not used for any other purpose.

### Neutral
- **Site Dark** (`#2e2e2e`): Primary text color. Background of dark sections (projects, technology, CTA, footer). Also button text color on ember backgrounds.
- **Fog** (`#f3f4f5`): Light section background. Trust bar, principles, capacity, FAQ. Never used for text.
- **White** (`#ffffff`): Overview, safety, and breathing-space sections. Clean separation from fog sections.
- **Trail Ash** (`#696969`): Muted secondary text. Project spec lines, tier descriptions, caption metadata. Passes 4.5:1 contrast on both white and fog.

### Named Rules
**The Two-Orange Rule.** CDC Ember (#ff751f) is for dark backgrounds. CDC Ember Deep (#c45a0a) is for light and white backgrounds. Never use the full ember on white or fog as text. Check context before applying.

**The One Signal Rule.** Orange is the only accent color in the system. It appears on less than 15% of any given screen. Its scarcity is the point.

## 3. Typography

**Display Font:** Goodly (Bold 700, Semibold 600, Regular 400, Light 300) — custom CDC typeface loaded from local assets.
**Body Font:** Lato (Bold 700, Regular 400, Light 300) — CDC brand requirement for body readability.

**Character:** Goodly is rounded and confident — it has engineering personality without being technical-cold. Lato is neutral and legible. The pairing keeps headings expressive while body text stays unobtrusive. Both are brand assets, not default selections.

### Hierarchy
- **Display** (700, `clamp(68px, 8vw, 120px)`, line-height 0.95, -0.02em tracking): Hero headline only. Breaks across two lines intentionally. "Where roads end, lifts begin."
- **Headline** (700, `clamp(28px, 3.6vw, 52px)`, line-height 1.1, -0.015em tracking): All section headings (`<h2>`). Applies to editorial, tech, safety, CTA headings.
- **Title** (600, `clamp(22px, 2.4vw, 34px)`, line-height 1.2): Logo product name in header. Pillar headings (`<h3>`).
- **Body** (400, 17px, line-height 1.8): All descriptive paragraph text. Max line length 65ch enforced on body sections.
- **Label** (700, 12px, letter-spacing 0.14em, uppercase): Overlines, trust-bar labels, project spec captions, navigation links, button text.

### Named Rules
**The Goodly-Only Headings Rule.** Every `<h1>`, `<h2>`, `<h3>` uses Goodly. Lato is prohibited in headings. The weight contrast between the two families is the hierarchy signal.

**The Tight Display Rule.** Hero display text uses line-height 0.95 and negative tracking. It should feel compressed, like type on engineering drawings, not airy.

## 4. Elevation

This system is flat by default. No decorative shadows. No glass. No lifted cards. Depth is conveyed through section background alternation (dark / light / white sequence) and photography scale, not elevation.

### Shadow Vocabulary
- **Header lift** (`box-shadow: 0 1px 24px rgba(0,0,0,0.07)`): Applied to `<header>` after 8px scroll. Signals page position. The only shadow in the system.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. The header shadow is the only permitted shadow, and only as a scroll-state signal. Any other shadow is a design error.

## 5. Components

Components are structural and unhesitating. No hover flourishes, no lift effects, no decoration that doesn't carry information.

### Buttons
All buttons are pill-shaped, uppercase, letter-spaced labels. Dark text on Ember background.

- **Shape:** Full pill (30px radius). Never square corners, never mild radius.
- **Primary** (`btn-primary`): Ember background, Site Dark text, 14px 36px padding, Lato 700 13px uppercase 0.08em tracking.
- **Hero** (`btn-hero-fill`): Same color rules, larger padding (16px 44px). Positioned at bottom of hero text block with 52px margin-top.
- **Large** (`btn-primary-large`): Same color rules, 16px 36px padding, used in final CTA section.
- **Hover:** Background shifts to Ember Hover (#e5621a). No transform, no shadow, no scale. Transition: 0.22s ease-out-quart on background and border only.
- **Text color is always Site Dark (#2e2e2e) on all button variants.** White text on ember fails WCAG AA. Dark text gives 6.7:1 contrast.

### Navigation
- **Header:** 100px height at rest, 80px when scrolled. Transparent over hero, white (#ffffff) with border-bottom after 8px scroll.
- **Logo left:** CDC full logo at desktop, CDC pictogram at ≤1080px. "Outdoor Lifts" text in Goodly Semibold adjacent.
- **Nav links:** Lato 700 13px uppercase 0.08em tracking. Dark text at desktop. Hidden at ≤1080px; mobile nav drawer used instead.
- **CTA button right:** btn-primary, hidden at mobile.
- **Mobile nav:** Drawer from top, full-width, dark text on white, with orange pill CTA at bottom.

### Trust Bar
Four-stat horizontal strip. Light fog (#f3f4f5) background. No borders. Stats separated by 1px vertical rules.

- **Number:** Goodly 700, `clamp(28px, 3.6vw, 52px)`, CDC Ember Deep (#c45a0a) — always the deep variant on this light bg.
- **Label:** Lato 700 11px uppercase 0.1em tracking, Trail Ash (#696969).
- **Mobile:** 2×2 grid below 480px. Separators hidden.

### Projects Grid
Dark section (#2e2e2e bg). 3-column CSS grid, 4px gap, no border-radius on images. Each project card is a `<figure>`: full-bleed image above, caption below with project name (white, uppercase) and specs (white 55% opacity, uppercase).

- **No hover effects on cards.** Images are evidence, not interactive affordances.
- **First card spans 2 columns** (hero card). Last card spans full width (bookend). This asymmetry is intentional.

### Capacity Tiers
3-column grid table (label / description / spec) on light fog background. Separated by 1px horizontal rules, no cards, no shadows.

- **Tier label:** Goodly 600 20px Site Dark.
- **Tier spec:** Lato 700 13px uppercase 0.08em, CDC Ember Deep (#c45a0a). Right-aligned at desktop.
- **Hover:** Background flickers to fog (#f3f4f5) only. No margin expansion or padding animation (layout thrash prohibited).

### FAQ Accordion
Native `<details>`/`<summary>`. Light fog (#f3f4f5) background, max-width 860px container.

- **Question:** Goodly 600 20px, Site Dark. Plus/times indicator at right in Ember.
- **Answer:** Lato 400 17px, line-height 1.8, max-width 720px.
- **Open state:** `+` rotates 45° to `×` via CSS transform. No height animation (layout property).

## 6. Do's and Don'ts

### Do:
- **Do** use CDC Ember (#ff751f) exclusively on dark backgrounds (#2e2e2e, overlayed photography).
- **Do** use CDC Ember Deep (#c45a0a) whenever orange appears as text on white or fog backgrounds.
- **Do** keep all button text Site Dark (#2e2e2e) on Ember backgrounds. 6.7:1 contrast, WCAG AA compliant.
- **Do** alternate section backgrounds: dark → light → white or light → dark. Never two dark sections adjacent.
- **Do** use real installation photography from CDC's actual projects. One decisive photo per section.
- **Do** keep Goodly for every heading — display, headline, title. No exceptions.
- **Do** use Lato 700 uppercase for all labels, overlines, button text, and navigation.
- **Do** vary section padding: 128px standard, 160px for editorial centrepieces, 88px for utility sections.
- **Do** use negative letter-spacing on display and headline text (−0.02em, −0.015em).

### Don't:
- **Don't** use CDC Ember (#ff751f) as text color on white or fog. It fails contrast. Use #c45a0a.
- **Don't** use white text on Ember buttons. 2.7:1 contrast fails WCAG AA. Always Site Dark on Ember.
- **Don't** add side-stripe border accents (border-left colored stripe). Prohibited absolutely.
- **Don't** use gradient text (background-clip: text). Prohibited absolutely.
- **Don't** add glassmorphism, blurs, or translucent layers. Prohibited absolutely.
- **Don't** use numbered step treatments (01/02/03 pattern). SaaS cliché.
- **Don't** use pill badge labels. SaaS cliché.
- **Don't** add hero eyebrow chips (tracked-caps label above H1). AI SaaS tell, previously removed.
- **Don't** use em-dashes (—) in body copy. AI writing tell. Use colons, commas, or periods.
- **Don't** animate layout properties (padding, margin, height, width). Use transform and opacity only.
- **Don't** add shadows to cards, sections, or images. The header lift shadow is the only permitted shadow.
- **Don't** place identical card grids (icon + heading + text × N). Use tables, lists, or varied compositions.
- **Don't** use Lato in headings or Goodly in body copy. The font split is the hierarchy.
- **Don't** use Inter, DM Sans, Plus Jakarta Sans, Fraunces, or any font from the reflex-reject list.
- **Don't** add third-party JavaScript, frameworks, or build tools. Pure HTML/CSS/JS only.
