import { Route, Routes } from "react-router";
import About from "./About";
import College from "./College";
import Department from "./Department";
import Details from "./Details";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import PageNotFound from "./PageNotFound";
import Student from "./Student";
import UserDetails from "./UserDetails";
import Users from "./Users";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/users/list?" element={<Users />} />{" "}
          {/* ? means optional segment */}
          <Route path="/users/:id/:name?" element={<UserDetails />} />
          {/* Dynamic optional segment */}
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
        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </div>
  );
}
export default App;
