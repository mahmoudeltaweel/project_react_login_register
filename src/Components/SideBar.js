import { NavLink } from "react-router";

export default function SideBar() {
  return (
    <div className="side-bar">
      <NavLink to={"/dashboard/users"} className="item-link" activeClassName="active">
        <i className="fa-solid fa-users"></i>
        Users
      </NavLink>
      <NavLink to={"/dashboard/user/create"} className="item-link" activeClassName="active">
        <i className="fa-solid fa-user-plus"></i> New User
      </NavLink>
    </div>
  );
}
