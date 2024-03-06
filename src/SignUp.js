import Forms from "./Componenets/Forms";
import Header from "./Componenets/Header";


export default function SignUp() {
 
  
  return (
    <div> <Header />
    <div className="parent">
      <Forms 
          button={"Regiser"} 
          endpoint={"register"}
          navigate={"/"}
          localStorage={true}
          
          />
      </div>
    </div>
  );
}
