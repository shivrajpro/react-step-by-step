import { Navigate, Route, Routes } from "react-router";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import Details from "./Details";
import Users from "./Users";
import UserDetails from "./UserDetails";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route>
            <Route path="/user">
              <Route path="/user/about" element={<About />} />
              <Route path="/user/login" element={<Login />} />
            </Route>
          </Route>
        </Route>

        <Route path="/college" element={<College />}>
          {/* Nested Routes */}
          <Route index element={<Student />} />
          <Route path="department" element={<Department />} />
          <Route path="details" element={<Details />} />
        </Route>
        {/* <Route path="*" element={<PageNotFound />} /> */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}
export default App;
