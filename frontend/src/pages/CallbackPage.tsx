import { useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";

const CallbackPage = () => {
  const { isLoading, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (isAuthenticated) {
      const redirectPath = localStorage.getItem("redirectPath");
      if (redirectPath) {
        localStorage.removeItem("redirectPath");
        navigate(redirectPath);
      }
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) {
    <div>Processing Login...</div>;
  }
  return <div>Completing Login...</div>;
};

export default CallbackPage;
