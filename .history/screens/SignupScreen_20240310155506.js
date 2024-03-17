import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isAuthencicating, setIsAuthenticating] = useState(false);
  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    await createUser(email, password);
    console.log("Creating successfull");
    setIsAuthenticating(false);
  }
  console.log("Processing 1...");
  if (isAuthencicating) {
    <LoadingOverlay message="Creating user..." />;
  }
  console.log("Processing 2...");
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
