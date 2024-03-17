/* eslint-disable react-hooks/rules-of-hooks */
import React , { useState, useEffect } from "react";
import Forms from "../../../Componenets/forms/Form";
export default function updateUser(){
  const [name , setname]=useState("");
  const [email , setemail] = useState("");
    
    const id = window.location.pathname.split("/").slice(-1)[0];
    useEffect(()=>{
      fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
      .then((res)=>res.json())
      .then((data)=>{
        setname(data[0].name);
        setemail(data[0].email);
      })
    },[])
    return (
        <>
        <h1> Update User </h1>
        <div className="parent">
            <Forms 
                button={"Update"}
                endpoint={`user/update/${id}`}
                navigate={"dashboard/user"}
                localStorage={false}
                name={name}
                email={email}
                buttonstyle={true}
                />         
          </div>
        </>
      );
}