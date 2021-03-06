import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCRzG47FUZkmNYbLyb8CZg8oK8byKxSdvc",
    authDomain: "clone-058.firebaseapp.com",
    projectId: "clone-058",
    storageBucket: "clone-058.appspot.com",
    messagingSenderId: "728588007661",
    appId: "1:728588007661:web:1b653564f3dd4b56a374e4"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();

  export {db, auth};


