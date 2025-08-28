import { NavLink, Outlet } from "react-router";
import "./styles.css";
export default function Navbar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink
        className={({ isActive }) => (isActive ? "custom-active" : "link")}
        to="/user/about"
      >
        About
      </NavLink>{" "}
      | <NavLink to="/user/login">Login</NavLink> |{" "}
      <NavLink to="/college">College</NavLink> |{" "}
      <NavLink to="/users">Users</NavLink>
      <Outlet />
    </div>
  );
}
