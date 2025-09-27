import { useEffect } from "react";
import { useAuth } from "react-oidc-context";

const LoginPage = () => {
  const { isLoading, isAuthenticated, signinRedirect } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      signinRedirect();
    }
  }, [isLoading, isAuthenticated, signinRedirect]);

  return <div>Redirecting to login...</div>;
};

export default LoginPage;
