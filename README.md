# 🛍️ ShopApp — React Mobile UI

A pixel-perfect mobile-app-style React JS project for the intern/fresher qualifier task.

## Demo (Vercel)
https://shop-app-ui-delta.vercel.app/onboarding

## 📱 Features

- **Onboarding** — 3-slide animated intro with skip functionality
- **Login / Register** — Form validation, password toggle, social auth buttons
- **Home** — Category filters, search, banner, product grid with wishlist toggle
- **Product Detail** — Color & size picker, quantity control, add to cart
- **Cart** — Live quantity updates, order summary, checkout flow
- **Profile** — User stats, settings menu, sign out

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🛠️ Tech Stack

- **React 18** with React Router v6
- **CSS Modules** — scoped, clean styles per component
- **Google Fonts** — Poppins for consistent typography
- No external UI libraries — all custom components

## 📁 Project Structure

```
src/
├── pages/
│   ├── Onboarding.js / .css
│   ├── Login.js
│   ├── Register.js
│   ├── Home.js / .css
│   ├── ProductDetail.js / .css
│   ├── Cart.js / .css
│   ├── Profile.js / .css
│   └── Auth.css          (shared login/register styles)
├── components/
│   └── BottomNav.js / .css
├── App.js                 (route definitions)
├── index.js
└── index.css              (phone frame & global reset)
```

## 🌐 Deployment (Vercel)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Framework preset: **Create React App**
4. Click Deploy — done!

Or use Netlify:
1. `npm run build`
2. Drag the `build/` folder to [netlify.com/drop](https://netlify.com/drop)

## 📐 Design Decisions

- Phone frame (390×844px) centered on the webpage with a gradient background
- On mobile screens (< 480px), the frame goes full-screen
- All navigation is client-side via React Router (no page reloads)
- Smooth animations: floating product images, button press feedback
- Consistent design token: `#667eea → #764ba2` purple gradient as brand color
