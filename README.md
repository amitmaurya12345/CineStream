# 🍿 Cine-Stream — Next-Gen OTT Movie Discovery Platform

[![Live Demo](https://img.shields.io/badge/Netlify-Live_Demo-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://cine-stream-cs.netlify.app/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Gemini AI](https://img.shields.io/badge/Google_Gemini-2.5_Flash-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)](https://ai.google.dev/)

**Cine-Stream** is a modern, OTT-inspired web application that enables users to discover movies in real-time, get AI-powered recommendations based on their mood, and manage a persistent watchlist. Built with a focus on web performance, custom React hooks, zero-inline CSS, and complete cross-device responsiveness.

🚀 **Live Application:** [https://cine-stream-cs.netlify.app/](https://cine-stream-cs.netlify.app/)

---

## ✨ Key Features

* **🤖 AI Mood Matcher:** Integrated with Google's **Gemini 2.5 Flash API** to parse natural language user prompts (e.g., *"Cozy sci-fi for a rainy night"*) into precise movie recommendations.
* **🔍 Throttled Search Processing:** Custom `useDebounce` hook delays API network calls by 500ms while typing, preventing rate-limiting and optimizing server usage.
* **♾️ Infinite Scrolling Grid:** Native Web `IntersectionObserver` API implementation (`useInfiniteScroll`) providing continuous pagination without manual button clicks.
* **❤️ Persistent Watchlist:** Synchronized `localStorage` state management (`useFavorites`) retaining favorited movies across browser reloads with active navbar counter badges.
* **🎨 OTT-Inspired Glassmorphism UI:** Built with 100% external modular CSS (`App.css`), featuring fixed glassmorphism headers, 3D card elevation effects, HD badges, and interactive play overlays.
* **📱 100% Cross-Device Responsive:** Enforced viewport rules (`box-sizing`, `overflow-x: hidden`) ensuring zero horizontal scrolling on screen widths down to 320px.

---

## 🛠️ Tech Stack & Libraries

| Category | Technology Used |
| :--- | :--- |
| **Frontend Framework** | React.js (Vite) |
| **State Management** | React Hooks (`useState`, `useEffect`, `useCallback`, `useRef`) |
| **Custom Hooks** | `useDebounce`, `useInfiniteScroll`, `useFavorites` |
| **Styling Architecture** | Pure Modular CSS3 (Design Tokens, Flexbox, CSS Grid, Glassmorphism) |
| **API Integration** | OMDb REST API (Movie Data) & Google Gemini AI API (Mood Search) |
| **HTTP Client** | Axios |
| **Icon Library** | Lucide React |
| **Hosting Platform** | Netlify |

---

## 📁 Project Directory Structure

```text
cine-stream/
├── public/
├── src/
│   ├── components/
│   │   ├── MoodMatcher.jsx     # Gemini AI natural language input form
│   │   ├── MovieCard.jsx       # Individual movie card with hover micro-interactions
│   │   ├── Navbar.jsx          # Fixed glassmorphism top header with active tab state
│   │   └── SearchBar.jsx       # Throttled live search input field
│   ├── hooks/
│   │   ├── useDebounce.js         # Input state throttling hook (500ms)
│   │   ├── useFavorites.js        # LocalStorage synchronization hook
│   │   └── useInfiniteScroll.js   # IntersectionObserver sentinel hook
│   ├── pages/
│   │   ├── Favorites.jsx       # Watchlist collection page
│   │   └── Home.jsx            # Main catalog, search, & infinite scroll feed
│   ├── services/
│   │   ├── gemini.js           # Google Gen AI SDK initialization & prompt pipeline
│   │   └── omdb.js             # OMDb API service wrapper & response normalization
│   ├── styles/
│   │   └── App.css             # Centralized design tokens & responsive rules
│   ├── App.jsx                 # App root & tab router
│   └── main.jsx                # React DOM render entry point
├── .env.example                # Template for environment key configuration
├── .gitignore                  # Security rules for Git version control
├── package.json                # Project dependencies and build scripts
└── README.md                   # Technical documentation
