# Automation Agency Blueprint: Carrillo Dynamics Model
## Master Implementation & Reconstruction Guide

This document serves as the definitive technical and strategic blueprint for replicating the **Carrillo Dynamics** "High-Authority" automation platform. It is designed to be read by an AI Developer Agent to rebuild this entire system from scratch for a local service business.

---

## 1. Core Tech Stack (The Engine)
*   **Framework**: React 18+ with TypeScript (Vite-optimized).
*   **Styling**: Tailwind CSS with Radix UI (Shadcn/UI components).
*   **Animations**: `framer-motion` (Spring physics, AnimatePresence, Scroll Tracking).
*   **Form Logic**: `react-hook-form` + `zod` for strict schema validation.
*   **State Management**: React Context (Language/Theming).
*   **External Integration**: n8n Webhook for lead-routing to CRM/HighLevel/Sheets.

---

## 2. Branding Philosophy: "Industrial Utility"
To replicate this aesthetic, follow these strict design constraints:
- **Color Palette**: Solid Black (`zinc-950`) background. Action Green (`#10b981`) for utility and CTAs. White/Muted Grey for technical data.
- **Typography**: `font-black` (Inter) for headers with `tracking-tighter`. `JetBrains Mono` for technical readouts and "system loot" (metrics).
- **Radius**: `0px` border-radius globally. Avoid rounded corners to maintain an "industrial/engineered" feel.
- **Micro-Animations**: Use "Scanner" light effects (shimmer gradients) on borders and bars. Use `bull.png` with a breathing opacity for loading states.

---

## 3. Key Hero Components (AI Reconstruction Steps)

### A. The ROI Capacity Calculator (`InteractiveCalculator.tsx`)
- **Objective**: Visualize "Human Latency" vs "Operational Flow."
- **Logic**: Calculate FTU (Full Time Units) saved per week by multiplying `teamSize` by `manualHours`.
- **Dynamic Visuals**: Use a "Pressure Gauge" style bar. If the waste is high (e.g., >60hrs/wk), trigger a red "Critical Mass" pulse and flickering "Leak" icons.
- **Human Tone**: Summary text should avoid "AI-speak." Instead of "Winning back time," use "Recovering your team's productive capacity without adding payroll."

### B. The Forensic Blueprint Intake (`LeadIntake.tsx`)
- **Objective**: Frictionless lead capture with high perceived value.
- **Logic**: Multi-step or single-column form that triggers an `async fetch` to an n8n webhook.
- **UX**: Use `AnimatePresence` to swap the form for a success state inline upon submission. Never redirect to a new page; maintain stay-on-site flow.

### C. Technical Archives / Whitepapers (`ArticleDetail.tsx`)
- **Objective**: Establish domain authority via technical case studies.
- **Parsing Logic**: Avoid complex markdown libraries if possible to keep it lightweight. Use `.split('\n\n')` to render headers (`###`) and body text.
- **Visual Hook**: Single "Action Green" drop-cap on the *first* paragraph only. Use `text-balance` for all headers to ensure professional word-wrapping in Spanish/English.

---

## 4. Bilingual Implementation (`i18n.ts`)
- **Architecture**: Store all strings in a centralized `i18nData` object keyed by language ('en' | 'es').
- **Agency Tip**: Use localized industry terminology. For local service businesses, "Lead Flow" is more effective than "Acquisition Funnel."
- **Maintenance**: Ensure all new components pull from `useTranslation()` context to avoid hardcoded strings.

---

## 5. Automation Backend (n8n Flow)
To complete the loop, the AI Agent must configure an n8n workflow with the following nodes:
1. **Webhook Node**: Listen for POST from the React frontend.
2. **AI Triage**: Route to an LLM to categorize the lead (e.g., "High-Volume Plumber").
3. **CRM Integration**: Inject directly into ServiceTitan or Jobber.
4. **Instant Notification**: Send the owner a Telegram/Slack alert with the lead's "ROI Potential" calculated by the site.

---

## 6. Instructions for the Developer Agent (Self-Correction)
*If you are an AI agent building a new version of this site, follow these rules:*

1.  **Stop Asterisk Proliferation**: Never allow list items to be prefixed with `*` or `-` in the final UI text. Integrate them into cohesive paragraphs.
2.  **No Em Dashes**: Avoid `—` in copy. Use commas or colons for a more human, direct tone.
3.  **Industrial "Stress" Test**: When building data visualizations, make them react to user input. If numbers go up, make the UI "glow" or "vibrate" to show the impact of the data.
4.  **Dark Mode First**: Do not implement a light mode toggle. The brand identity depends on the "Deep Black" industrial aesthetic.
5.  **Performance Over Flavor**: Prioritize fast page loads (Vite/Brotli) over heavy SVG illustrations. Use code-based effects (gradients/glassmorphism) instead of images.

---
**Carrillo Dynamics** | *Automation Agency Reference Framework*
*Revision: 04.08.26*
