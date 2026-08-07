# Cine-Stream: Internship Sprint & Learning Log

## 1. Internship Task Objectives & Architecture

During Sprint-08, I was tasked with building **Cine-Stream**, a responsive OTT-style web application. The primary goal was to implement real-time movie search, custom state persistence, performance throttling, and AI-assisted movie recommendations while adhering to clean code standards.

### Key Technical Implementations:
* **API Abstraction Layer:** Integrated OMDb API using an Axios service wrapper (`tmdb.js`) to handle network calls and normalize missing dataset fields (e.g., broken poster URLs).
* **Performance Throttling (Debouncing):** Developed a custom `useDebounce` hook to restrict rapid API requests during user typing, reducing unnecessary network calls.
* **Continuous Scroll (Infinite Scrolling):** Used the native Web `IntersectionObserver` API inside a custom hook (`useInfiniteScroll`) to dynamically append pagination data as the user scrolls.
* **Persistent Favorites Management:** Implemented `useFavorites` using `localStorage` to synchronize watchlist state across browser sessions and update the navbar badge in real time.
* **Clean CSS & Design System:** Refactored early inline CSS into a centralized, variable-driven external stylesheet (`App.css`) using modern design tokens and Glassmorphism styling.

---

## 2. Problem-Solving & Internship Learning Log

As part of the development and testing process, I independently identified several UI/UX bottlenecks, build errors, and architectural code smells, resolving them through structured debugging:

### Debugging & Resolution Highlights:

#### 1. Responsive Layout & Control Alignment
* **Issue:** Input fields and navigation buttons lacked consistent visual alignment across screen sizes.
* **Resolution:** Wrapped hero search components inside a centered container (`maxWidth: 560px`) and applied flexbox auto-margins (`margin-left: auto`) to push navigation tabs cleanly to the header boundary.

#### 2. Interactive UI Polish (Hover Effects)
* **Issue:** Static movie cards provided minimal feedback during user interaction.
* **Resolution:** Enhanced `MovieCard.jsx` with card lift animations (`translateY(-8px)`), a glowing red box-shadow, an HD badge indicator, poster image scaling, and a hover play overlay.

#### 3. Styling Refactoring (Eliminating Inline CSS)
* **Issue:** Prototype code contained mixed inline style objects, reducing component maintainability.
* **Resolution:** Extracted all inline styles into `src/styles/App.css` using CSS variables (`:root`), ensuring a clean separation of concerns.

#### 4. Vite Module Resolution Fixes
* **Issue:** Vite dev server failed to build due to stale `./index.css` references and broken relative style paths.
* **Resolution:** Removed unused CSS imports from `src/main.jsx` and updated `src/App.jsx` to correctly import `./styles/App.css`.

#### 5. Security & Secret Management
* **Issue:** Preventing secret API keys (`.env`) from being exposed in public version control.
* **Resolution:** Implemented strict `.gitignore` rules covering `.env*` files, build outputs (`dist/`), and `node_modules/`. Managed production keys using Vite client-side variables (`VITE_OMDB_API_KEY`, `VITE_GEMINI_API_KEY`).

---

## 3. AI Pair-Programming & Collaboration Log

To accelerate my workflow and learn best practices during this internship sprint, I utilized AI tools as a pair-programmer for boilerplate generation, prompt design, and code optimization.

### Prompt Usage Log:

* **Axios Normalization Prompt:**
  > *"Refactor the Axios response handling in `tmdb.js` to normalize missing fields like `Poster: 'N/A'` to `null` so the UI can render fallback placeholders smoothly."*

* **Custom Debounce Hook Prompt:**
  > *"Help me construct a reusable React custom hook `useDebounce(value, delay)` with proper `useEffect` cleanup logic to handle rapid input state changes."*

* **Gemini Prompt Engineering:**
  > *"Design a strict system prompt for Gemini 2.5 Flash to accept natural language user mood prompts and return ONLY a plain text movie title string."*

* **Refactoring Styles Prompt:**
  > *"Convert inline style objects from `MovieCard.jsx` and `Navbar.jsx` into structured CSS classes for `src/styles/App.css`."*
