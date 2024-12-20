import Forms from "../../../Components/Forms/Form";

export default function CreateUser(){
    return(
        <div>
            <div>
                <Forms
                         button="Add"
                         endpoint="user/create"
                         navigate="dashboard/users"
                         localstorge={false}
                         buttonstyle={true}
                       />
            </div>
        </div>
    )
}