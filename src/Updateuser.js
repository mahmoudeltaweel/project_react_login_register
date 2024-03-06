/* eslint-disable react-hooks/rules-of-hooks */
import React , { useState, useEffect } from "react";
import Forms from "./Componenets/Forms";

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
    // async function submit(e) {
    //   let flag=true;
    //   e.preventDefault();
    //   setaccept(true);
    //   if(name ==="" ||password.length < 8  || passwordR !== password){
    //     flag=false;
    //   }else{
    //     flag=true;
    //   }
    //   try{
    //     if(flag){
    //       let res=await axios.post(`http://127.0.0.1:8000/api/user/update/${id}` , {
    //         name:name,
    //         email:email,
    //         password:password,
    //         password_confirmation:passwordR
    //       })
    //       if(res.status===200){
    //         window.localStorage.setItem("email",email);
    //         window.location.pathname="/dashboard/user"
    //       }
    //     }
    //   }catch(err){
    //     console.log(err);
    //   }
  
    //  }
    return (
        <div>
        <div className="parent">
            <Forms 
                button={"Update"}
                endpoint={`user/update/${id}`}
                navigate={"dashboard/user"}
                localStorage={false}
                name={name}
                email={email}
                />         
          </div>
        </div>
      );
}