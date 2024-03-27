import About from "./pages/About";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Website/Auth/Login";
import Updateuser from "./pages/Dashboard/Users/Updateuser";
import SignUp from "./pages/Website/Auth/SignUp";
import React from "react";
import {Routes , Route} from "react-router-dom"
import Users from "./pages/Dashboard/Users/Users";
import CreateUser from "./pages/Dashboard/Users/CreateUser";
import Product from "./pages/Dashboard/Products/Products";
export default function App(){  
  return(
    <div>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="users" element={<Users />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="users/:id" element={<Updateuser />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}