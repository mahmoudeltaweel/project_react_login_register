import { Outlet } from "react-router";
import SideBar from "../../Components/SideBar";
import TopBar from "../../Components/TopBar";

export default function Dashboard(){
    return(
        <div>
            <TopBar />
            <div className="content-flex">
            <SideBar />
            <div style={{width:"80%"}}>
            <Outlet />
            </div>
            </div>
        </div>
    )
}