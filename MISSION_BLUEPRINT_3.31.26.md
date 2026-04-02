# MISSION BLUEPRINT: Upgrades 3.31.26
## STATUS: ARCHITECTURAL PLANNING PHASE

This blueprint outlines the shift from a "Simple Webhook" model to an **"Industrial Grade Operations Hub."** The goal is to organize Carrillo Dynamics' data flow for scalability, security, and professional monitoring.

---

### 1. FOUNDATION: THE INDUSTRIAL HANDSHAKE (Current Branch Focus)
*   **Centralized Engine (`src/services/Handshake.ts`)**: 
    *   Replace fragmented `fetch` calls in `useIntake.ts` and `Success.tsx` with a single, high-authority transmission service.
    *   Standardize payloads with automated fields: `timestamp`, `origin_host`, `client_session_id`.
*   **Environmental Protection (`src/utils/env.ts`)**: 
    *   Implement a "Pre-Flight Check" that validates the existence of the n8n webhook URL and other critical environment variables on startup.
*   **Operational Logging ("The Black Box")**: 
    *   Store failed transmissions in `localStorage`. 
    *   Add a hidden "Maintenance Logic" that allows you to retry or recover lost form data from a client's device if a network error occurs.

---

### 2. THE OPS STACK INTEGRATION (Organization Goal)
*   **Sentry (Alerting)**: 
    *   Initialize Sentry to track frontend crashes and n8n transmission failures.
    *   Receive "Incident Alerts" in your Slack or Email immediately when a form fails.
*   **Supabase (Primary Vault)**: 
    *   Establish a `lead_intake` table in Supabase.
    *   Shift n8n logic from "Go to Google Sheets" to "Go to Supabase." 
    *   *Note: Use Google Sheets only as a backup/viewing tool.*
*   **Linear (Task Management)**: 
    *   Create a "Workflow Automation" in n8n where every "High Intensity" lead automatically generates a Linear Issue for follow-up.
*   **Slack (Mission Protocol)**: 
    *   Real-time notifications for every successful "Systems Mapping" completion.

---

### 3. THE "SYSTEM BLUEPRINT" (.cursorrules)
To avoid disorganization in the future, we will create a `.cursorrules` file that acts as the "Master Prompt" for all AI modeling on this project. 
**Core Tenets**:
1.  **Industrial Mono Design**: Maintain strict adherence to monochromatic, high-stakes engineering aesthetics.
2.  **Deterministic Code**: All API calls must go through the `Handshake` service.
3.  **Audit-First**: Log everything. Fail silently for the user, but loudly for the engineer (via Sentry).

---

### 4. SUCCESS DASHBOARD ENHANCEMENTS
*   **Visibility 3.0**: 
    *   Increase "SECURE & ACTIVE" cinematic impact on the `/success` page.
    *   Implement high-contrast "Action Green" elements for final verification of lead data.

---

### 5. THE "ADMINISTRATIVE PORTAL" TRANSITION (Future Vision)
Currently, your website is a **Landing/Sales Page**. The goal is to evolve it into a **Full-Scale Administrative Portal** that manages your entire business.
*   **Operational Control**:
    *   **Incident Hub**: Real-time tracking of Sentry failures and transmission errors.
    *   **Financial Diagnostics**: Integrated Stripe analytics/revenue charts overview.
    *   **Project Oversight**: Direct tracking of Linear issues, GitHub commits, and "Audit Forensic" progress.
*   **Architecture**:
    *   **Secure Access**: Powered by **Supabase Auth** for unique administrator login.
    *   **Design Standards**: High-fidelity **Dark Mode** dashboard (Sleek, eye-safe for late-night industrial ops).
    *   **Source of Truth**: Supabase PostgreSQL as the primary administrative database.

---

### NEXT STEPS (When prioritizing resumes):
1.  Initialize **Sentry** for error tracking.
2.  Build **`Handshake.ts`** and replace existing `fetch` calls.
3.  Create the **`.cursorrules`** file for systematic AI coordination.

---

### RE-ENGAGEMENT PROMPT (Copy/Paste this when you return)
> *"I'm back on the upgrades_3.31.26 branch. I'm ready to move from a basic landing page to a full-scale Administrative Portal. Reference the MISSION_BLUEPRINT_3.31.26.md and let's start with Phase 1: The Handshake Engine and Sentry integration."*
