import Forms from "../../../Components/Forms/Form";
import Header from "../../../Components/Header";
export default function Signup() {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40px",
          height: "80vh",
        }}
      >
        <Forms
          button="register"
          endpoint="register"
          navigate=""
          styleregister={true}
          localstorge={true}
        />
      </div>
    </div>
  );
}
