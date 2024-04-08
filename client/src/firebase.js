// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-30d15.firebaseapp.com",
  projectId: "mern-estate-30d15",
  storageBucket: "mern-estate-30d15.appspot.com",
  messagingSenderId: "951593962672",
  appId: "1:951593962672:web:9a75ccfad393f76801ff75",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);