# Quoto Design System

The Quoto website (this repo) and the Quoto app share a single visual language.
The canonical source of truth is [`design-tokens.json`](./design-tokens.json) at
the root of this repo — the CSS in [`src/styles.css`](./src/styles.css) is the
website's expression of those tokens, and this document explains how to apply
the same tokens to the app, regardless of platform.

> **Rule:** Never invent new brand colours or type styles in the app. If a
> design needs a token that doesn't exist yet, add it to `design-tokens.json`
> first, mirror it in `src/styles.css`, then consume it in the app.

---

## 1. Brand identity

| Token              | Value     | Where it shows up                                       |
| ------------------ | --------- | ------------------------------------------------------- |
| `brand.primary`    | `#4F6BFF` | App icon background, primary CTAs, links, focus rings   |
| `brand.cream`      | `#FAFAF7` | Page / app background (light mode)                      |
| `brand.navy`       | `#041638` | Primary text on light surfaces                          |
| `brand.accent`     | `#FFC233` | Illustrations only (paired with indigo on cream)        |

These match `public/manifest.json` (`theme_color`, `background_color`) and the
favicon / app icon palette.

---

## 2. Semantic colour palette

The website uses the standard shadcn semantic naming. Apply the **same names**
in the app — never reference raw brand hex inside components.

### Light mode

| Semantic token           | OKLCH                          | Hex        |
| ------------------------ | ------------------------------ | ---------- |
| `background`             | `oklch(0.987 0.003 90)`        | `#FAFAF7`  |
| `foreground`             | `oklch(0.21 0.07 260)`         | `#041638`  |
| `card`                   | `oklch(1 0 0)`                 | `#FFFFFF`  |
| `card-foreground`        | `oklch(0.21 0.07 260)`         | `#041638`  |
| `primary`                | `oklch(0.58 0.21 258)`         | `#4F6BFF`  |
| `primary-foreground`     | `oklch(1 0 0)`                 | `#FFFFFF`  |
| `secondary`              | `oklch(0.96 0.01 250)`         | `#EDF2F8`  |
| `secondary-foreground`   | `oklch(0.21 0.07 260)`         | `#041638`  |
| `muted`                  | `oklch(0.96 0.01 250)`         | `#EDF2F8`  |
| `muted-foreground`       | `oklch(0.5 0.03 258)`          | `#596475`  |
| `accent`                 | `oklch(0.95 0.04 258)`         | `#DEF0FF`  |
| `accent-foreground`      | `oklch(0.58 0.21 258)`         | `#4F6BFF`  |
| `destructive`            | `oklch(0.577 0.245 27.325)`    | `#E7000B`  |
| `destructive-foreground` | `oklch(0.984 0.003 247.858)`   | `#F8FAFC`  |
| `border` / `input`       | `oklch(0.92 0.008 258)`        | `#E1E5EA`  |
| `ring`                   | `oklch(0.58 0.21 258)`         | `#4F6BFF`  |

### Dark mode

| Semantic token           | OKLCH                          | Hex        |
| ------------------------ | ------------------------------ | ---------- |
| `background`             | `oklch(0.129 0.042 264.695)`   | `#020618`  |
| `foreground`             | `oklch(0.984 0.003 247.858)`   | `#F8FAFC`  |
| `card`                   | `oklch(0.208 0.042 265.755)`   | `#0F172B`  |
| `primary`                | `oklch(0.929 0.013 255.508)`   | `#E2E8F0`  |
| `primary-foreground`     | `oklch(0.208 0.042 265.755)`   | `#0F172B`  |
| `secondary` / `muted` / `accent` | `oklch(0.279 0.041 260.031)` | `#1D293D` |
| `muted-foreground`       | `oklch(0.704 0.04 256.788)`    | `#90A1B9`  |
| `destructive`            | `oklch(0.704 0.191 22.216)`    | `#FF6467`  |
| `border`                 | `oklch(1 0 0 / 10%)`           | `#FFFFFF1A`|
| `input`                  | `oklch(1 0 0 / 15%)`           | `#FFFFFF26`|
| `ring`                   | `oklch(0.551 0.027 264.364)`   | `#6A7282`  |

> Hex values are the gamut-mapped sRGB equivalents of the OKLCH definitions.
> Use the **OKLCH value on web** (it's what the browser actually renders) and
> the **hex value on native** (React Native, Flutter, iOS, Android).

---

## 3. Typography

The website uses Tailwind v4's default system sans stack — **no custom webfont
is loaded**. The app should follow the same approach:

- **iOS:** San Francisco (system default)
- **Android:** Roboto (system default)
- **Web:** `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`

If a custom font is later adopted, update `typography.fontFamily.sans` in
`design-tokens.json` and mirror in `src/styles.css` (`@theme` block) and the
app's theme simultaneously.

### Type scale (px)

| Token | Size  | Line height | Common use                                  |
| ----- | ----- | ----------- | ------------------------------------------- |
| `xs`  | 12    | 16          | Legal, fine print, badges                   |
| `sm`  | 14    | 20          | Secondary body, helper text, button labels  |
| `base`| 16    | 24          | Body                                        |
| `lg`  | 18    | 28          | Hero sub-headline, lead paragraph           |
| `xl`  | 20    | 28          | Section eyebrow, small headings             |
| `2xl` | 24    | 32          | H3                                          |
| `3xl` | 30    | 36          | H2 (mobile)                                 |
| `4xl` | 36    | 40          | H1 (mobile), H2 (desktop)                   |
| `5xl` | 48    | 1           | Hero H1 (tablet)                            |
| `6xl` | 60    | 1           | Hero H1 (desktop)                           |
| `7xl` | 72    | 1           | Marketing only — not used in app            |

### Named text styles

| Style          | Size (mobile → desktop) | Weight    | Tracking | Color              |
| -------------- | ----------------------- | --------- | -------- | ------------------ |
| `displayHero`  | `4xl` → `5xl` → `6xl`   | semibold  | tight    | `foreground`       |
| `displayH1`    | `3xl` → `4xl`           | semibold  | tight    | `foreground`       |
| `h2`           | `2xl` → `3xl`           | semibold  | tight    | `foreground`       |
| `h3`           | `xl` → `2xl`            | semibold  | normal   | `foreground`       |
| `bodyLead`     | `base` → `lg`           | regular   | normal   | `mutedForeground`  |
| `body`         | `base`                  | regular   | normal   | `foreground`       |
| `bodySmall`    | `sm`                    | regular   | normal   | `mutedForeground`  |
| `caption`      | `xs`                    | regular   | normal   | `mutedForeground`  |
| `buttonLabel`  | `sm`                    | medium    | normal   | `primaryForeground`|

---

## 4. Radius

Component corner radius is generous (`--radius: 1rem`). This is a brand
signal — keep cards, buttons, inputs and sheets visibly rounded in the app.

| Token | Value     |
| ----- | --------- |
| `sm`  | `0.75rem` |
| `md`  | `0.875rem`|
| `lg`  | `1rem`    |
| `xl`  | `1.25rem` |
| `2xl` | `1.5rem`  |
| `full`| `9999px`  |

---

## 5. Applying the system in the app

### A — React Native (Expo, plain `StyleSheet`)

```ts
export const colors = {
  light: {
    background: '#FAFAF7',
    foreground: '#041638',
    card: '#FFFFFF',
    cardForeground: '#041638',
    primary: '#4F6BFF',
    primaryForeground: '#FFFFFF',
    secondary: '#EDF2F8',
    secondaryForeground: '#041638',
    muted: '#EDF2F8',
    mutedForeground: '#596475',
    accent: '#DEF0FF',
    accentForeground: '#4F6BFF',
    destructive: '#E7000B',
    destructiveForeground: '#F8FAFC',
    border: '#E1E5EA',
    input: '#E1E5EA',
    ring: '#4F6BFF',
  },
  dark: {
    background: '#020618',
    foreground: '#F8FAFC',
    card: '#0F172B',
    cardForeground: '#F8FAFC',
    primary: '#E2E8F0',
    primaryForeground: '#0F172B',
    secondary: '#1D293D',
    secondaryForeground: '#F8FAFC',
    muted: '#1D293D',
    mutedForeground: '#90A1B9',
    accent: '#1D293D',
    accentForeground: '#F8FAFC',
    destructive: '#FF6467',
    destructiveForeground: '#F8FAFC',
    border: 'rgba(255,255,255,0.10)',
    input: 'rgba(255,255,255,0.15)',
    ring: '#6A7282',
  },
} as const;

export const radius = { sm: 12, md: 14, lg: 16, xl: 20, '2xl': 24, full: 9999 };

export const typography = {
  fontFamily: undefined, // system default (SF / Roboto)
  displayHero:  { fontSize: 36, lineHeight: 40, fontWeight: '600', letterSpacing: -0.9 },
  displayH1:    { fontSize: 30, lineHeight: 36, fontWeight: '600', letterSpacing: -0.75 },
  h2:           { fontSize: 24, lineHeight: 32, fontWeight: '600', letterSpacing: -0.6 },
  h3:           { fontSize: 20, lineHeight: 28, fontWeight: '600' },
  bodyLead:     { fontSize: 18, lineHeight: 28, fontWeight: '400' },
  body:         { fontSize: 16, lineHeight: 24, fontWeight: '400' },
  bodySmall:    { fontSize: 14, lineHeight: 20, fontWeight: '400' },
  caption:      { fontSize: 12, lineHeight: 16, fontWeight: '400' },
  buttonLabel:  { fontSize: 14, lineHeight: 20, fontWeight: '500' },
} as const;
```

### B — NativeWind / Tailwind v4 (mobile or web)

Drop this into the app's global stylesheet — it mirrors `src/styles.css`
exactly so the same `bg-primary`, `text-foreground`, `border-border` utility
classes work identically on both surfaces.

```css
@import "tailwindcss";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);

  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
}

:root {
  --radius: 1rem;
  --background: oklch(0.987 0.003 90);
  --foreground: oklch(0.21 0.07 260);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.21 0.07 260);
  --primary: oklch(0.58 0.21 258);
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.96 0.01 250);
  --secondary-foreground: oklch(0.21 0.07 260);
  --muted: oklch(0.96 0.01 250);
  --muted-foreground: oklch(0.5 0.03 258);
  --accent: oklch(0.95 0.04 258);
  --accent-foreground: oklch(0.58 0.21 258);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.984 0.003 247.858);
  --border: oklch(0.92 0.008 258);
  --input: oklch(0.92 0.008 258);
  --ring: oklch(0.58 0.21 258);
}

.dark {
  --background: oklch(0.129 0.042 264.695);
  --foreground: oklch(0.984 0.003 247.858);
  --card: oklch(0.208 0.042 265.755);
  --card-foreground: oklch(0.984 0.003 247.858);
  --primary: oklch(0.929 0.013 255.508);
  --primary-foreground: oklch(0.208 0.042 265.755);
  --secondary: oklch(0.279 0.041 260.031);
  --secondary-foreground: oklch(0.984 0.003 247.858);
  --muted: oklch(0.279 0.041 260.031);
  --muted-foreground: oklch(0.704 0.04 256.788);
  --accent: oklch(0.279 0.041 260.031);
  --accent-foreground: oklch(0.984 0.003 247.858);
  --destructive: oklch(0.704 0.191 22.216);
  --destructive-foreground: oklch(0.984 0.003 247.858);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.551 0.027 264.364);
}
```

Usage in components is then identical to the website:

```tsx
<Pressable className="rounded-lg bg-primary px-4 py-3">
  <Text className="text-sm font-medium text-primary-foreground">Send quote</Text>
</Pressable>
```

### C — Flutter

```dart
class QuotoColors {
  static const background = Color(0xFFFAFAF7);
  static const foreground = Color(0xFF041638);
  static const card = Color(0xFFFFFFFF);
  static const primary = Color(0xFF4F6BFF);
  static const primaryForeground = Color(0xFFFFFFFF);
  static const secondary = Color(0xFFEDF2F8);
  static const muted = Color(0xFFEDF2F8);
  static const mutedForeground = Color(0xFF596475);
  static const accent = Color(0xFFDEF0FF);
  static const destructive = Color(0xFFE7000B);
  static const border = Color(0xFFE1E5EA);
  static const ring = primary;
}

final quotoTheme = ThemeData(
  colorScheme: const ColorScheme.light(
    surface: QuotoColors.background,
    onSurface: QuotoColors.foreground,
    primary: QuotoColors.primary,
    onPrimary: QuotoColors.primaryForeground,
    secondary: QuotoColors.secondary,
    error: QuotoColors.destructive,
    outline: QuotoColors.border,
  ),
  textTheme: const TextTheme(
    displayLarge: TextStyle(fontSize: 60, fontWeight: FontWeight.w600, letterSpacing: -1.5, color: QuotoColors.foreground),
    displayMedium: TextStyle(fontSize: 36, fontWeight: FontWeight.w600, letterSpacing: -0.9, color: QuotoColors.foreground),
    headlineMedium: TextStyle(fontSize: 24, fontWeight: FontWeight.w600, letterSpacing: -0.6, color: QuotoColors.foreground),
    bodyLarge: TextStyle(fontSize: 18, fontWeight: FontWeight.w400, color: QuotoColors.mutedForeground),
    bodyMedium: TextStyle(fontSize: 16, fontWeight: FontWeight.w400, color: QuotoColors.foreground),
    bodySmall: TextStyle(fontSize: 14, fontWeight: FontWeight.w400, color: QuotoColors.mutedForeground),
    labelMedium: TextStyle(fontSize: 14, fontWeight: FontWeight.w500),
  ),
  useMaterial3: true,
);
```

---

## 6. Keeping the website and app in sync

When the brand evolves:

1. Edit `design-tokens.json` — this is the source of truth.
2. Mirror the change in `src/styles.css` (`:root` and `.dark` blocks).
3. Update the app's theme file (one of the snippets above).
4. Add a `### Changed` entry to `CHANGELOG.md` describing the visual shift.
5. If the change affects the app icon background or splash screen, also
   update `public/manifest.json` (`theme_color`, `background_color`).
