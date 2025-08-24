import { useState } from "react";

const FormControls = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [gender, setGender] = useState("Female");
  const [city, setCity] = useState("solapur");

  function clearForm() {
    setUsername("");
    setPassword("");
    setEmail("");
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </form>
      <h2>
        {username}, {password}, {email}
      </h2>
      {/* <Skills /> */}
      <input
        onChange={(evt) => setGender(evt.target.value)}
        type="radio"
        name="gender"
        id="male"
        value={"Male"}
        checked={gender === "Male"}
      />
      <label htmlFor="male">Male</label>
      <input
        onChange={(evt) => setGender(evt.target.value)}
        type="radio"
        name="gender"
        id="female"
        value={"Female"}
        checked={gender === "Female"}
      />
      <label htmlFor="female">Female</label>
      <h2>Selected Gender: {gender}</h2>
      <h2>Selected City : {city} </h2>
      <select value={city} onChange={(evt) => setCity(evt.target.value)}>
        <option value="pune">Pune</option>
        <option value="solapur">Solapur</option>
        <option value="mumbai">Mumbai</option>
      </select>
      <button onClick={() => clearForm()}>Clear</button>
    </div>
  );
};

export default FormControls;
