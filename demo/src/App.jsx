import { useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Componate/Navbar";
import Home from "./Componate/Home";
import Products from "./Componate/Products";
import About from "./Componate/About.Jsx";
import OderConform from "./Componate/OderConform"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemPage from "./Componate/ItemPage";
import LogIn from "./Componate/LogIn";


function App() {
  return (
   
   <BrowserRouter>
    <Routes  >
        <Route path="/" element={<Navbar/>}>
        <Route index element={<LogIn/>}/>
        <Route path="/home" element={<Home/>}/>
        
        <Route path="/products" element={<Products/>}/>
        <Route path="/about" element={<About/>} />
        
        <Route path="/ItemPage/:id" element={<ItemPage/>}/>
        <Route path="/OderConform" element={<OderConform/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
    
  
  );
}

export default App;
