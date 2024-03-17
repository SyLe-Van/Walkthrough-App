import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useState } from "react";
import { login } from "../util/auth";
import { Alert } from "react-native";
function LoginScreen() {
  const [isAuthencicating, setIsAuthenticating] = useState(false);
  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please, check your credentials or try again later."
      );
    }

    console.log("Login successfull");
    setIsAuthenticating(false);
  }

  if (isAuthencicating) {
    <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
