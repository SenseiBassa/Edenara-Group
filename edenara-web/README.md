# Edenara Group — Corporate Website

Official corporate website for **Edenara Group** (RC 9000858), a diversified holding company operating at the intersection of biotechnology, capital management, agricultural innovation, and intelligent technology.

Built with **React 18 + Vite**.

---

## Portfolio Companies

| # | Company | Sector |
|---|---------|--------|
| 01 | Euphrora Medica | Healthcare · Biotechnology · MedTech |
| 02 | Gihora Capital | Finance · Wealth Management · Investment |
| 03 | Pishora Agritech | Agriculture · Agritech · Supply Chain |
| 04 | Nexhora Technologies | Technology · AI · Digital Infrastructure |

---

## Quick Start

### Prerequisites
- **Node.js** v18 or higher
- **npm** v9 or higher

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server (opens at http://localhost:3000)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Project Structure

```
edenara-web/
├── public/
│   └── favicon.svg              # Browser tab icon
├── src/
│   ├── assets/
│   │   └── logos.js             # Base64-encoded logo PNGs (all 5 logos)
│   ├── components/
│   │   ├── UI.jsx               # Shared atoms: Reveal, Tag, GoldBar, Btn, etc.
│   │   ├── Nav.jsx              # Fixed navigation bar + mobile menu
│   │   ├── Hero.jsx             # Full-screen hero section
│   │   ├── About.jsx            # About the Group + core pillars
│   │   ├── Companies.jsx        # Portfolio companies (logo grid + detail rows)
│   │   └── Sections.jsx         # Leadership, Vision, Features, CtaBand, Footer
│   ├── App.jsx                  # Root component — assembles all sections
│   ├── constants.js             # Brand tokens, company data, copy
│   ├── index.css                # Global CSS reset + animations
│   └── main.jsx                 # React DOM entry point
├── index.html                   # HTML entry point
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
├── package.json
└── README.md
```

---

## Brand Colours

| Token | Hex | Usage |
|-------|-----|-------|
| `navy` | `#08192E` | Primary dark background |
| `gold` | `#B8922A` | Primary accent |
| `goldL` | `#D4AA4A` | Light gold for text |
| `green` | `#1A5235` | CTA band background |
| `euphrora` | `#0A7CB4` | Euphrora Medica blue |
| `pishora` | `#3A7A1A` | Pishora Agritech green |
| `gihora` | `#B78521` | Gihora Capital gold |
| `nexhora` | `#087C97` | Nexhora Technologies teal |

---

## Customisation

### Updating company data
Edit `src/constants.js` — the `COMPANIES` array contains all copy, tags, and metadata.

### Updating logos
Replace the base64 strings in `src/assets/logos.js`. To generate new base64:
```bash
# In Node.js
const fs = require('fs');
const b64 = fs.readFileSync('logo.png').toString('base64');
console.log(`data:image/png;base64,${b64}`);
```

### Adding pages / routing
Install React Router:
```bash
npm install react-router-dom
```
Then wrap `<App>` in `<BrowserRouter>` inside `src/main.jsx`.

---

## Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the `dist/` folder to Netlify
```

### Static hosting (any CDN)
```bash
npm run build
# Upload contents of `dist/` to your server
```

---

## Contact

**Edenara Group**  
📧 hello@edenaragroup.com  
🌐 www.edenaragroup.com

*Cultivating Innovation. Shaping Sustainable Futures.*
