import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3cwplkl8S_Mtm3wcC7imuCODhz0ezgxM",
  authDomain: "expensemanagementapp-9defb.firebaseapp.com",
  databaseURL:
    "https://expensemanagementapp-9defb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "expensemanagementapp-9defb",
  storageBucket: "expensemanagementapp-9defb.appspot.com",
  messagingSenderId: "957026776064",
  appId: "1:957026776064:web:eeb9a134adfbc4329154e5",
  measurementId: "G-GK0BP1H3Y6",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
