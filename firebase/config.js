// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "ecell-zhcet-web.firebaseapp.com",
  projectId: "ecell-zhcet-web",
  storageBucket: "ecell-zhcet-web.appspot.com",
  messagingSenderId: "473995687709",
  appId: "1:473995687709:web:2d2824983fc764ed5113f4",
  measurementId: "G-05MJ7CSZL1"
};

// Initialize Firebase
const app = !getApps().length ?initializeApp(firebaseConfig): getApp();
const db= getFirestore(app);
const storage= getStorage(app)

export {app, db, storage}

// const analytics = getAnalytics(app);