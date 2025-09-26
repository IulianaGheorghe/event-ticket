import { useEffect } from "react";
import { useAuth } from "react-oidc-context";

const LoginPage = () => {
  const auth = useAuth();

  useEffect(() => {
    if (auth.isLoading) {
      return;
    }
    if (!auth.isAuthenticated) {
      auth.signinRedirect();
    }
  });

  return <div>Redirecting to login...</div>;
};

export default LoginPage;
