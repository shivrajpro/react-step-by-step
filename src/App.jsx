import { useReducer } from "react";

const emptyForm = {
  username: "",
  password: "",
  email: "",
  city: "",
  pincode: "",
};

const reducer = (data, action) => {
  return { ...data, [action.type]: action.val };
};

function App() {
  const [state, dispatch] = useReducer(reducer, emptyForm);
  console.log(state);

  return (
    <div>
      <h1>App Component</h1>
      <input
        type="text"
        placeholder="enter username"
        onChange={(e) => dispatch({ val: e.target.value, type: "username" })}
      />
      <br />
      <input
        type="text"
        placeholder="enter password"
        onChange={(e) => dispatch({ val: e.target.value, type: "password" })}
      />
      <br />
      <input
        type="text"
        placeholder="enter email"
        onChange={(e) => dispatch({ val: e.target.value, type: "email" })}
      />
      <br />
      <input
        type="text"
        placeholder="enter city"
        onChange={(e) => dispatch({ val: e.target.value, type: "city" })}
      />
      <br />
      <input
        type="text"
        placeholder="enter pincode"
        onChange={(e) => dispatch({ val: e.target.value, type: "pincode" })}
      />
      <hr />
      <h2> Username:{state.username} </h2>
      <h2> Email:{state.email} </h2>
      <h2> City:{state.city} </h2>
      <h2> Pincode:{state.pincode} </h2>
    </div>
  );
}
export default App;
