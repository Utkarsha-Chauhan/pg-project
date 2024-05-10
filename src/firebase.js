
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVwPDuMNcAf6-YRbT2Wy3a4zS68sep7Bo",
    authDomain: "version-one---pgpedia.firebaseapp.com",
    databaseURL: "https://version-one---pgpedia-default-rtdb.firebaseio.com",
    projectId: "version-one---pgpedia",
    storageBucket: "version-one---pgpedia.appspot.com",
    messagingSenderId: "695060698282",
    appId: "1:695060698282:web:32ebd12d05465c380decd3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
