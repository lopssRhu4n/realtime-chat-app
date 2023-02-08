export {};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAKWf3Ddok4-lHjSkwbUFy7gTB25ZJBxc",
  authDomain: "realtime-chat-app-bbcb4.firebaseapp.com",
  projectId: "realtime-chat-app-bbcb4",
  storageBucket: "realtime-chat-app-bbcb4.appspot.com",
  messagingSenderId: "780460699907",
  appId: "1:780460699907:web:b7cdc60b98d90af2ec7936",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
