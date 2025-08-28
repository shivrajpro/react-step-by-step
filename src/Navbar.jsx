import { Link } from "react-router";

export default function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
      <Link to="/login">Login</Link>
    </div>
  );
}
