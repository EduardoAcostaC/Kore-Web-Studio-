---
name: Obsidian Cobalt Studio
colors:
  surface: '#121316'
  surface-dim: '#121316'
  surface-bright: '#38393d'
  surface-container-lowest: '#0d0e11'
  surface-container-low: '#1b1b1f'
  surface-container: '#1f1f23'
  surface-container-high: '#292a2d'
  surface-container-highest: '#343538'
  on-surface: '#e3e2e6'
  on-surface-variant: '#c3c5d9'
  inverse-surface: '#e3e2e6'
  inverse-on-surface: '#2f3034'
  outline: '#8d90a2'
  outline-variant: '#434656'
  surface-tint: '#b7c4ff'
  primary: '#b7c4ff'
  on-primary: '#002682'
  primary-container: '#0052ff'
  on-primary-container: '#dfe3ff'
  inverse-primary: '#004ced'
  secondary: '#a5e7ff'
  on-secondary: '#003543'
  secondary-container: '#00d2ff'
  on-secondary-container: '#00566a'
  tertiary: '#b4c5ff'
  on-tertiary: '#002a78'
  tertiary-container: '#165be3'
  on-tertiary-container: '#dee3ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001452'
  on-primary-fixed-variant: '#0038b6'
  secondary-fixed: '#b6ebff'
  secondary-fixed-dim: '#47d6ff'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e60'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#121316'
  on-background: '#e3e2e6'
  surface-variant: '#343538'
typography:
  display-xl:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 44px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Montserrat
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-code-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.04em
  label-code-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies high-performance digital craftsmanship, combining deep obsidian foundations with electric cobalt and vivid cyan energy. Built for visionary tech companies, premium digital brands, and high-growth innovators, the aesthetic blends dark-mode minimalism, refined glassmorphism, and precise developer-centric typography.

The interface evokes authority, precision, and forward-looking momentum. High-contrast typography commands attention while translucent backdrops, glowing borders, and monospaced diagnostic metadata reinforce engineering rigor and studio-grade sophistication.

## Colors

The palette establishes an ultra-deep canvas rooted in obsidian blacks, activated by high-chroma kinetic blues:

- **Primary (`#0052FF`)**: Deep royal cobalt for dominant calls to action, gradient stops, active states, and focal points.
- **Secondary (`#00D2FF`)**: Electric cyan used as an illumination accent, linear gradient terminals, status indicators, and subtle glow reflections.
- **Tertiary (`#2563EB`)**: Supporting electric blue for hover states, intermediate gradient bridges, and secondary interactive surfaces.
- **Neutral Canvas (`#08090C` to `#0E1117`)**: 
  - Base Obsidian: `#08090C`
  - Elevated Glass Surface: `#0E1117` with variable alpha (70%–85%)
  - Elevated Container: `#161B26`
  - Border Substrate: `rgba(0, 210, 255, 0.14)` and `rgba(255, 255, 255, 0.08)`
- **Typography Neutrals**: Pure High-Contrast White (`#FFFFFF`) for primary titles, Crisp Chrome (`#E2E8F0`) for body copy, and Muted Steely Slate (`#7987A1`) for inactive metadata and helper text.

## Typography

The typographic hierarchy creates tension between geometric power and technical precision:

- **Headlines & Titles**: Rendered in `Montserrat` with ExtraBold (800) and Bold (700) weights, tight tracking, and crisp white presentation to produce massive presence and editorial weight.
- **Body & Longform**: Set in `Inter` for optimal readability and neutral clarity across dark backdrops.
- **Labels, Status, & Metadata**: Driven by `JetBrains Mono` with uppercase tracking (`+0.04em` to `+0.06em`), anchoring the brand’s technical engineering core.

## Layout & Spacing

A structured 12-column layout on desktop scales to an 8-column layout on tablet and a 4-column layout on mobile. High inner gutters maintain breathing room between dark glass panels.

- **Desktop (>= 1024px)**: 12 columns with `1.5rem` gutters and max container constraint of `1320px` centered within a `3rem` screen margin.
- **Tablet (768px – 1023px)**: 8 columns with `1.25rem` gutters and `2rem` screen margins.
- **Mobile (< 768px)**: 4 columns with `1rem` gutters and `1.25rem` horizontal margins. Interactive touch targets retain a minimum hit area of 44px.

## Elevation & Depth

Visual hierarchy uses frosted glass panels, directional cobalt light flares, and subtle electric cyan borders:

- **Level 0 (Canvas Base)**: `#08090C` background, textured with ambient radial gradient glows (`radial-gradient(circle at 50% 0%, rgba(0, 82, 255, 0.12), transparent 70%)`).
- **Level 1 (Glass Cards & Modules)**: Translucent surface `#0E1117` at 75% opacity with `backdrop-filter: blur(16px)` and a 1px border stroke of `rgba(255, 255, 255, 0.08)`.
- **Level 2 (Hover & Active Focus)**: Border shifts to `linear-gradient(135deg, rgba(0, 210, 255, 0.4), rgba(0, 82, 255, 0.15))` coupled with an ambient outer blur `0 12px 32px rgba(0, 82, 255, 0.22)`.
- **Level 3 (Modals & Overlays)**: Surface `#121622` at 90% opacity, `backdrop-filter: blur(24px)`, framed by `rgba(0, 210, 255, 0.25)` and casting a deep shadow `0 24px 64px rgba(0, 0, 0, 0.75), 0 0 20px rgba(0, 82, 255, 0.2)`.

## Shapes

The interface balances sharp technological precision with ergonomic roundness using Level 2:
- Base inputs, buttons, and badges utilize `0.5rem` (8px).
- Content cards and surface containers scale to `1rem` (16px).
- Floating toolbars, hero feature frames, and modals utilize `1.5rem` (24px).
- Terminal pill badges and micro tags utilize full curvature (`9999px`).

## Components

- **Buttons**:
  - *Primary*: Gradient fill from `#0052FF` to `#00D2FF` with bold white text, a subtle inner rim light (`inset 0 1px 0 rgba(255,255,255,0.3)`), and a cyan-tinted drop glow on hover.
  - *Secondary / Outline*: Glass background (`rgba(14, 17, 23, 0.6)`), 1px stroke of `rgba(0, 210, 255, 0.25)`, and hover transitions illuminating the border to full electric cyan.
- **Glass Cards**:
  - Encased in dark translucent surfaces with a 1px boundary. Top and left edges receive a slight specular highlight. Hover states elevate the card with a soft cobalt bloom.
- **Chips & Status Tags**:
  - Monospaced typography (`JetBrains Mono`), uppercase, styled with dark pill or soft rectangular frames (`rgba(0, 82, 255, 0.1)`), an electric blue 1px perimeter, and an animated pulsing cyan status dot.
- **Input Fields**:
  - Deep obsidian troughs (`#0B0D13`), low-contrast borders (`rgba(255, 255, 255, 0.12)`), and white text. Active focus triggers an electric cyan focus ring (`0 0 0 2px rgba(0, 210, 255, 0.4)`).
- **Checkboxes & Radios**:
  - Squared (4px radius) or circular bases in dark slate. Checked state fills with the primary cobalt-to-cyan gradient accompanied by a crisp white glyph.
- **Diagnostic Code Panels & Metric Cards**:
  - Dedicated modules displaying server status, tech stack badges, and performance metrics styled with terminal-style headers, subtle divider lines (`rgba(255, 255, 255, 0.06)`), and high-contrast numerical readouts.