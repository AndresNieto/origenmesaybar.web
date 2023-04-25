// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYa2bl17NCbY7mEstgmxQTjyq_ieLUM8Y",
  authDomain: "origenmesaybar.firebaseapp.com",
  projectId: "origenmesaybar",
  storageBucket: "origenmesaybar.appspot.com",
  messagingSenderId: "155179685463",
  appId: "1:155179685463:web:a741c984a63331df167512",
  measurementId: "G-7N21Y0LGRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);