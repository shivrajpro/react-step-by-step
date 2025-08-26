import { useFormStatus } from "react-dom";

function App() {
  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("submit");
  };

  function CustomerForm() {
    const { pending } = useFormStatus();

    console.log(pending);

    return (
      <div>
        <input type="text" placeholder="enter username" />
        <input type="password" placeholder="enter password" />
        <button type="submit" disabled={pending}>
          {pending ? "Submitting" : "Submit"}
        </button>
      </div>
    );
  }
  return (
    <>
      <h1>useFormStatus Hook</h1>
      <form action={handleSubmit}>
        <CustomerForm />
      </form>
    </>
  );
}
export default App;
