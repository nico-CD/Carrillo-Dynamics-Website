# 🛠️ Carrillo Dynamics: Email Branding Guide

This guide defines the style references and design principles for building HTML emails that align with the **Carrillo Dynamics Industrial Operations** brand.

---

## 1. BRAND AESTHETIC: "THE INDUSTRIAL HANDSHAKE"
The brand is built on high-stakes engineering, monochromatic precision, and "Action Green" utility.

*   **Vibe**: Industrial, Secure, Precise, Minimalist.
*   **Structure**: Sharp corners (0px radius), thin borders, and generous white space (reading sections).
*   **Imagery**: High-contrast, clean lines, and technical iconography (bull logo).

---

## 2. COLOR PALETTE (HTML COMPATIBLE)
For emails, always use **HEX codes** in inline styles for the most reliable rendering across clients.

| Element | HEX Code | Tailwind Equivalent | Role |
| :--- | :--- | :--- | :--- |
| **HUD Black** | `#050505` | `zinc-950` | Backgrounds, Headers |
| **Pure White** | `#FFFFFF` | `white` | Text, Primary Buttons |
| **Action Green** | `#10B981` | `emerald-500` | Links, Success Icons, Accents |
| **Industrial Border** | `#1F2937` | `zinc-800` | Dividers, Outline Buttons |
| **Muted Text** | `#9CA3AF` | `zinc-400` | Footers, Metadata, Labels |

---

## 3. TYPOGRAPHY
Emails have limited support for custom web fonts. Always provide standardized fallbacks.

### Primary (Headings & Labels)
*   **Font Family**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`
*   **Style**: Extra Bold (`900`), Uppercase, Tracking-Tight.
*   **Color**: `#FFFFFF` (on Dark) or `#050505` (on Light).

### Secondary (Body Copy)
*   **Font Family**: `'Inter', system-ui, sans-serif`
*   **Style**: Medium (`500`) or Regular (`400`).
*   **Size**: `16px` for readability.

### Technical (Data & Counters)
*   **Font Family**: `'JetBrains Mono', 'Courier New', Courier, monospace`
*   **Style**: Monospaced for technical feel.

---

## 4. DESIGN STANDARDS (FOR BUILDERS)

### Buttons (Industrial Modern)
*   **Shape**: Strictly 0px Border Radius (Squared off).
*   **Primary State**: White background (`#FFFFFF`) with Black text (`#050505`).
*   **Action State**: Action Green background (`#10B981`) with White text (`#FFFFFF`) for success/confirmation.
*   **Border**: `1px solid #1F2937` for subtle definition.

### Sections & Layout
*   **Reading Section**: Max-width `600px` for optimal reading flow.
*   **Spacing**: Use padding instead of margins for better email client compatibility. 
*   **Dividers**: Thin `1px solid #1F2937` horizontal lines to separate technical sections.

### Imagery
*   **Bull Logo**: Use `bull_green_cd.png` for headers.
*   **Scale**: Keep icons small and precise (max-width `120px` for header logo).

---

## 5. EXAMPLE STYLING REFERENCE (INLINE CSS)

```html
<!-- Industrial Header -->
<div style="background-color: #050505; padding: 40px; border-bottom: 4px solid #10B981;">
  <h1 style="color: #FFFFFF; font-family: 'Inter', Arial, sans-serif; font-weight: 900; text-transform: uppercase; margin: 0; font-size: 24px; letter-spacing: -0.05em;">
    SYSTEMS ACTIVATED
  </h1>
</div>

<!-- Technical Data Section -->
<div style="background-color: #050505; color: #FFFFFF; padding: 20px; font-family: 'JetBrains Mono', monospace; border: 1px solid #1F2937;">
  <span style="color: #10B981;">[STATUS]</span> OPERATIONAL_READY
</div>

<!-- Sharp Button -->
<a href="#" style="background-color: #FFFFFF; color: #050505; text-decoration: none; padding: 12px 24px; font-family: 'Inter', bold; font-weight: 800; text-transform: uppercase; display: inline-block;">
  ACCESS HUB →
</a>
```

---

## 6. ASSETS & LINKS
*   **Logo Asset**: `public/bull_green_cd.png`
*   **Brand Font**: Inter (Google Fonts)
*   **Mono Font**: JetBrains Mono (Google Fonts)
