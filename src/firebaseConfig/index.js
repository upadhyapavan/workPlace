// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkDYjDkuLLeSUaMnUW_oSKSWEyplPAgqw",
  authDomain: "work-place-c2774.firebaseapp.com",
  projectId: "work-place-c2774",
  storageBucket: "work-place-c2774.appspot.com",
  messagingSenderId: "266657077204",
  appId: "1:266657077204:web:790db9f8eafb664a612841",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
