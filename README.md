
-----



# Four Seasons Magazine - Deutschland

**A dynamic, multi-lingual, and fully responsive website for Four Seasons Magazine, built with React, Tailwind CSS, and a custom internationalization (i18n) solution.**



## 🚀 Live Demo & Preview

This project is a modern single-page application (SPA) designed to serve the German market, and international visitors. It features a clean, professional design, smooth page transitions, and seamless language switching.

<p align="center">
  <video src="https://github.com/user-attachments/assets/b17c2439-88fd-4f52-9bb4-25cbd3fef782"
         width="600"
         controls
         poster="assets/demo-cover.jpg"
         style="border-radius:12px; box-shadow:0 0 12px rgba(0,0,0,0.3);">
      Your browser does not support the video tag.
  </video>
</p>

-----

## ✨ Key Features & Highlights

This project demonstrates a range of modern web development practices in a clean, high-performance package.

  * **Multi-Lingual (i18n) Support:**

      * **Custom `useI18n` Hook:** A lightweight, custom-built internationalization hook (`i18n.js`) that manages translations without external libraries.
      * **Seamless Switching:** Instantly change the language between German (`de`) and English (`en`).
      * **Persistent State:** Language preference is saved in `localStorage` and reflected in the URL parameters (`?lang=de`) for shareable links.
      * **Fallback Logic:** Automatically falls back to English if a translation key is missing in the current language.

  * **Dynamic Single-Page Application (SPA):**

      * **Custom Router:** A smooth, fast SPA experience simulated using React state (`useState`) and `useCallback` for navigation.
      * **Loading Overlay:** A clean loading animation provides visual feedback during page transitions.
      * **Scroll-to-Top:** Automatically scrolls to the top of the page on navigation.

  * **Modern & Interactive UI:**

      * **Fully Responsive:** A mobile-first design that looks stunning on all devices, built with **Tailwind CSS**.
      * **Shadcn/UI Components:** Utilizes a modern and accessible component library for elements like `Button`, `Card`, and `Separator`.
      * **Lucide Icons:** A comprehensive and clean icon set used throughout the application.
      * **Animated Counters:** Numbers animate on scroll (using `IntersectionObserver`) for a dynamic "stats" section.
      * **3D Book Component:** Features an interactive 3D book on the homepage (via the `<Book />` component).

  * **Performance & Optimization:**

      * **Memoization:** Leverages `useMemo` and `useCallback` extensively to prevent unnecessary re-renders of components like the navigation bar, service lists, and price lists.
      * **Optimized Handlers:** Event handlers and state-derived data are memoized for a snappy user experience.
      * **Efficient Animations:** Animations are triggered only when elements enter the viewport, saving resources.

-----

## 🔧 Tech Stack

This project is built with a modern, minimalist, and powerful set of technologies.

  * **Core:** React 18, Vite
  * **Styling:** Tailwind CSS
  * **Components:** Shadcn/UI
  * **Icons:** Lucide React
  * **Language:** JavaScript (ES6+) & JSX

-----

## 🚦 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You must have [Node.js](https://nodejs.org/) (v18 or later) and `npm` or `yarn` installed on your machine.

### Installation & Launch

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/four-seasons-website.git
    cd four-seasons-website
    ```

2.  **Install dependencies:**

    ```sh
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**

    ```sh
    npm run dev
    # or
    yarn dev
    ```

4.  **Open in your browser:**
    Navigate to `http://localhost:5173` (or the port specified in your terminal).

-----

## 📂 Project Structure

The project structure is organized for clarity, scalability, and easy maintenance.

```
/
├── public/                 # Static assets (images, fonts)
└── src/
    ├── components/         # Reusable React components (Book.jsx)
    │   └── ui/             # Shadcn/UI components (Button.jsx, Card.jsx)
    ├── App.jsx             # Main application component, router, and page layouts
    ├── i18n.js             # Custom i18n hook and translation data
    ├── main.jsx            # React app entry point
    ├── App.css             # Global styles and Tailwind base layers
    └── index.css           # Tailwind directives
```

-----

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
