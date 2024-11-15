// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxstHRkYkeizvajjGRBjt6GXKX5xVRn8M",
  authDomain: "document-app-4a90d.firebaseapp.com",
  projectId: "document-app-4a90d",
  storageBucket: "document-app-4a90d.firebasestorage.app",
  messagingSenderId: "979282038301",
  appId: "1:979282038301:web:8fef525149ae693d3bc0f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db };
