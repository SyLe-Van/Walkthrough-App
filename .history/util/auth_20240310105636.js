import axios from "axios";
const API_KEY = "AIzaSyCbcTQsF7nUEhf5xa5N1OQJDE_Zi8TwtbM";
function createUser(email, password) {
  axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
