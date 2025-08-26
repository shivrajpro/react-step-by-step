import User from "./User";

function App() {
  const handleDisplayName = (name) => {
    alert(name);
  };

  const getUser = () => {
    alert("getUser function called");
  };
  return (
    <>
      <h1>Calling Parent function from child component</h1>
      <User displayName={handleDisplayName} name="john" onClick={getUser} />
      <User displayName={handleDisplayName} name="peter" onClick={getUser} />
      <User displayName={handleDisplayName} name="sam" onClick={getUser} />
      <User displayName={handleDisplayName} name="bruce" onClick={getUser} />
    </>
  );
}
export default App;
