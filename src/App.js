import React from "react";
import { Routes, Route } from "react-router";
import Login from "./pages/Website/Auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Dashboard/Users/Users";
import Updateuser from "./pages/Dashboard/Users/Updateuser";
import CreateUser from "./pages/Dashboard/Users/CreateUser";
import Home from "./pages/Website/Home";
import Signup from "./pages/Website/Auth/SignUp";
import RequireAuth from "./pages/Website/Auth/RequireAuth";

export default function App(){  
  return(
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route element={<RequireAuth />} >
      <Route path="/dashboard" element={<Dashboard />} >
        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/dashboard/users/:id" element={<Updateuser />} />
        <Route path="/dashboard/user/create" element={<CreateUser />} />
         </Route>
         </Route>
      </Routes>
    </div>
  );
}