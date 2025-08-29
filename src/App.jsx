import { Route, Routes } from "react-router";
import AddUser from "./AddUser";
import Navbar from "./Navbar";
import UserList from "./UserList";

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList />}></Route>
        <Route path="/add-user" element={<AddUser />}></Route>
      </Routes>
    </div>
  );
}
export default App;
