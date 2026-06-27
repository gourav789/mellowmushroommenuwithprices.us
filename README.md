# mellowmushroommenuwithprices.us

> **Independent informational website — Not affiliated with Mellow Mushroom**

A premium static website providing comprehensive Mellow Mushroom menu information, prices, nutrition guides, and restaurant resources. Built for GitHub Pages.

---

## ⚠️ Disclaimer

This website is **independently operated** and is **not affiliated with, endorsed by, or connected to Mellow Mushroom**, Home Grown Industries of Georgia, Inc., or any of their franchisees. All menu information is provided for informational purposes only. Prices and availability may vary by location and are subject to change. Always verify current pricing directly with your local Mellow Mushroom restaurant.

---

## 🗂️ Project Structure

```
/
├── index.html                  # Homepage
├── 404.html                    # Custom 404
├── robots.txt                  # Search engine crawl rules
├── sitemap.xml                 # XML sitemap
├── manifest.json               # Web app manifest
├── browserconfig.xml           # Windows tile config
│
├── menu/
│   ├── index.html              # Full menu overview
│   ├── pizza/index.html
│   ├── calzones/index.html
│   ├── appetizers/index.html
│   ├── salads/index.html
│   ├── desserts/index.html
│   └── drinks/index.html
│
├── locations/index.html
├── about/index.html
├── contact/index.html
├── faq/index.html
├── privacy-policy/index.html
├── disclaimer/index.html
│
├── assets/
│   ├── css/
│   │   ├── main.css            # Master stylesheet (imports all)
│   │   ├── design-tokens.css   # CSS custom properties
│   │   ├── reset.css           # Browser reset & base
│   │   ├── typography.css      # Text utilities
│   │   ├── layout.css          # Grid, flex, spacing utilities
│   │   ├── header.css          # Sticky header & mega dropdown
│   │   ├── footer.css          # Footer layout
│   │   └── components.css      # Buttons, cards, forms, etc.
│   │
│   ├── js/
│   │   ├── header.js           # Nav scroll, mobile menu, search
│   │   ├── animations.js       # Reveal, accordion, counters, tabs
│   │   └── search.js           # Client-side menu search
│   │
│   ├── includes/
│   │   ├── _header.html        # Header partial (copy into pages)
│   │   ├── _footer.html        # Footer partial (copy into pages)
│   │   └── _page-template.html # Master page template
│   │
│   └── images/
│       └── og/                 # Open Graph images
│
├── Images/                     # All food/menu images (83 .avif files)
│
└── favicon/                    # All favicon variants
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Color | `#C8102E` (Deep Red) |
| Secondary | `#F5A623` (Warm Amber) |
| Accent | `#4A90A4` (Teal) |
| Font Display | Playfair Display |
| Font Heading | Outfit |
| Font Body | Inter |

### Breakpoints
| Name | Width |
|------|-------|
| Mobile S | 320px |
| Mobile M | 375px |
| Mobile L | 425px |
| Tablet | 768px |
| Laptop | 992px |
| Desktop | 1200px |
| Wide | 1600px |

---

## 🚀 GitHub Pages Deployment

This site uses clean URL structure compatible with GitHub Pages:
- All pages use `folder/index.html` pattern
- No build step required — pure HTML/CSS/JS
- Fully static, no server-side dependencies

### Deploy Steps
1. Push to `main` branch
2. Go to Repository Settings → Pages
3. Set source to `main` branch, root `/`
4. Your site will be live at your configured domain

### Custom Domain Setup
1. Add `CNAME` file to repository root containing: `mellowmushroommenuwithprices.us`
2. Configure your DNS with your domain registrar:
   - Add A records pointing to GitHub Pages IPs
   - Add CNAME for `www` pointing to `<username>.github.io`

---

## 📋 Development Roadmap

| Prompt | Content |
|--------|---------|
| ✅ Prompt 1 | Project foundation, CSS architecture, header/footer, JS, SEO |
| ⏳ Prompt 2 | Homepage |
| ⏳ Prompt 3 | Menu pages (Pizza, Calzones, Appetizers, Salads, Desserts, Drinks) |
| ⏳ Prompt 4 | About, Contact, FAQ, Locations, Privacy Policy, Disclaimer |

---

## ⚡ Performance Targets

- Lighthouse Score: 95+
- CLS: < 0.05
- LCP: < 2.5s
- FID: < 100ms

### Optimization Used
- Native `loading="lazy"` on images
- `decoding="async"` on images
- `defer` on all scripts
- CSS `@import` chain (single HTTP request after caching)
- `IntersectionObserver` for animations (no scroll jank)
- AVIF image format (smallest file size)
- Google Fonts with `display=swap`

---

## 📞 Legal

This website is independently operated. For corrections or takedown requests, use the contact page.
