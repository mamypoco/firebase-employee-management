// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_API_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_API_ID,

  //   apiKey: "AIzaSyA_eiJPlK2l3mQKEDMfrkQLPA73MEv6TM4",
  //   authDomain: "employee-db-travis.firebaseapp.com",
  //   projectId: "employee-db-travis",
  //   storageBucket: "employee-db-travis.appspot.com",
  //   messagingSenderId: "847237479928",
  //   appId: "1:847237479928:web:eaaf7a11751625433dea0d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
//initialize db
export const db = getFirestore(app);
