import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import OrganizerLandingPage from "./pages/OrganizerLandingPage.tsx";
import DashboardCreateEventPage from "./pages/DashboardCreateEventPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/organizers" element={<OrganizerLandingPage />} />
        <Route
          path="/dashboard/create-event"
          element={<DashboardCreateEventPage />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
