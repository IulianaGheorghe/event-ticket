import { type ReactNode } from "react";
import { useAuth } from "react-oidc-context";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProperties {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProperties) => {
  const auth = useAuth();
  const location = useLocation();

  if (auth.isLoading) {
    return <div> Loading... </div>;
  }

  if (auth.error) {
    return (
      <div>
        Oops... {auth.error.source} caused {auth.error.message}
      </div>
    );
  }

  if (!auth.isAuthenticated) {
    localStorage.setItem(
      "redirectPath",
      globalThis.location.pathname + globalThis.location.search
    );
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
