import { NavLink, Outlet } from "react-router";

const College = () => {
  return (
    <div>
      <h1>College Component</h1>
      <NavLink to="student">Student</NavLink> |
      <NavLink to="department">Department</NavLink> |
      <NavLink to="details">College Details</NavLink>
      <Outlet />
    </div>
  );
};

export default College;
