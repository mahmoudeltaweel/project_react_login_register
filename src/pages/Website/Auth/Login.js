import  axios  from "axios";
import { useState } from "react";
import Header from "../../../Componenets/Header";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [accept, setaccept]=useState(false);
  const [emailError , setEmailError]=useState("");
  const form ={
    boxShadow: "0px 2px 15px rgba(1, 1, 1, 0.1)", 
      width:"400px"
  }
  async function submit(e) {
    let flag=true;
    e.preventDefault();
    setaccept(true);
    if( password.length < 8 ){
      flag = false;
    }else{flag=true}
    try{
      if(flag){
        let res =await axios.post("http://127.0.0.1:8000/api/login",{
          email:email,
          password:password,
        })
        if(res.status===200){
            window.localStorage.setItem("email" , email)
            window.location.pathname="/";
        }
      }
    }catch(err){
      setEmailError(err.response.status);
    }
    
  }
  return (
    <div> 
      <Header />
    <div className="parent login shadow">
      <div className="register">
        <form onSubmit={submit} style={form}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Email..."
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          {accept && emailError===401 && <p className="error">The email has not find or password fail</p>}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password..."
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
          />
          {password.length < 8 && accept && <p className="error">password must be more than 8 char</p>}
         
          <div style={{ textAlign: "center" }}>
            <button type="submit">Log in</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}
