// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbcTQsF7nUEhf5xa5N1OQJDE_Zi8TwtbM",
  authDomain: "walkthroughapp-a32ed.firebaseapp.com",
  databaseURL:
    "https://walkthroughapp-a32ed-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "walkthroughapp-a32ed",
  storageBucket: "walkthroughapp-a32ed.appspot.com",
  messagingSenderId: "53626140681",
  appId: "1:53626140681:web:f728174ef519f5b79660d8",
  measurementId: "G-6BM6DYRFK0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
