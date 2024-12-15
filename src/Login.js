import { useState } from "react";
import "./style.css";
import axios from "axios";
import Header from "./Components/Header";

export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [accept, setaccept] = useState(false);
  let [emailError, setEmailError] = useState(false);
  async function submit(e) {
    let flag = true ;
    e.preventDefault();
    setaccept(true);
    if (password < 6 ) {
        flag=false
    }
    else flag=true;
    try{
      if(flag){
        let res = await axios.post("http://127.0.0.1:8000/api/login",{
            email:email,
            password:password,
        }
        ) 
        if(res.status===200){
            window.localStorage.setItem("email",email)
            window.location.pathname="/"
          }       
    }

    } catch(err){
      setEmailError(err.response.status)
      
    }
    
  }
  return (
    <div>
        <Header />
    <div className="parent">
      <div className="register">
        <form onSubmit={submit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter Your Email"
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {accept && password < 6 && ( <p className="error">The password is requird</p>)}
          {accept && emailError===422 && ( <p className="error">The email or password has incorrect</p>)}
          <div style={{ textAlign: "center" }}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
    </div>);
}
