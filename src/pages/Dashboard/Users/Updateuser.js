import { useEffect, useState } from "react";
import "./../../../Components/Forms/index.css";
import { useParams } from "react-router-dom";
import Forms from "../../../Components/Forms/Form";
export default function Updateuser() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");

  const params = useParams();
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data[0].name);
        setEmail(data[0].email);
      });
  }, []);
  return (
    <>
      <h1>Update User</h1>
      <div>
        <Forms
          button="update"
          name={name}
          email={email}
          endpoint={`user/update/${params.id}`}
          navigate="dashboard/users"
          localstorge={false}
          buttonstyle={true}
        />
      </div>
    </>
  );
}
