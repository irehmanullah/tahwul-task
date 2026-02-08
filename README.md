# Tahwul Dashboard

A responsive, pixel-perfect dashboard implementation for Tahwul's digital transformation platform, built with React, TypeScript, and Tailwind CSS.

## 🚀 How to Run

1.  **Install Dependencies**

    ```bash
    npm install
    ```

2.  **Start Development Server**

    ```bash
    npm run dev
    ```

    Open [http://localhost:5173](http://localhost:5173) in your browser.

3.  **Build for Production**
    ```bash
    npm run build
    ```

## 🛠 How It's Built

- **Framework**: React (Vite) + TypeScript for type safety and performance.
- **Styling**: Tailwind CSS for rapid, maintainable, and responsive styling. Configured with a custom theme matching Tahwul's brand colors.
- **Routing**: `react-router-dom` for client-side navigation between Dashboard and Strategy pages.
- **Components**: Built using a modular, Atomic Design-inspired approach:
  - `components/ui/`: Low-level primitives (though largely using Tailwind classes directly for this scale).
  - `components/layout/`: Global structure (Sidebar, Header).
  - `components/dashboard/` & `components/strategy/`: Feature-specific logic and UI.
- **Icons**: `lucide-react` for a clean, consistent icon set.
- **Charts**: `recharts` for responsive, composable visualizations.

## 🧠 Assumptions

- **Data**: All data is mocked locally within components as requested (`JSON`-like structures).
- **Routing**: The "Perspectives" link in the sidebar routes to the detailed "Strategic Planning" view (`/strategy`) to demonstrate the second screen.
- **Design**: The sidebar is collapsible to optimize space on smaller screens, defaulting to expanded on desktop.
- **Screen Resolution**: Optimized primarily for 1440px as per requirements, but fully responsive down to mobile.

## 📈 Improvements (With More Time)

- **State Management**: Introduce Context API or Zustand for global state (e.g., user profile, sidebar preference, notification counts).
- **Testing**: Add unit tests (Vitest) for utility functions and component rendering tests (React Testing Library).
- **Accessibility**: improving ARIA labels and keyboard navigation focus management.
- **Backend Integration**: Replace mock data with React Query hooks fetching from a real API.
- **Dynamic Charts**: Make charts fully interactive with real-time data filtering.
