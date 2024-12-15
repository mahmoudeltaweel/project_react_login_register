import React from "react";
import Signup from "./SignUp";
import {Routes , Route} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Users from "./Users";

export default function App(){  
  return(
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} >
        <Route path="/dashboard/users" element={<Users />} />
         </Route>
      </Routes>
    </div>
  );
}