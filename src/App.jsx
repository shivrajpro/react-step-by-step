import { useActionState } from "react";

function App() {
  const handleSubmit = async (previousData, formData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("previousData", previousData);
    const username = formData.get("username");
    const password = formData.get("password");
    console.log("username", username);
    console.log("password", password);

    if (username && password) {
      return { message: "Data submitted", username, password };
    } else {
      return {
        error: "Please provide both username and password",
        username,
        password,
      };
    }
  };

  const [data, action, pending] = useActionState(handleSubmit, {
    username: "",
    password: "",
  });

  return (
    <>
      <h1>useActionState hook in RectJS</h1>
      <form action={action}>
        <input
          defaultValue={data?.username}
          type="text"
          name="username"
          placeholder="Enter username"
        />
        <input
          defaultValue={data?.password}
          type="password"
          name="password"
          placeholder="Enter password"
        />
        <button type="submit" disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </form>

      {data?.error && <h3 style={{ color: "red" }}>{data.error}</h3>}
      {data?.message && <h3 style={{ color: "green" }}>{data.message}</h3>}
      <hr />

      <h2>Username: {data?.username}</h2>
      <h2>Password: {data?.password}</h2>
    </>
  );
}
export default App;
