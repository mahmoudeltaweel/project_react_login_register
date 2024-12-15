import { Link } from "react-router-dom";

// import "./../style.css"
export default function Header() {

    function handelLogout(){
        window.localStorage.removeItem("email");
        window.location.pathname="/login"
    }
  return (
    <div className="container">
      <nav className="d-flex">

        <div className="d-flex">
          <Link to={"/"} style={{ alignItems: "center" }}>
            Home
          </Link>
          <Link style={{ alignItems: "center" }}>About</Link>
        </div>

        <div className="d-flex">
        { !window.localStorage.getItem("email") ? <>
          
          <Link
            to={"/register"}
            className="register-nav"
            style={{ alignItems: "center" }}
          >
            Register
          </Link>
          <Link
            to={"/login"}
            className="register-nav"
            style={{ alignItems: "center" }}
          >
            Login
          </Link>
         </> : <Link
        to={"/logout"}
        onClick={handelLogout}
        className="register-nav"
        style={{ alignItems: "center" }}
      >
        Logout
      </Link>}

        </div>
      </nav>
    </div>
  );
}
