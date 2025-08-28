import { Link } from "react-router";

export default function PageNotFound() {
  return (
    <div>
      <h2>404 Page Not Found</h2>
      <Link to="/">Go to Home</Link>
    </div>
  );
}
