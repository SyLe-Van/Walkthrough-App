import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useState } from "react";
import { login } from "../util/auth";
function LoginScreen() {
  const [isAuthencicating, setIsAuthenticating] = useState(false);
  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    await login(email, password);
    console.log("Login successfull");
    setIsAuthenticating(false);
  }

  if (isAuthencicating) {
    <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
