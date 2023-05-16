// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADH2rprjYn3ZDAP3sRIAAPlifZ8j3VLaQ",
  authDomain: "cozynesthome-c6168.firebaseapp.com",
  projectId: "cozynesthome-c6168",
  storageBucket: "cozynesthome-c6168.appspot.com",
  messagingSenderId: "758678296239",
  appId: "1:758678296239:web:e8ed47b5dd6075dc15e65a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);