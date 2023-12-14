// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACBsnXZ5S4KwkL3BQMFr_MuObsbEUS1fI",
  authDomain: "netflixgpt-f8437.firebaseapp.com",
  projectId: "netflixgpt-f8437",
  storageBucket: "netflixgpt-f8437.appspot.com",
  messagingSenderId: "637868525952",
  appId: "1:637868525952:web:e387427b285672281c9965",
  measurementId: "G-MJCTWKJG4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();