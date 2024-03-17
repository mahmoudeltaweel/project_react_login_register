import { Link } from "react-router-dom";
export default function Header(){
    function handleLogOut(){
        window.localStorage.removeItem("email");
        window.location.pathname="/";
    }
    return(
        <div className="continer shadow" >
            <nav className="d-flex p-2">
                <div className="d-flex">
                    <Link to="/" >Home</Link>
                    <Link to="/about" >About</Link>
                </div>
                <div className="d-flex"> 
                    {!window.localStorage.getItem("email")?(
                     <>
                     <Link to="/register" style={{textAlign:"center"}} className="register-nav">
                        Register
                    </Link>
                    <Link to="/login" style={{textAlign:"center"}} className="register-nav">
                        Login
                    </Link> </>) :( <div> <div className="register-nav" onClick={handleLogOut}>Log Out</div> <div> 
                    <Link to="/dashboard" className="register-nav">Go To Dashboard </Link> 

                        </div> </div>  ) }
                    
                </div>
            </nav>
        </div>
    );
}