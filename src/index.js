import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrywuFu67AH0zBOhOu9o2Pcsb8UJJMuYM",
  authDomain: "wisdomwings-cf89e.firebaseapp.com",
  projectId: "wisdomwings-cf89e",
  storageBucket: "wisdomwings-cf89e.appspot.com",
  messagingSenderId: "1013846186914",
  appId: "1:1013846186914:web:0c206b8fe566b2c1cff0fb",
  measurementId: "G-RD8X2V2P5Q"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { auth, signInWithEmailAndPassword,createUserWithEmailAndPassword};
