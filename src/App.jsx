import { Navigate, Route, Routes } from "react-router";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}
export default App;
