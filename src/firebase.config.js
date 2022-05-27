import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4bav0Kvg8iRJ5wztY8pMMhGGxIEOvR3s",
  authDomain: "rent-your-makaan.firebaseapp.com",
  projectId: "rent-your-makaan",
  storageBucket: "rent-your-makaan.appspot.com",
  messagingSenderId: "949097041784",
  appId: "1:949097041784:web:05c936e173d4f79bd6c28d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();