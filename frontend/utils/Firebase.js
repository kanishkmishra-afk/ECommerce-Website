import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "onecart-8d6a8.firebaseapp.com",
  projectId: "onecart-8d6a8",
  storageBucket: "onecart-8d6a8.firebasestorage.app",
  messagingSenderId: "732031023564",
  appId: "1:732031023564:web:bdb6e50914e7e17a07c569"
};

console.log(import.meta.env.VITE_FIREBASE_APIKEY)

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}
