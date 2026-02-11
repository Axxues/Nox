# # Nox | Premium Dark Auth UI Kit

**Nox** is a high-performance, dark-mode-first Authentication UI Kit crafted by **Zero Bloat UI**. It features a cinematic neon aesthetic, interactive glassmorphism, and robust real-time form validation—all built with utility-first CSS and a performance-first mindset.

**"Elevate your entry point with cinematic precision."**

## ## Key Features

### ### Cinematic Visuals

* **Digital Noise Texture:** Custom SVG noise overlay that eliminates flat colors for a premium digital feel.
* **Animated Neon Blobs:** Fluid, hardware-accelerated background gradients that provide depth without using heavy image files.

### ### Zero Bloat Architecture

* **Vanilla Stack:** Built with pure HTML5, Tailwind CSS, and optimized Vanilla JavaScript.
* **No Dependencies:** Zero reliance on jQuery, React, or heavy external libraries.

### ### Advanced Interactivity

* **Spring-Physics Animations:** Staggered entrance sequences and hover states that feel "snappy" and high-end.
* **Haptic Validation:** The entire UI utilizes "Shake" physics to communicate errors and glowing success rings for valid inputs.
* **Floating Logic:** Intelligent label positioning that prevents text overlap, ensuring 100% readability at all times.

### ### Responsive Engineering

* **"No-Scroll" Design:** Specifically engineered to fit entirely within the viewport height on both desktop and mobile.
* **Social Integration:** Pre-styled buttons for Google and GitHub authentication using optimized inline SVGs.

---

## ## Quick Start

### ### Option 1: Direct Usage (CDN)

This template is pre-configured with the Tailwind CSS CDN for instant deployment without a complex build step.

1. Clone the repository.
2. Open `login.html`, `register.html`, or `forgot-password.html` in your browser.
3. That's it!

### ### Option 2: Production Integration

To integrate this into a modern web project (React, Vue, ASP.NET Core):

1. Link `tailwind.config.js` and `main.js` to your project structure.
2. Copy the theme settings from `tailwind.config.js` into your project's main `tailwind.config.js`.
3. Extract the semantic HTML structure into your specific framework components.


## ## Customization

### ### Changing the Color Scheme

**Nox** uses an **Indigo** accent palette by default. To change the brand color globally, open `config.js` and modify the `nox.accent` hex code:

```javascript
colors: {
    nox: {
        accent: '#6366f1', // Primary Brand Color
    }
}


### ### Modifying Validation Logic

Global validation rules, password matching, and strength meter thresholds are centrally managed in the `validate` engine within `script.js`.

## ## Browser Support

Nox utilizes modern CSS features like `backdrop-filter` and CSS variables.

Browser     Support 
**Chrome**  Latest
**Firefox** Latest
**Safari**  Latest
**Edge**    Latest
