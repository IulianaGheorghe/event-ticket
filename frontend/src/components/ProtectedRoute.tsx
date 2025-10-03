import { type ReactNode } from "react";
import { useAuth } from "react-oidc-context";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProperties {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProperties) => {
  const { isLoading, error, isAuthenticated } = useAuth();

  if (isLoading) {
    return <div> Loading... </div>;
  }

  if (error) {
    return (
      <div>
        Oops... {error.source} caused {error.message}
      </div>
    );
  }

  if (!isAuthenticated) {
    localStorage.setItem(
      "redirectPath",
      globalThis.location.pathname + globalThis.location.search
    );
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
