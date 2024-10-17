// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDcyRS1GQzq2cgbDFDx2ErKcnaDiYCJX4",
  authDomain: "linkedin-clone-ea6f7.firebaseapp.com",
  projectId: "linkedin-clone-ea6f7",
  storageBucket: "linkedin-clone-ea6f7.appspot.com",
  messagingSenderId: "708568867839",
  appId: "1:708568867839:web:cdc1fa84a69858c564bdca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, auth, firestore, storage };
