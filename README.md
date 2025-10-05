---

# 🌐 Deployed Link  
👉 [**Click here to visit the live site**](https://digital-choreography-dotenv.vercel.app/)

---

# 🧑‍💻 Team Information

**Team Name:** doTenv

| Name                  | Role          | Github                     |
|-----------------------|---------------|----------------------------|
| Amaresh Swain         | Team Leader   | [amr7503](https://github.com/amr7503)   |
| Disha Tripathy        | Member        | [tripathy739disha](https://github.com/tripathy739disha) |
| Abhinab Sharma        | Member        | [Abhinab04](https://github.com/Abhinab04) |
| G Jaganmohan Achary   | Member        | [incertyo](https://github.com/incertyo)   |

>  *Submission for IIT BBSR WEB  HACKATHON ROUND 01*



# 💸 Digital Choreography — Next-Gen FinTech Landing Page

A **cutting-edge, high-performance landing page** built with **Next.js 15**, featuring advanced animations, dark-mode aesthetics, and innovative UI/UX components designed for modern FinTech brands.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=for-the-badge&logo=framer)

---

## 🧭 Table of Contents
- [🚀 Features](#-features)
- [🎨 Design System](#-design-system)
- [🛠️ Technologies Used](#-technologies-used)
- [📱 Responsive Design](#-responsive-design)
- [⚡ Performance](#-performance)
- [🧑‍💻 Getting Started](#-getting-started)
- [📂 Project Structure](#-project-structure)
- [🎨 Customization](#-customization)
- [🐛 Known Issues](#-known-issues)
- [🔮 Future Enhancements](#-future-enhancements)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)

---

## 🚀 Features

### 🎨 Core Visual Components
1. **Animated Preloader** — Stylish gradient loader with smooth fade transitions  
2. **Dynamic Hero Section** — Immersive fullscreen header with floating widgets  
3. **Infinite Client Ticker** — Auto-scrolling horizontal logo carousel  
4. **Feature Cards Grid** — Glowing outlines, hover lift, staggered animations  
5. **Service Tabs** — Smooth transitions with accessible navigation  
6. **Product Carousel** — Swipeable, animated product views  
7. **Data Visualization** — Interactive bar charts with filters  
8. **Parallax Section** — Subtle scroll depth effect

### 🧠 Advanced Interactive Features
9. Scroll Progress Indicator  
10. Animated Statistics Counter  
11. Testimonials Carousel  
12. Bento Grid Layout  
13. Pricing Section with toggle  
14. Newsletter Signup  
15. Comprehensive Footer  
16. Particle Background  
17. Magnetic Cursor Effect

### ✨ Animation & Interaction Effects
18. Scroll-triggered animations  
19. Button ripple effects  
20. Micro-interactions  
21. Floating widgets  
22. Glassmorphism UI

---

## 🎨 Design System

### Color Palette
- **Background**: Deep Charcoal `oklch(0.145 0 0)`  
- **Primary Accent**: Electric Blue  
- **Secondary Accent**: Neon Purple  
- **Tertiary Accent**: Deep Teal  
- **Text**: High contrast white `oklch(0.985 0 0)`

### Typography
- **Font Family**: Geist Sans (primary), Geist Mono (code)  
- **Headings**: Bold (4xl–6xl)  
- **Body**: Clean and legible (base–lg)  
- **Line Height**: 1.4–1.6

### Layout & Spacing
- **Max Width**: 1280px (7xl)  
- **Section Padding**: 80px  
- **Grid Gaps**: 16–32px  
- **Border Radius**: Large (0.625rem)

---

## 🛠️ Technologies Used

### ⚡ Core Framework
- **Next.js 15** — App Router, Image Optimization  
- **React 19** — UI library  
- **TypeScript** — Type safety

### 🧭 Styling & Animation
- **Tailwind CSS v4**  
- **CSS Custom Properties**  
- **Framer Motion**

### 🧩 UI Components
- **shadcn/ui**  
- **Radix UI**  
- **Lucide Icons**

### 📊 Data Visualization
- **Recharts**  
- **Custom Canvas** (for particle effects)

### 🧠 Performance
- Code splitting  
- Lazy loading  
- Purged CSS  
- GPU transforms  
- Debounced scroll listeners  
- Intersection Observer  
- Optimized canvas rendering

---

## 📱 Responsive Design

| Breakpoint      | Device   |
|------------------|---------|
| `< 768px`       | Mobile  |
| `768px–1024px`  | Tablet  |
| `> 1024px`     | Desktop |

**Mobile Optimizations:**  
- Touch-friendly interactions  
- Simplified animations  
- Optimized images  
- Reduced particle count  
- Stacked layouts

---

## ⚡ Performance

### Techniques
1. Code splitting with dynamic imports  
2. Lazy loading of images/components  
3. CSS optimization (purging unused styles)  
4. GPU-accelerated animations  
5. Debounced scroll  
6. Intersection Observer  
7. Canvas optimization with `requestAnimationFrame`

### Metrics
- **First Contentful Paint:** < 1.5s  
- **Time to Interactive:** < 3.5s  
- **CLS:** < 0.1  
- **Lighthouse Score:** 95+

---

## 🧑‍💻 Getting Started

### 📌 Prerequisites
- Node.js 18+  
- npm / yarn / pnpm

### 🧰 Installation

```bash
# Clone the repository
git clone https://github.com/amr7503/digital-choreography-app

# Navigate to project
cd digital-choreography-app

# Install dependencies
npm install

# Run development server
npm run dev
````

Visit [http://localhost:3000](http://localhost:3000) to view the app.

### 🏗️ Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

---

## 📂 Project Structure

```
digital-choreography/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/
│   ├── preloader.tsx
│   ├── navigation.tsx
│   ├── hero-section.tsx
│   ├── client-ticker.tsx
│   ├── feature-cards.tsx
│   ├── service-tabs.tsx
│   ├── product-carousel.tsx
│   ├── data-visualization.tsx
│   ├── parallax-section.tsx
│   ├── scroll-progress.tsx
│   ├── animated-stats.tsx
│   ├── testimonials-carousel.tsx
│   ├── bento-grid.tsx
│   ├── pricing-section.tsx
│   ├── newsletter-section.tsx
│   ├── footer.tsx
│   ├── particle-background.tsx
│   └── magnetic-cursor.tsx
├── public/
│   └── images/
└── README.md
```

---

## 🎨 Customization

### 🧭 Changing Colors

Edit `app/globals.css`:

```css
.dark {
  --chart-1: oklch(0.488 0.243 264.376); /* Blue */
  --chart-2: oklch(0.696 0.17 162.48);   /* Teal */
}
```

### ✨ Modifying Animations

```css
@keyframes float {
  /* Customize floating animation */
}
```

---

## 🐛 Known Issues

* Magnetic cursor is desktop-only (intentional)
* Particle background disabled on mobile for performance
* Some animations are reduced on low-end devices

---

## 🔮 Future Enhancements

* [ ] 🌗 Dark/Light mode toggle
* [ ] 📝 Blog section
* [ ] 📚 Case studies page
* [ ] 🧑‍💼 Admin dashboard
* [ ] 🌐 Multi-language support
* [ ] 🧠 CMS integration
* [ ] 🧪 A/B testing
* [ ] 📊 Analytics dashboard

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🙏 Acknowledgments

* Modern FinTech design inspirations
* [shadcn/ui](https://ui.shadcn.com) for UI components
* [Vercel](https://vercel.com) for hosting
* [Framer Motion](https://www.framer.com/motion/) for animations

---

**Built with ❤️ using Next.js and modern web technologies**

