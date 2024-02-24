import Header from "./Componenets/Header";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import React from "react";
import {Routes , Route} from "react-router-dom"
export default function App(){  
  return(
    <div>
      <Header />
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}