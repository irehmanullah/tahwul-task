# Tahwul Dashboard

A responsive, pixel-perfect dashboard implementation for Tahwul's digital transformation platform, built with React, TypeScript, and Tailwind CSS.

## How to Run

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

## How It's Built

- **Framework**: React (Vite) + TypeScript for type safety and performance.
- **Styling**: Tailwind CSS for rapid, maintainable, and responsive styling. Configured with a custom theme matching Tahwul's brand colors.
- **Routing**: `react-router-dom` for client-side navigation between Dashboard and Strategy pages.
- **Components**: Built using a modular, Atomic Design-inspired approach:
  - `components/ui/`: Low-level primitives (though largely using Tailwind classes directly for this scale).
  - `components/layout/`: Global structure (Sidebar, Header).
  - `components/dashboard/` & `components/strategy/`: Feature-specific logic and UI.
- **Icons**: `lucide-react` for a clean, consistent icon set.
- **Charts**: `recharts` for responsive, composable visualizations.

## Assumptions

- **Data**: All data is mocked locally within components as requested (`JSON`-like structures).
- **Routing**: The "Perspectives" link in the sidebar routes to the detailed "Strategic Planning" view (`/strategy`) to demonstrate the second screen.
- **Design**: The sidebar is collapsible to optimize space on smaller screens, defaulting to expanded on desktop.
- **Screen Resolution**: Optimized primarily for 1440px as per requirements, but fully responsive down to mobile.

## Developer Roadmap & Improvements

As a professional developer, here are the key areas I would focus on to scale this project:

### 1. Architecture & Scalability

- **State Management**: While local state works for now, introducing **Zustand** or **Redux Toolkit** would handle global UI state (user preferences, notifications) more efficiently as the app grows.
- **Micro-Components**: Extract repeated patterns (badges, cards, headers) into a shared UI library (Storybook integration recommended).
- **Internationalization (i18n)**: Implement `react-i18next` for full Arabic (RTL) and English (LTR) language support, which is critical for regional compliance.

### 2. Performance Optimization

- **Code Splitting**: Implement lazy loading (`React.lazy`) for route components to reduce initial bundle size.
- **Memoization**: Use `useMemo` and `useCallback` for expensive calculations (e.g., filtering large datasets in the Evidence Table).
- **Virtualization**: Use `react-window` for the tables and lists if data exceeds 100+ rows to maintain 60fps scrolling.

### 3. Type Safety & Testing

- **Strict Typing**: Enforce stricter TS configs (`noImplicitAny`) and share types between frontend and backend via a monorepo or shared package.
- **Unit Testing**: Add **Vitest** for testing utility functions and complex component logic.
- **E2E Testing**: Integrate **Playwright** or **Cypress** to automate critical user flows (Login -> Dashboard -> Strategy View).

### 4. Developer Experience (DX)

- **Linting & Formatting**: Configure **Husky** pre-commit hooks to run ESLint and Prettier automatically.
- **CI/CD**: Set up GitHub Actions for automated testing and deployment to Vercel/Netlify on merge.

### 5. Security

- **Authentication**: Integrate secure auth providers (Auth0 / Clerk / NextAuth) properly.

### 6. Accessibility (a11y)

- **ARIA & Keyboard Nav**: Ensure all interactive elements are keyboard accessible and screen-reader friendly (critical for government/enterprise dashboards).
- **Color Contrast**: Verify all text/background combinations meet WCAG AA standards.
