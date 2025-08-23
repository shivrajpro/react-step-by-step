import "./styles.css";

const fruit = (name) => {
  alert("from outside" + name);
};
export default function App() {
  let message = "Hello world";
  // debugger
  console.log("test", message);

  const fruit = (name) => {
    alert("inside " + name);
  };

  function fruit2(name) {
    alert("fruit2 " + name);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>some more code</h3>
      <button onClick={() => fruit2("banana")}>Fruit</button>
    </div>
  );
}
