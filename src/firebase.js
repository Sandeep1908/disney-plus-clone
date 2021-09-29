// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKXgAmqzVSyUDd4NwQrUolIAp3C1Gd_Xo",
  authDomain: "disney-clone-6715a.firebaseapp.com",
  projectId: "disney-clone-6715a",
  storageBucket: "disney-clone-6715a.appspot.com",
  messagingSenderId: "9501420212",
  appId: "1:9501420212:web:b9d1361697a81ef70f45e1",
  measurementId: "G-X1VH8MRJMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
export const provider= new GoogleAuthProvider();
export default getFirestore();
