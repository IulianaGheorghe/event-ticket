import { useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate } from "react-router-dom";

const CallbackPage = () => {
  const { isLoading, isAuthenticated, error } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (isAuthenticated) {
      const redirectPath = localStorage.getItem("redirectPath");
      if (redirectPath) {
        localStorage.removeItem("redirectPath");
        navigate(redirectPath, { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) {
    return <div>Processing login...</div>;
  }

  if (error) {
    return <div>Login failed: {error.message}</div>;
  }

  if (!isAuthenticated) {
    return (
      <div>
        Login was not completed.{" "}
        <button onClick={() => navigate("/login", { replace: true })}>
          Try again
        </button>
      </div>
    );
  }

  return <div>Completing login...</div>;
};

export default CallbackPage;
