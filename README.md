# Catholic Disney (CatholicDisney.com)
> **Where Wonder Meets Faith – Pilgrimage, Storytelling, and Catholic Family Life in the World of Disney**

[![Status: Active](https://img.shields.io/badge/Status-Active-gold.svg)](#)
[![Theme: Marian Blue & Cathedral Gold](https://img.shields.io/badge/Theme-Marian%20Blue%20%26%20Cathedral%20Gold-2a64b2.svg)](#)
[![Zero Dependency](https://img.shields.io/badge/Stack-Vanilla%20HTML%20%2F%20CSS%20%2F%20JS-success.svg)](#)

---

## 🏰 About The Project

**Catholic Disney** is a cultural, theological, and travel platform exploring the intersection between the **Catholic sacramental imagination, classic family storytelling, and theme park pilgrimages**. 

Built with a particular focus on **Walt Disney World (Orlando, Florida)** and global Disney destinations, the platform serves Catholic families, homeschoolers, pilgrims, and Disney enthusiasts.

---

## ✨ Core Pillars & Features

### 1. 🏰 The Florida & WDW Catholic Pilgrimage Hub
* **The Basilica Spotlight:** Comprehensive guide to the **Basilica of the National Shrine of Mary, Queen of the Universe** in Orlando—the historic theme-park tourist basilica—with Mass schedules, Confession windows, outdoor Rosary gardens, and museum info.
* **Interactive Mass & Confession Finder:** Real-time filterable directory of parishes near Disney World (*Corpus Christi Celebration*, *St. Faustina Clermont*, *Holy Family Dr. Phillips*, *St. James Cathedral*, and Disneyland's *St. Boniface*).
* **Catholic Secrets & Stained Glass in the Parks:** Interactive scavenger hunt uncovering the 14k gold Byzantine mosaic craftsmanship of Cinderella Castle, St. Mark's Campanile in Epcot Italy, St. George & the Dragon in Epcot Germany, and Leviticus 25:10 on the Liberty Bell.
* **Tested Quiet Prayer Nooks:** Shady, quiet locations in all 4 parks for praying a Rosary, reading the Liturgy of the Hours, or helping resting children recharge.
* **Catholic Park Survival Guide:** Lenten fasting in the parks, saying grace before Disney dining, and St. Christopher travel prayers.

### 2. 📖 Virtue in the Vault (Theological Movie Repository)
* Deep, orthodox theological analyses of Disney classics (*The Hunchback of Notre Dame*, *Pinocchio*, *Beauty and the Beast*, *The Lion King*, *Encanto*, *Frozen*).
* Printable / exportable **Family Movie Night Discussion Guides** with direct Catechism and Scripture cross-references.

### 3. 👨‍👩‍👧‍👦 Catholic Family Liturgical Living
* Year-round feast day pairings connecting Catholic saints (*St. Francis, St. Nicholas, All Saints/Souls, Epiphany, St. Joan of Arc, St. Joseph*) with Disney stories, family crafts, and feast day recipes.
* **The Catholic Parent Discernment Framework** evaluating storytelling through Truth (*Veritas*), Goodness (*Bonum*), Beauty (*Pulchrum*), and Family Unity (*Communio*).

### 4. 🗺️ Custom Catholic Disney Pilgrimage Planner
* Interactive generator producing customized 3-day, 5-day, or 7-day vacation itineraries integrating Sunday Mass, park rope drops, quiet prayer breaks, and nightly family reflections.
* One-click print-ready formatting.

### 5. 🎨 The Catholic Animation Showcase & Florida Fellowship
* Highlighting faithful animators, illustrators, and independent studios striving to bring Disney-caliber craftsmanship to saint epics and Catholic children's books.
* Local Florida community meetup board for Central Florida Catholic Disney families.

---

## 🚀 Getting Started

This repository is built with standard web technologies (HTML5, modern Vanilla CSS, and ES6 Modules) with zero external build dependencies.

### Local Development
To run locally, start any static HTTP server:

#### Using Python (Built-in)
```bash
python -m http.server 8080
```
Open [http://localhost:8080](http://localhost:8080) in your web browser.

#### Using Node (npx)
```bash
npx serve .
```

---

## 📁 Repository Structure

```
.
├── index.html                  # Main Single Page Application shell
├── css/
│   ├── design-system.css       # Marian blue & Cathedral gold design system
│   ├── components.css          # Cards, hero, Mass matrix, modals, print styles
│   └── animations.css          # Twinkling starlight background & animations
├── js/
│   ├── app.js                  # Main controller, state management, particle generator
│   ├── data/
│   │   ├── parishes-wdw.js     # Orlando/Anaheim Catholic parishes data
│   │   ├── park-secrets.js     # Catholic art & secrets in the parks
│   │   ├── prayer-nooks.js     # Quiet prayer spots in MK, Epcot, DHS, DAK
│   │   ├── virtue-vault.js     # Theological movie essays & discussion questions
│   │   ├── liturgical-pairings.js # Feast day + Disney movie pairings
│   │   └── creators.js         # Catholic creators & animation showcase
│   └── components/
│       ├── pilgrimage-hub.js   # Interactive Mass finder & park scavenger hunt
│       ├── virtue-hub.js       # Movie virtue filter & printable discussion guides
│       ├── liturgical-hub.js   # Liturgical calendar & parent discernment
│       ├── itinerary-planner.js# Custom Pilgrimage Vacation Generator
│       └── creators-hub.js     # Animation showcase & Orlando community bulletin
└── assets/
    └── images/                 # Custom visual assets (Hero, Basilica, Studio)
```

---

## ⚖️ Legal Disclaimer

*CatholicDisney.com is an independent Catholic community, cultural, and educational initiative created for Catholic fans, families, and pilgrims. It is not affiliated with, authorized, maintained, sponsored, or endorsed by The Walt Disney Company or any of its affiliates or subsidiaries. All Disney characters, parks, and related intellectual property remain the property of The Walt Disney Company.*

---

*Ad Majorem Dei Gloriam (For the Greater Glory of God)*
