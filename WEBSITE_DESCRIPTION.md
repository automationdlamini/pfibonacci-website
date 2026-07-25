# Project Blueprint: Pfibonacci Website

This document provides a comprehensive description of the Pfibonacci (Pty) Ltd website to allow for recreation.

## 1. Project Overview
A responsive, single-page landing site for Pfibonacci (Pty) Ltd, focusing on engineering, industrial automation, and technology services. The design is modern, professional, and uses a dark aesthetic with pastel accents.

## 2. Directory Structure
```
/
├── images/ (Contains all image assets)
├── index.html
├── script.js
├── style.css
```

## 3. File Breakdown

### `index.html`
- **Structure:**
  - `<nav>` (Sticky): Logo, toggle button (mobile), navigation links (Home, About, Services, Industries, Contact).
  - `<header id="home">`: Hero section with background image, logo, main title ("C&I Engineering Solutions"), description, and CTA button.
  - `<section id="services">`: Grid of service cards containing image(s) and title.
  - `<section id="industries">`: List of industry sections (Energy, Mining, Water) each containing a list of specialized topics.
  - `<section id="contact">`: Contact form (Name, Email, Message fields).
  - `<footer>`: Developer credit and copyright.

### `style.css`
- **Variables (`:root`):**
  - Colors: `--black` (#0A0A0A), `--white` (#FFFFFF), `--dark-grey` (#1A1A1A), `--light-grey` (#F5F5F5), `--silver` (#C0C0C0), `--pastel-mint`, `--pastel-lavender`, `--pastel-peach`, `--light-black` (#222222).
  - Fonts: 'Montserrat' (headings), 'Inter' (body).
- **Layout:**
  - Uses CSS Grid for the navbar and services grid.
  - Uses Flexbox for mobile navigation and section contents.
  - Responsive design using media queries (`@media (max-width: 1024px)` and `768px`).
- **Key Features:**
  - Sticky navbar with backdrop blur.
  - Circular logo in nav.
  - Hover effects on cards (`transform: translateY(-10px)`).
  - Shimmer effect (infrastructure defined but not fully utilized in HTML).
  - Intersection-based fade-in animations.

### `script.js`
- **Mobile Navigation:** Adds/removes `.active` class to `.menu-toggle` and `.nav-links` on click.
- **Scroll Animations:** Uses `IntersectionObserver` to detect when a `<section>` enters the viewport and adds a `.fade-in` class (triggering a transition from `opacity: 0` to `opacity: 1`).

## 4. Assets List (to be placed in `images/`)
- `black logo new.png`
- `AI.jpg`
- `cabinet_wiring.webp`
- `cloud.jpg`
- `DCS.webp`
- `industry_landing_page.jpg`
- `IOT.webp`
- `IOT2.webp`
- `networking.webp`
- `Pfibonacci logo.png`
- `Pfibonacci_no_bg.svg`
- `Pfibonacci.svg`
- `plant_level_installation.jpg`
- `plc.png`
- `robin-glauser-zP7X_B86xOg-unsplash.jpg`
- `technical_support_training.jpg`
