import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged   } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBi7E9KrB2kloya10Z1bECmiY2yBmfPtjA",
  authDomain: "saylani-64c09.firebaseapp.com",
  projectId: "saylani-64c09",
  storageBucket: "saylani-64c09.appspot.com",
  messagingSenderId: "684473401926",
  appId: "1:684473401926:web:2fc2704674ddcf19f70047",
  measurementId: "G-6PGCMSLJEL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
}