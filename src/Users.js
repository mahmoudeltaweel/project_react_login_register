import axios  from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users(){
    const[user,setuser]=useState([]);
    const[run,setrun]=useState(0);
    async function deleteUser(id){
        try{
        const res=await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`)
        if(res.status===200){
            setrun((prev)=>prev+1);
        }
    }catch(err){
        console.log("done catch");
    }
    }
    
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/user/show")
        .then((res)=>res.json())
        .then((data)=>setuser(data))
    },[run]);
    let userindo=user.map((user, index)=>(
        <tr key={index}>
            <td>{index +1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                <Link to={`${user.id}`}>
            <i 

            className="fa-solid fa-pen-to-square"
            style={{color:"#74afb9" , fontSize:"20px" ,paddingRight:"4px" , cursor:"pointer" }}
            ></i>
            </Link>
              <i 
              onClick={()=>deleteUser(user.id)}
            className="fa-sharp fa-solid fa-trash"
            style={{color:"red" , fontSize:"20px" , cursor:"pointer" }}
            ></i>

            </td>
        </tr>
    ))
    return(
        <div style={{padding:"10px"}}>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>user</th>
                        <th>email</th>
                        <th>Action</th>
                        </tr>
                </thead>
                <tbody>
                  {userindo}
                </tbody>
            </table>
        </div>
    );
}

