import { Link, Route, Routes } from "react-router";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;
