import About from "./About";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import Updateuser from "./Updateuser";
import SignUp from "./SignUp";
import React from "react";
import {Routes , Route} from "react-router-dom"
import Users from "./Users";
export default function App(){  
  return(
    <div>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="user" element={<Users />} />
          <Route path="user/:id" element={<Updateuser />} />
        </Route>
      </Routes>
    </div>
  );
}