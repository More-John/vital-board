// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmuAMklRty6voyAVmmJKvHpDqmrQZHJCA",
  authDomain: "vital-board.firebaseapp.com",
  projectId: "vital-board",
  storageBucket: "vital-board.firebasestorage.app",
  messagingSenderId: "574983141448",
  appId: "1:574983141448:web:a455e5b692cee3ab75007d",
  measurementId: "G-YBYWTVKTNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();