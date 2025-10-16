// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Do not send firebase config to public repo
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc0jN5ElvLBpGHqEV2o-veaQjZaeNqi0A",
  authDomain: "react-authentication-fir-9bead.firebaseapp.com",
  projectId: "react-authentication-fir-9bead",
  storageBucket: "react-authentication-fir-9bead.firebasestorage.app",
  messagingSenderId: "534570783171",
  appId: "1:534570783171:web:5bc3e2d80fccbc9b65ad76",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
