import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8ejgdlQFN86tvssFMOQfsB87P_2UzQHQ",
  authDomain: "pokegallery-5aee7.firebaseapp.com",
  projectId: "pokegallery-5aee7",
  storageBucket: "pokegallery-5aee7.appspot.com",
  messagingSenderId: "92746594348",
  appId: "1:92746594348:web:41c13e2c692205d30b7989"
};
const root = ReactDOM.createRoot(document.getElementById('root'));



// Initialize Firebase
const app = initializeApp(firebaseConfig);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
