import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DashboardCreateEventPage from "./pages/DashboardCreateEventPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DashboardCreateEventPage />
  </StrictMode>
);
