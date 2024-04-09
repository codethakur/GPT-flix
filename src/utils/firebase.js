// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuXssi6219aUGsldMph416Dj1DhDPY7QM",
  authDomain: "gptflix-6be33.firebaseapp.com",
  projectId: "gptflix-6be33",
  storageBucket: "gptflix-6be33.appspot.com",
  messagingSenderId: "1073131236151",
  appId: "1:1073131236151:web:3fc5a155311e7b7275c8b2",
  measurementId: "G-JDW7KLT86R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();