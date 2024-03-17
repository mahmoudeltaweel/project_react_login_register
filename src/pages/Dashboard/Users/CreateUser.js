import Forms from "../../../Componenets/forms/Form";

export default function CreateUser(){
    return(
        <div className="parent">
          <Forms 
              button={"Register"} 
              endpoint={"user/create"}
              navigate={"dashboard/user"}
              buttonstyle={true}
              />
          </div>
      
    );
}