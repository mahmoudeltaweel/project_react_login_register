import { useContext } from "react";
import { User } from "../../../context/UserContext";
import { Navigate, Outlet } from "react-router";

export default function RequireAuth(){
    const user =useContext(User)
    return user.auth.userDetails ?  <Outlet /> : <Navigate to="/login" />;
}