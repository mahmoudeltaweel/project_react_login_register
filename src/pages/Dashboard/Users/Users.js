import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router";

export default function Users(){
    let [users,setUsers]=useState([]);
    let [runuseefect,setrun]=useState(0);

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/user/show')
            .then((res)=>res.json())
            .then((data)=>setUsers(data))
    },[runuseefect])
    
    async function deleteuser(id){
        try{
           const res = await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`)
           if(res.status===200){
               setrun((prev)=>prev+1)
           }
        }catch(err){
            console.log(err);
        }
            
    }
    let showuser = users.map((user,index)=>
        <tr key={index}>
               
                 <td>{index+1}</td>
                 <td>{user.name}</td>
                 <td>{user.email}</td> 
                 <td>
                 <Link to={`${user.id}`} >
        <i 
             
             className="fa-solid fa-pen-to-square" 
             style={{color:"#74afb9" , fontSize:"20px" ,paddingRight:"4px" , cursor:"pointer" }}
             ></i>
             </Link>
               <i 
             className="fa-sharp fa-solid fa-trash" onClick={()=>deleteuser(user.id)}
             style={{color:"red" , fontSize:"20px" , cursor:"pointer" }}
             ></i>
        </td>
        </tr> 
    )
    
    
    return(
        <div style={{padding:"20px"}}>
            <table>
                <thead>
                     <tr>
                          <th>id</th>
                          <th>name</th>
                          <th>Email</th>
                          <th>Action</th>
                      </tr>
                </thead>
                <tbody>
                   {showuser}
                </tbody>
            </table>
        </div>
    )
}