import { initializeApp } from "firebase/app";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const firebaseConfig = {
  apiKey: "AIzaSyDwHR6eeQ-KiixS9RObKwN9wXIg0wDYREA",
  authDomain: "ecommercecoder-de289.firebaseapp.com",
  projectId: "ecommercecoder-de289",
  storageBucket: "ecommercecoder-de289.appspot.com",
  messagingSenderId: "433421004529",
  appId: "1:433421004529:web:0f6cc8c457d15fa34e0350",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
