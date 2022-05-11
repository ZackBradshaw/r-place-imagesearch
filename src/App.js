import React from "react";
import Canvas from "./components/Canvas";
import Header from "./components/Header";
import "./styles/App.css";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwlAaPrNt3gREcWIMewCSjyGhYfrFri20",
  authDomain: "r-place-imagesearch.firebaseapp.com",
  projectId: "r-place-imagesearch",
  storageBucket: "r-place-imagesearch.appspot.com",
  messagingSenderId: "541628279672",
  appId: "1:541628279672:web:e5810da9304389fe45b68d",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div>
      <Header />
      <Canvas />
    </div>
  );
}

export default App;
