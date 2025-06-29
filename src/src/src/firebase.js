// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEeRxfpVe5QKI29sHzwKW9GFI0n8EMlRs",
  authDomain: "passerkoothub.firebaseapp.com",
  projectId: "passerkoothub",
  storageBucket: "passerkoothub.firebasestorage.app",
  messagingSenderId: "60595994106",
  appId: "1:60595994106:web:2589680da5881430d5b843",
  measurementId: "G-G0SF6VCB11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
