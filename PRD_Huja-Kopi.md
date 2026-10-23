# Product Requirement Document (PRD)
## Huja Kopi — Landing Page & Digital Visual Menu Redesign

---

## 1. Project Overview & Objectives

* **Project Name:** Huja Kopi Digital Menu & Web Profile
* **Client/Brand:** HUJA KOPI ("Daily Enjoyment")
* **Location:** Jl. Mampang Prapatan XV No.15, Tegal Parang, Mampang Prapatan, Jakarta Selatan 12790
* **Goal:** Redesign existing bio-link website into an aesthetic, responsive, mobile-first digital menu catalog and landing page that reflects the authentic brand tone and converts visitors to WhatsApp orders easily.
* **Target Deployment:** Static Web Hosting (Vercel / Netlify / Cloudflare Pages / GitHub Pages).

---

## 2. Tech Stack & Engineering Requirements

1. **Architecture:**
   * Single Page Application (SPA) / Standalone Static Web (`index.html`).
   * No heavy framework dependencies; easy to maintain and deploy in under 2 minutes.
2. **Styling:**
   * Tailwind CSS (via CDN `https://cdn.tailwindcss.com` for instant zero-config setup, or Tailwind CLI).
3. **Icons & Typography:**
   * Icons: FontAwesome 6 / Lucide Icons / Heroicons via CDN.
   * Fonts: Google Fonts (*Plus Jakarta Sans* or *Inter* for clean legibility).
4. **Behavior / Scripting:**
   * Vanilla JavaScript for category filtering, responsive navbar/drawer (if any), and automatic WhatsApp message generator.

---

## 3. Brand Identity & Design System (Color Palette)

Based on official menu visual references:

| Element | Color Name | Hex Code / Tailwind Equivalent | Usage |
| :--- | :--- | :--- | :--- |
| **Canvas / Background** | Warm Cream / Craft Paper | `#F4EFE6` or `#ECE6DA` | Full page background with subtle line-art texture |
| **Card Background** | Clean White / Ivory | `#FFFFFF` or `#FAF7F2` | Menu item cards & modals |
| **Primary Accent** | Cobalt Royal Blue | `#08338F` or `#0F3EA9` | Price badges, active filter tabs, primary brand text |
| **Secondary Accent** | Warm Ochre / Amber | `#E29E2E` or `#D97706` | Recommended / Best-seller badges & stars |
| **Main Text** | Deep Espresso / Charcoal | `#231F20` or `#1E1B18` | Main headings, menu item names, address text |
| **Subtext / Muted** | Warm Slate / Soft Gray | `#6B635B` | Descriptions, operational hours, footer links |

### Visual Characteristics:
* **Circular Price Badges:** Bold white text inside solid cobalt blue circular badges (e.g., `12K`, `15K`, `55K`).
* **Line-Art Doodle Accents:** Subtle background vector sketches of moka pots, portafilters, coffee beans, and take-away cups.
* **Clean Card Elevation:** Soft shadows (`shadow-sm` to `shadow-md`), rounded corners (`rounded-2xl`).

---

## 4. Layout Structure & Responsive Specifications

### A. Responsive Breakpoints
* **Mobile (< 640px):** Single-column layout or 2-column compact grid for cards. Large touch targets (min 44x44px).
* **Tablet (640px - 1024px):** 2-column balanced grid with sticky navigation.
* **Desktop (> 1024px):** Max container width `max-w-6xl` or `max-w-7xl` centered, 3 to 4-column menu grid.

---

## 5. Functional Features & Page Sections

### Section 1: Top Navigation Bar
* Sticky header with blur backdrop (`backdrop-blur-md bg-stone-100/80`).
* Brand logo and title: **HUJA KOPI** with sub-tagline *Daily Enjoyment*.
* Direct action button: Quick link to Instagram and WhatsApp chat.

### Section 2: Hero Header
* Catchy headline: *"Ruang Teduh untuk Daily Enjoyment Anda."*
* Operational indicator: Live status badge (e.g., *"Open Daily: 09:00 - 22:00 WIB"*).
* Action buttons:
  * Primary: *"Jelajahi Menu"* (smooth scroll to `#menu`).
  * Secondary: *"Petunjuk Arah"* (Google Maps link).

### Section 3: Interactive Menu Catalog (Core)
* **Category Tabs (Filter):**
  * `Semua` (All)
  * `Cup Regular` (Es Chocolate, Kopi Gula Aren, Es Americano, Kopi Soda Leci)
  * `Botol 1 Liter` (Choter, Solit, Koplit)
* **Card Component Attributes:**
  * Product Image with uniform aspect ratio (`aspect-square` or `aspect-[4/3]`) and `object-cover`.
  * Top-Left Badge: Golden thumb icon for "Best Seller" / "Recommended".
  * Top-Right Badge: Cobalt blue circular price tag (e.g., "15K").
  * Menu Code Name (Bold Sans, e.g., **KOPJA**, **SOJA**).
  * Full Descriptor (e.g., *Kopi Gula Aren*, *Kopi Soda Leci*).
  * Direct Order Button: *"Pesan via WhatsApp"* with pre-filled message URL.

### Section 4: Location & Operating Hours
* Embedded Google Maps iframe or styled interactive card directing to:
  * `Jl. Mampang Prapatan XV No.15, RT.8/RW.4, Tegal Parang, Mampang Prapatan, Jakarta Selatan, 12790`.
* List of amenities / features: Wi-Fi, AC Indoor area, Outdoor smoking area, Parkir motor.

### Section 5: Footer & Floating Action Button (FAB)
* Social links (`@huja.kopi`), copyright notice.
* Floating WhatsApp CTA button anchored at bottom-right corner for instant ordering.

---

## 6. Seed Data (Menu Items)

```json
[
  {
    "id": "choja",
    "code": "CHOJA",
    "name": "Es Chocolate",
    "category": "cup",
    "priceDisplay": "12K",
    "priceValue": 12000,
    "recommended": false,
    "image": "images/choja.jpg"
  },
  {
    "id": "soja",
    "code": "SOJA",
    "name": "Kopi Soda Leci",
    "category": "cup",
    "priceDisplay": "15K",
    "priceValue": 15000,
    "recommended": true,
    "image": "images/soja.jpg"
  },
  {
    "id": "kopja",
    "code": "KOPJA",
    "name": "Kopi Gula Aren",
    "category": "cup",
    "priceDisplay": "15K",
    "priceValue": 15000,
    "recommended": false,
    "image": "images/kopja.jpg"
  },
  {
    "id": "meca",
    "code": "MECA",
    "name": "Es Americano",
    "category": "cup",
    "priceDisplay": "12K",
    "priceValue": 12000,
    "recommended": false,
    "image": "images/meca.jpg"
  },
  {
    "id": "choter",
    "code": "CHOTER",
    "name": "Es Chocolate 1 Liter",
    "category": "liter",
    "priceDisplay": "55K",
    "priceValue": 55000,
    "recommended": false,
    "image": "images/choter.jpg"
  },
  {
    "id": "solit",
    "code": "SOLIT",
    "name": "Kopi Soda Leci 1 Liter",
    "category": "liter",
    "priceDisplay": "70K",
    "priceValue": 70000,
    "recommended": true,
    "image": "images/solit.jpg"
  },
  {
    "id": "koplit",
    "code": "KOPLIT",
    "name": "Kopi Gula Aren 1 Liter",
    "category": "liter",
    "priceDisplay": "75K",
    "priceValue": 75000,
    "recommended": false,
    "image": "images/koplit.jpg"
  }
]
```

---

## 7. WhatsApp Integration Specification

* **Phone Number:** `6285151662420`
* **Dynamic URL Pattern:**
  ```text
  https://wa.me/6285151662420?text=Halo%20HUJA%20KOPI,%20saya%20mau%20pesan%20[NAMA_MENU]%20([HARGA])
  ```
* **Example Output:**
  ```text
  https://wa.me/6285151662420?text=Halo%20HUJA%20KOPI,%20saya%20mau%20pesan%20SOJA%20-%20Kopi%20Soda%20Leci%20(15K)
  ```

---

## 8. Definition of Done (DoD)

1. [ ] Mobile layout displays fluidly down to 360px without horizontal scroll leaks.
2. [ ] Colors accurately reflect the cream (`#F4EFE6`) background and cobalt blue (`#08338F`) price badges.
3. [ ] All category tabs filter cards dynamically without reloading the page.
4. [ ] Every "Pesan" button opens WhatsApp with the exact menu name.
5. [ ] Project contains zero build errors and can be deployed directly to Vercel/Netlify by drag-and-drop or Git push.