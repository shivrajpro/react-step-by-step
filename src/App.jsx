import { useState, useTransition } from "react";

function App() {
  const [myPending, setMyPending] = useState(false);
  const [pending, startTransition] = useTransition(false);

  const handleSubmit = async () => {
    setMyPending(true);

    await new Promise((res) => setTimeout(res, 2000));

    setMyPending(false);
  };

  const handleTransition = () => {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 2000));
    });
  };
  return (
    <>
      <h1>useTransition Hook</h1>
      <button disabled={myPending} onClick={handleSubmit}>
        Click (state)
      </button>
      <button disabled={pending} onClick={handleTransition}>
        Click (transition)
      </button>
    </>
  );
}
export default App;
