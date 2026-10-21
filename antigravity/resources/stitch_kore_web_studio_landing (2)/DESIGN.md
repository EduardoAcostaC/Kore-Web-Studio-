---
name: Kore Dark Precision
colors:
  surface: '#10131a'
  surface-dim: '#10131a'
  surface-bright: '#363941'
  surface-container-lowest: '#0b0e15'
  surface-container-low: '#191b23'
  surface-container: '#1d1f27'
  surface-container-high: '#272a32'
  surface-container-highest: '#32353d'
  on-surface: '#e1e2ec'
  on-surface-variant: '#c2c6d8'
  inverse-surface: '#e1e2ec'
  inverse-on-surface: '#2d3038'
  outline: '#8c90a1'
  outline-variant: '#424656'
  surface-tint: '#b3c5ff'
  primary: '#b3c5ff'
  on-primary: '#002b75'
  primary-container: '#0066ff'
  on-primary-container: '#f8f7ff'
  inverse-primary: '#0054d6'
  secondary: '#8fd8ff'
  on-secondary: '#003548'
  secondary-container: '#00c1fd'
  on-secondary-container: '#004b65'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#007aa5'
  on-tertiary-container: '#f1f8ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#001849'
  on-primary-fixed-variant: '#003fa4'
  secondary-fixed: '#c2e8ff'
  secondary-fixed-dim: '#75d1ff'
  on-secondary-fixed: '#001e2b'
  on-secondary-fixed-variant: '#004d67'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#10131a'
  on-background: '#e1e2ec'
  surface-variant: '#32353d'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 4rem
    fontWeight: '800'
    lineHeight: 4.5rem
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.5rem
    fontWeight: '800'
    lineHeight: 3rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: 3rem
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '700'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: 0.005em
  label-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.04em
  code-inline:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: '0'
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

This design system expresses high-performance engineering, computational clarity, and elite digital craftsmanship for modern web development, architectural design, and dedicated infrastructure hosting. Designed for founders, technical leaders, and enterprises seeking uncompromising digital precision, the visual language merges **High-Tech Minimalism** with **Luminous Glassmorphism**.

The aesthetic evokes deliberate focus, structural power, and continuous reliability. Deep void layers of obsidian and midnight blue establish infinite canvas depth, while precise electric and cyan photonic highlights channel energy and algorithmic intelligence. Surfaces feel light yet substantial—constructed from crystalline translucent panes accented by precise, low-friction luminous edges.

## Colors

The palette is engineered exclusively for an immersive, high-contrast dark visual mode. 

### Palette Architecture
- **Primary Accent (`#0066FF`)**: Pure electric blue, providing anchor interactive weight for primary CTAs, active operational indicators, and hero brand moments.
- **Secondary Accent (`#00C2FF`)**: High-luminance vivid cyan, used for energetic callouts, subtle linear gradients, hover states, and dynamic status telemetry.
- **Tertiary Accent (`#38BDF8`)**: Softened sky beam for data visualization highlights, code tokenization, and secondary glowing traces.
- **Base Canvas & Void (`#0A0D14`)**: The foundational canvas layer, absorbing glare and driving maximum dynamic range.
- **Elevated Surfaces (`#0F172A`, `#111827`)**: Layered slate and midnight tones engineered with 60%–85% alpha blends to form translucent frosted card planes.
- **Functional Neutral Scale**:
  - `Text-Primary`: `#F8FAFC` (98% luminance white)
  - `Text-Secondary`: `#94A3B8` (Slate 400 for balanced legibility without eye strain)
  - `Text-Muted`: `#64748B` (Slate 500 for captions, timestamps, and de-emphasized metadata)
  - `Border-Subtle`: `rgba(255, 255, 255, 0.08)`
  - `Border-Glow`: `rgba(0, 194, 255, 0.35)` with fallback electric blue gradients

## Typography

The type system blends the geometric confidence and structural presence of **Plus Jakarta Sans** for headlines with the neutral, hyper-legible clarity of **Inter** for dense interface data, body copy, and metrics.

### Hierarchy & Style Rules
- **Display & Large Headlines**: Always styled with tight negative tracking (`-0.02em` to `-0.03em`) to deliver modern editorial tension. Large display headlines often adopt subtle gradient fills (`linear-gradient(180deg, #FFFFFF 0%, #94A3B8 100%)`).
- **Body & Paragraphs**: Set in Inter with relaxed line spacing (`1.5` to `1.6`) to maintain legibility against deep dark surfaces.
- **Labels & System Chips**: Utilize uppercase or medium-weighted tracking for technical badges, server statuses, and infrastructure configurations.

## Layout & Spacing

A disciplined 12-column responsive fluid grid governs page structure with strict alignment across all viewports.

### Grid & Breakpoints
- **Desktop (≥1280px)**: 12 columns, `margin: 3rem`, `gutter: 1.5rem`. Max inner content container clamped at `1280px` for optimal eye tracking.
- **Tablet (768px – 1279px)**: 8 columns, `margin: 2rem`, `gutter: 1.25rem`. Complex metrics reflow from 3-4 columns down to 2 columns.
- **Mobile (<768px)**: 4 columns, `margin-mobile: 1.25rem`, `gutter-mobile: 1rem`. All multi-pane layouts collapse into single-column vertical flows.

### Spacing Principles
Component padding strictly abides by an 8pt base grid (expressed through 0.25rem increments). Large macro sections utilize `space-xl` multiplied by 2 (`5rem` to `7rem`) to generate comfortable negative space that isolates complex technical cards from secondary copy.

## Elevation & Depth

Visual depth is achieved through layered glassmorphism, surface translucency, and photonic gradient edge glows rather than heavy opaque drop shadows.

### Atmospheric Surfaces
1. **Level 0 (Canvas Base)**: Solid `#0A0D14`. The infinite floor of the experience.
2. **Level 1 (Card & Section Containers)**: Translucent `#0F172A` at 65% opacity combined with `backdrop-filter: blur(16px)` and a continuous hairline border of `rgba(255, 255, 255, 0.08)`.
3. **Level 2 (Active & Hover Cards)**: Translucent `#111827` at 85% opacity, `backdrop-filter: blur(24px)`, with a localized radial border illumination using `rgba(0, 194, 255, 0.4)`.
4. **Level 3 (Modals, Flyouts & Menus)**: Solid/glass composite with a concentrated electric blue halo: `box-shadow: 0 16px 40px -8px rgba(0, 102, 255, 0.25), 0 0 1px 1px rgba(0, 194, 255, 0.4)`.

### Photonic Border Glow Technique
Cards and elevated interactive panels make use of masked gradients or dual pseudo-elements to produce a distinct edge glow: a 1px border gradient transitioning from `#0066FF` through `#00C2FF` to transparent.

## Shapes

The design system maintains a balanced, contemporary corner geometry (`roundedness: 2`). Standard containers, cards, and input fields apply an 8px (`0.5rem`) radius. Elevated focus elements, pill tags, and micro-badges transition smoothly between standard geometry and full-radius pills (`9999px`) to distinguish categorical metadata from structural layouts.

## Components

### Buttons
- **Primary Action**: Solid `#0066FF` with text `#FFFFFF`, an inner soft highlight (`inset 0 1px 0 rgba(255, 255, 255, 0.2)`), and a continuous hover glow (`0 0 20px rgba(0, 102, 255, 0.5)`). Radius: `0.5rem`. Height: `44px` desktop, `48px` mobile.
- **Secondary (Glass / Ghost)**: Background `rgba(15, 23, 42, 0.6)` with 1px border `rgba(0, 194, 255, 0.25)`. Text in `#F8FAFC`. On hover, the border glow intensifies to `rgba(0, 194, 255, 0.7)` with a slight background tint shift.
- **Tertiary / Link**: Transparent background with text `#00C2FF` and subtle bottom underline transition on hover.

### Cards & Panels
- **Glassmorphic Service Cards**: Built on `#0F172A` with 70% opacity and `backdrop-filter: blur(16px)`. Border is a 1px gradient stroke starting from electric blue down to slate. Padding is `space-lg` (`1.5rem`).
- **Interactive State**: On hover, the border glow shifts from low-opacity white to `#00C2FF` alongside a subtle translateY(-2px) transition.

### Input Fields & Controls
- **Text Inputs**: Background `#0A0D14` surrounded by 1px `rgba(255, 255, 255, 0.12)`. Padding: `0.75rem 1rem`. Focus state triggers an immediate electric blue outline ring: `0 0 0 2px rgba(0, 102, 255, 0.5)` with border color shifting to `#00C2FF`.
- **Checkboxes & Radios**: 18px size, base background `rgba(15, 23, 42, 0.8)`. Checked state fills with `#0066FF` displaying a crisp white icon and a soft 6px cyan ambient blur.

### Chips & Status Badges
- **Status Chips**: Micro-pills (`rounded-full`, padding `0.25rem 0.75rem`) featuring a live pulsing LED indicator (e.g., active server: 6px circle with `#00C2FF` ping animation). Background set to `rgba(0, 102, 255, 0.12)` with a 1px border of `rgba(0, 194, 255, 0.3)`.

### Lists & Navigation Bars
- **Navigation Bar**: Sticky frosted glass header (`rgba(10, 13, 20, 0.75)`, `backdrop-filter: blur(20px)`), anchored with a 1px bottom border `rgba(255, 255, 255, 0.06)`.
- **Feature Lists**: Clean horizontal divider borders `rgba(255, 255, 255, 0.06)`, bullet points replaced by vivid cyan accent chevrons or mini terminal brackets (`< >`).