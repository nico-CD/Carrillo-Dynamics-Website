# The "Super Sell" Funnel Architecture
**Date:** July 2026
**Status:** Planned for future implementation

## Overview
This plan outlines the strategy to shift the website from a generic digital brochure into a highly optimized closing tool, utilizing a two-pronged funnel approach.

## 1. Traffic Sources & Routing
We are separating traffic into two distinct lanes to provide the right experience for the right intent level.

- **Organic Traffic (Google / Word of Mouth):** Lands on the **Homepage**.
- **Cold Call Wins & Business Cards (QR Code):** Lands on the **"Super Sell" Landing Page (`/start` or `/audit`)**.

*(Note: The QR code on the physical business cards should link directly to the Super Sell page, e.g., `carrillodynamics.com/start`. This isolates this warm traffic and prevents them from getting lost clicking around the main site.)*

## 2. The Homepage Component Swap (Organic Traffic)
The massive, multi-step intake form currently on the homepage causes too much friction for cold, organic traffic.
- **Action:** Remove the full intake form from the homepage.
- **Replacement:** A low-friction "Zero-Spam Video Gate".
- **Functionality:** Users provide a simple email address to instantly unlock a 7-minute engineering breakdown video on the screen.
- **Value:** Captures leads without being annoying. Proves competence immediately.

## 3. The "Super Sell" Page (Warm Traffic)
This is a hidden, dedicated landing page designed specifically for people who have already spoken with Nico or scanned a business card. It serves to educate them and collect technical specs before a closed meeting.

- **Structure:**
  1. **Clean Header:** No distracting navigation links.
  2. **The Video:** The 7-minute general company overview video (Hosted on YouTube to keep costs at zero. We will use embed parameters like `?rel=0` to minimize competitor suggested videos).
  3. **The Full Intake Form:** The multi-step form (Company Name, Bottleneck, etc.) is moved here.
- **Copy Angle:** *"Help us prepare for your upcoming strategy session. Fill out the technical diagnostic below so we can map out your exact operational bottlenecks before we jump on the call."*

## 4. Execution Steps (When Ready)
1. **Create `Start.tsx`:** Build the new dedicated landing page route.
2. **Create `VideoGate.tsx`:** Build the simple email capture component for the homepage.
3. **Refactor `Index.tsx`:** Swap the old intake form for the new `VideoGate`.
4. **Update `App.tsx`:** Register the new route.
5. **Update `i18n.ts`:** Add translation strings for the new video gate copy.
