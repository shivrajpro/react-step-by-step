import { NavLink } from "react-router";
import "./styles.css";
export default function Navbar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink to="/add-user">Add User</NavLink>
    </div>
  );
}
