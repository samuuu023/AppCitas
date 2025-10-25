import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP5ZGT3C952aVWX4qzOiq8cv7iAc9XyAU",
  authDomain: "appcitas-ad8c2.firebaseapp.com",
  projectId: "appcitas-ad8c2",
  storageBucket: "appcitas-ad8c2.firebasestorage.app",
  messagingSenderId: "505584388533",
  appId: "1:505584388533:web:a00efbb19399708051f1fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Inicializar y exportar servicios
export const auth = getAuth(app);  // autenticar
export const db = getFirestore(app); // base de datos
export const storage = getStorage(app); // archivos
export { app };