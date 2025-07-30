import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBaf9DIWcuKhMfsuPkzrUVJLfBzpfryuGs",
  authDomain: "unoverse-14bcf.firebaseapp.com",
  projectId: "unoverse-14bcf",
  storageBucket: "unoverse-14bcf.firebasestorage.app",
  messagingSenderId: "44642963389",
  appId: "1:44642963389:web:2d0595b1ff788660e1ccd4",
  measurementId: "G-MTS4HW574P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Analytics (only if you need it)
// Remove this line if you're not using analytics to avoid the unused variable error
// const analytics = getAnalytics(app);