import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrganizerLandingPage from "./pages/OrganizerLandingPage.tsx";
import DashboardCreateEventPage from "./pages/DashboardCreateEventPage.tsx";
import { AuthProvider } from "react-oidc-context";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import LoginPage from "./pages/LoginPage.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/organizers",
    Component: OrganizerLandingPage,
  },
  {
    path: "/dashboard/create-event",
    element: (
      <ProtectedRoute>
        <DashboardCreateEventPage />
      </ProtectedRoute>
    ),
  },
]);

const oidcConfig = {
  authority: "http://localhost:9090/realms/event-ticket-platform",
  client_id: "event-ticket-platform-app",
  redirect_uri: "http://localhost:5173/callback",
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider {...oidcConfig}>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
