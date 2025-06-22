// lib/firebase.js
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// ✅ Ganti ini dengan config Firebase project kamu
const firebaseConfig = {
  apiKey: "AIzaSyBIoMfZYIQH1TYz05XbTFe17aAixiboIL4",
  authDomain: "sistemstokbarang.firebaseapp.com",
  projectId: "sistemstokbarang",
  storageBucket: "sistemstokbarang.firebasestorage.app",
  messagingSenderId: "755594752362",
  appId: "1:755594752362:web:6e82f761b573e4498cf513",
  measurementId: "G-HR81LESHEH"
};

// ✅ Cegah inisialisasi ganda
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// ✅ Inisialisasi Auth & Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
