import { initializeApp } from "firebase/app";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBlW6ry0JjektqNcRBDMBVYQlogAvpcSZU",
  authDomain: "coffee-f7b05.firebaseapp.com",
  projectId: "coffee-f7b05",
  storageBucket: "coffee-f7b05.appspot.com",
  messagingSenderId: "790855759742",
  appId: "1:790855759742:web:12b445e91ce9f279e3652f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
