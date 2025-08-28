import useToggle from "./useToggle";

function App() {
  const [val, toggleValue] = useToggle(true);
  const [data, setData] = useToggle(true);
  return (
    <div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Show</button>
      <button onClick={() => toggleValue(false)}>Hide</button>
      {val && <h1>Custom hooks in React</h1>}

      <hr />

      <button onClick={setData}>Toggle</button>
      <button onClick={() => setData(true)}>Show</button>
      <button onClick={() => setData(false)}>Hide</button>
      {data && <h1>Custom hooks in React</h1>}
    </div>
  );
}
export default App;
