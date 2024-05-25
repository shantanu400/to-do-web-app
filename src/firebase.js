import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCmHDx9i4kXvkAowmetMd7GdLa7GhPr75Y",
  authDomain: "todolist-37f81.firebaseapp.com",
  projectId: "todolist-37f81",
  storageBucket: "todolist-37f81.appspot.com",
  messagingSenderId: "314246990930",
  appId: "1:314246990930:web:70b811eddca07b4dcfa38b",
  measurementId: "G-EHFZ9NTQ1M",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
