import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./ContextData";

function App() {
  const [subject, setSubject] = useState("maths");

  return (
    <SubjectContext.Provider value={subject}>
      <div style={{ backgroundColor: "yellow", padding: 10 }}>
        <h1>Context API in ReactJS</h1>
        <select onChange={(e) => setSubject(e.target.value)} value={subject}>
          <option value="maths">Maths</option>
          <option value="science">Science</option>
          <option value="english">English</option>
        </select>
        <College />
      </div>
    </SubjectContext.Provider>
  );
}
export default App;
