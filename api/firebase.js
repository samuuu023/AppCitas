// API/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ⚙️ Configuración de Firebase (de tu consola de Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyAP5ZGT3C952aVWX4qzOiq8cv7iAc9XyAU",
  authDomain: "appcitas-ad8c2.firebaseapp.com",
  projectId: "appcitas-ad8c2",
  storageBucket: "appcitas-ad8c2.appspot.com", // ⚠️ aquí estaba mal en tu versión
  messagingSenderId: "505584388533",
  appId: "1:505584388533:web:a00efbb19399708051f1fc",
};

// 🚀 Inicializar Firebase solo una vez
const app = initializeApp(firebaseConfig);

// 🔐 Servicios que se exportan
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
