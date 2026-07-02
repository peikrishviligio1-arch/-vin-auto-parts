import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPegjcFmgf0U0FsKnoDsw1VLaT1233fkc",
  authDomain: "vin-auto-parts.firebaseapp.com",
  projectId: "vin-auto-parts",
  storageBucket: "vin-auto-parts.firebasestorage.app",
  messagingSenderId: "945956056584",
  appId: "1:945956056584:web:1eda13c312243cdde8abbd",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
