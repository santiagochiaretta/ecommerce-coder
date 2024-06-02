import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ_o5qMk1VigcKwPXdeoaVdyyBrBEFQzU",
  authDomain: "ecommerce-coder-aa246.firebaseapp.com",
  projectId: "ecommerce-coder-aa246",
  storageBucket: "ecommerce-coder-aa246.appspot.com",
  messagingSenderId: "369974271744",
  appId: "1:369974271744:web:37e3d79984530c1e9b5de5",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
