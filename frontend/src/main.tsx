import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import OrganizerLandingPage from "./pages/OrganizerLandingPage.tsx";
import DashboardCreateEventPage from "./pages/DashboardCreateEventPage.tsx";
import { AuthProvider } from "react-oidc-context";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import CallbackPage from "./pages/CallbackPage.tsx";
import NavBar from "./components/NavBar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Outlet />
      </>
    ),
    children: [
      // { path: "", element: <HomePage /> },
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
    ],
  },
  { path: "login", Component: LoginPage },
  { path: "/callback", Component: CallbackPage },
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
