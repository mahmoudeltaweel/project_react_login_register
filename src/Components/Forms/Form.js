import { useContext, useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { User } from "../../context/UserContext";
export default function Forms(props) {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [reaptPassword, setNameReaptPassword] = useState("");
  let [accept, setaccept] = useState(false);
  let [emailError, setEmailError] = useState(false);

  const userNow = useContext(User);
  console.log(userNow);
  
  const stylereg={
    display: "flex",
         justifyContent: "center",
         alignItems: "center",
         marginTop:"40px" ,
  }
  const formstyle={
    boxShadow:" 0px 2px 15px rgb(0 0 0 / 10%)",
    width:"400px"
  }

  const button={width:"100%"}

  useEffect(() => {
    setName(props.name);
    setEmail(props.email);
  }, [props.name, props.email]);

  async function submit(e) {
    let flag = true;
    e.preventDefault();
    setaccept(true);

    if (name === undefined || password < 6 || reaptPassword !== password) {
      flag = false;
    } else flag = true;
    try {
      if (flag) {
        let res = await axios.post(
          `http://127.0.0.1:8000/api/${props.endpoint}`,
          {
            name: name,
            password: password,
            email: email,
            password_confirmation: reaptPassword,
          }
        );
        // if (res.status === 200) {
        //     if(props.localstorge){
        //         window.localStorage.setItem("email", email)
        //         }
        //   window.location.pathname = `/${props.navigate}`;
        // }
        const token =res.data.data.token;
        const userDetails = res.data.data.user;
        userNow.setAuth({token , userDetails})
        
      }
    } catch (err) {
      setEmailError(err.response.status);
    }
  }
  return (
    <>
      <div className="register"  style={ props.styleregister && stylereg}>
        <form onSubmit={submit} style={  props.styleregister && formstyle}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
          />
          {accept && name === undefined && (<p className="error">name is required</p>)}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter Your Email"
          />
          {accept && emailError === 422 && (
            <p className="error">The email has already been taken</p>
          )}

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {accept && password < 6 && (
            <p className="error">password must be more than 6 Char</p>
          )}

          <label htmlFor="repeatpassword">repeat password:</label>
          <input
            type="password"
            id="repeatpassword"
            placeholder="repeat password"
            onChange={(e) => setNameReaptPassword(e.target.value)}
          />
          {accept && reaptPassword !== password && (
            <p className="error">password dose not match</p>
          )}

          <div style={{ textAlign: "center" }}>
            <button type="submit" style={props.buttonstyle && button}>{props.button}</button>
          </div>
        </form>
      </div>
    </>
  );
}
