/*import React,{Fragment} from 'react';
import MyImage from "../src/img/naga.png"
import WishCard from './components/WishCard';
import Student from './components/Student';
import './App.css';

function App() {
  return (
  <Fragment>
    <nav className="navbar">
      <span>Welcome to App component</span>
      <div class="image-container">
      <img src={MyImage} alt="image"/>
      </div>
      </nav>
      <Student name="Naveen" course="mba"/>
      <Student name="Rajan" course="mbbs"/>
  </Fragment>
  );
}

export default App;*/
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { Skills } from "./components/Skills/Skills";
const App=()=>{
  return(
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
        <Skills/>
      </div>
    </>
  );
};
export default App
