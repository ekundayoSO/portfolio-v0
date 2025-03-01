import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'portfolio-v0-e9745.firebaseapp.com',
  projectId: 'portfolio-v0-e9745',
  storageBucket: 'portfolio-v0-e9745.firebasestorage.app',
  messagingSenderId: '584989543769',
  appId: '1:584989543769:web:ca6166aafc6b0877ddd048',
  measurementId: 'G-QPSW5MPN7W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Sign in anonymously
signInAnonymously(auth)
  .then(() => {
    console.log('Signed in anonymously');
  })
  .catch((error) => {
    console.error('Error signing in:', error);
  });

// Initialize Firestore
const db = getFirestore(app);

export { db, auth };