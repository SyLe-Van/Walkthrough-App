import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useContext, useState } from "react";
import { login } from "../util/auth";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";
function LoginScreen() {
  const [isAuthencicating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);
  console.log("Login Screen:" + authCtx.token);
  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. Please, check your credentials or try again later."
      );
    }

    setIsAuthenticating(false);
  }

  if (isAuthencicating) {
    <LoadingOverlay message="Logging you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
