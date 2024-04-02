// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0S2GcRsIX3iyEDZiMhYYwEAbG_lK03yg",
  authDomain: "auth-6aaca.firebaseapp.com",
  projectId: "auth-6aaca",
  storageBucket: "auth-6aaca.appspot.com",
  messagingSenderId: "703049745927",
  appId: "1:703049745927:web:e8c71d3dab9755ec27cca2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
