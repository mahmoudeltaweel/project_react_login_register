import { Link } from "react-router";
export default function Header() {
  return (
    <div className="container shadow">
      <nav className="d-flex p-2">
        <div className="d-flex">
          <Link to={"/"} style={{ alignItems: "center" }}>
            Home
          </Link>
          <Link style={{ alignItems: "center" }}>About</Link>
        </div>

        <div className="d-flex">
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
          <Link
            to={"/dashboard"}
            className="register-nav"
            style={{ alignItems: "center" }}
          >
            Dashboard
          </Link>
          {/* <Link
        to={"/logout"}
        onClick={handelLogout}
        className="register-nav"
        style={{ alignItems: "center" }}
      >
        Logout
      </Link> */}
        </div>
      </nav>
    </div>
  );
}
