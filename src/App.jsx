import "./styles.css";
import Wrapper from "./Wrapper";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Wrapper color="red">
        <h1>Hi, Shivraj</h1>
      </Wrapper>
      <Wrapper>
        <h1>Hi, Peter</h1>
      </Wrapper>
    </div>
  );
}
