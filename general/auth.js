/*  auth.js  —  vanilla ES-module wrapper around Firebase Auth  */
import { initializeApp } from
  "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut
} from
  "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

/* config from Firebase console here  */
const firebaseConfig = {
  apiKey: "AIzaSyCHjsbAQcjiTv9obNpwjb3JF0a59-D7uhI",
  authDomain: "smartcashly.firebaseapp.com",
  projectId: "smartcashly",
  storageBucket: "smartcashly.appspot.com",
  messagingSenderId: "381392374609",
  appId: "1:381392374609:web:f500a5e781af3fd45b13c"
};

console.log('🔄 Initializing Firebase...');
const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log('✅ Firebase initialized successfully');

/* expose tiny helpers globally */
window.smartAuth = {
  signUp : (email, pass) => {
    console.log('🔄 SmartAuth: Creating user account for:', email);
    return createUserWithEmailAndPassword(auth, email, pass);
  },
  signIn : (email, pass) => {
    console.log('🔄 SmartAuth: Signing in user:', email);
    return signInWithEmailAndPassword(auth, email, pass);
  },
  reset  : (email) => {
    console.log('🔄 SmartAuth: Sending password reset to:', email);
    return sendPasswordResetEmail(auth, email);
  },
  signOut: () => {
    console.log('🔄 SmartAuth: Signing out user');
    return signOut(auth);
  },
  user   : () => auth.currentUser       // null if signed-out
};

console.log('✅ SmartAuth object created and attached to window');
