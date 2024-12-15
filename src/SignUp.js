import { useState } from "react";
import "./style.css";
import axios from "axios";
import Header from "./Components/Header";
export default function Signup() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [reaptPassword, setNameReaptPassword] = useState("");
  let [accept, setaccept] = useState(false);
  // let [flag, setflag] = useState(false);
  let [emailError, setEmailError] = useState(false);
  async function submit(e) {
    let flag = true ;
    e.preventDefault();
    setaccept(true);

    if (name === "" || password < 6 || reaptPassword !== password) {
        flag=false
    }
    else flag=true;
    try{
      if(flag){
        let res = await axios.post("http://127.0.0.1:8000/api/register",{
            name:name,
            password:password,
            email:email,
            password_confirmation:reaptPassword
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
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
          />
          {accept && name === "" && ( <p className="error">name is required</p>)}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter Your Email"
          />
          {accept && emailError===422 && ( <p className="error">The email has already been taken</p>)}


          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {accept && password < 6  && ( <p className="error">password must be more than 6 Char</p>)}

          <label htmlFor="repeatpassword">repeat password:</label>
          <input
            type="password"
            id="repeatpassword"
            placeholder="repeat password"
            onChange={(e) => setNameReaptPassword(e.target.value)}
          />
          {accept && reaptPassword !== password  && ( <p className="error">password dose not match</p>)}

          <div style={{ textAlign: "center" }}>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
