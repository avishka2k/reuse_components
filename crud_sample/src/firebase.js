import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjV7qSvLog5bUjbZVVcFB-8FO6U_7DaFo",
  authDomain: "reuse-15bef.firebaseapp.com",
  projectId: "reuse-15bef",
  storageBucket: "reuse-15bef.appspot.com",
  messagingSenderId: "998043786050",
  appId: "1:998043786050:web:b4a6b77674bf02aadcc6db"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export {auth}
export const db = getFirestore(app);
