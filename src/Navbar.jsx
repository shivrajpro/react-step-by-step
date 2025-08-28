import { Link, Outlet } from "react-router";

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/user/about">About</Link> |{" "}
      <Link to="/user/login">Login</Link> | <Link to="/college">College</Link> |{" "}
      <Link to="/users">Users</Link>
      <Outlet />
    </div>
  );
}
