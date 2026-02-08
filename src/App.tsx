
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { StrategyPage } from "./pages/StrategyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="strategy" element={<StrategyPage />} />
          <Route path="perspectives" element={<StrategyPage />} />
          <Route
            path="tasks"
            element={
              <div className="p-12 text-center text-gray-400">
                Tasks Module Placeholder
              </div>
            }
          />
          <Route
            path="documents"
            element={
              <div className="p-12 text-center text-gray-400">
                Documents Module Placeholder
              </div>
            }
          />
          <Route
            path="reports"
            element={
              <div className="p-12 text-center text-gray-400">
                Reports Module Placeholder
              </div>
            }
          />
          <Route
            path="users"
            element={
              <div className="p-12 text-center text-gray-400">
                Users Module Placeholder
              </div>
            }
          />
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
