import Forms from "../../../Componenets/forms/Form";
import Header from "../../../Componenets/Header";

export default function SignUp() {
 
  
  return (
    <div> <Header />
    <div className="parent" 
      style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"80vh"
      }}
    >
      <Forms 
          button={"Register"} 
          endpoint={"register"}
          navigate={""}
          localStorage={true}
          styleRegister={true}
          />
      </div>
    </div>
  );
}
