import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyA7aCwFBRYAmt5toR5sxYk1tYqPS4G9XXM",
    authDomain: "slippi-ranked-web.firebaseapp.com",
    projectId: "slippi-ranked-web",
    storageBucket: "slippi-ranked-web.appspot.com",
    messagingSenderId: "377035329573",
    appId: "1:377035329573:web:e8e5ebf745ea199480afcc",
    measurementId: "G-YRXGV562T8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service

const db = getFirestore(app);

export default db

