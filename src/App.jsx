import { lazy, Suspense, useState } from "react";
// import ClassComponent from "./ClassComponent";

const ClassComponent = lazy(() => import("./ClassComponent"));
function App() {
  const [load, setLoad] = useState(false);
  return (
    <div>
      <h1>App Component</h1>
      <button onClick={() => setLoad(true)}>Load</button>
      {/* {load ? <ClassComponent /> : null} */}
      {load ? (
        <Suspense fallback={<h3>loading...</h3>}>
          {" "}
          <ClassComponent />{" "}
        </Suspense>
      ) : null}
    </div>
  );
}
export default App;
