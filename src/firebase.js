// Firebase core & services
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, addDoc, query, onSnapshot, where, serverTimestamp, orderBy } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// ✅ Firebase config (non-sensitive, but flagged by GitHub — still okay for public frontend)
const firebaseConfig = {
  apiKey: "AIzaSyBdgmL9etV_iPOjoKSwowQeQ08yncVfGJY",
  authDomain: "sample-firebase-ai-app-c84b5.firebaseapp.com",
  projectId: "sample-firebase-ai-app-c84b5",
  storageBucket: "sample-firebase-ai-app-c84b5.appspot.com",  // ✅ fixed `.app` to `.com`
  messagingSenderId: "549080639584",
  appId: "1:549080639584:web:d12bf45453a6ca0de6bb05"
};

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔐 Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 💾 Firestore DB
const db = getFirestore(app);

// 🗃️ Storage
const storage = getStorage(app);

// ✅ Export everything needed
export {
  auth, provider, signInWithPopup,
  db, collection, addDoc, query, onSnapshot,
  where, serverTimestamp, orderBy,
  storage, ref, uploadBytes, getDownloadURL
};
