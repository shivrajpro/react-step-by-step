import { useState } from "react";

function App() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    setTodoList([...todoList, { text: todoItem, completed: false }]);
    setTodoItem("");
  };

  const deleteTodo = (index) => {
    const newTodoList = todoList.filter((item, i) => i !== index);
    setTodoList(newTodoList);
  };

  const completeTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index].completed = !newTodoList[index].completed;
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h1>App Component</h1>
      <input
        type="text"
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
        placeholder="Enter Todo Item"
      />
      <button onClick={() => addTodo()}>Add</button>
      <ul style={{ listStyleType: "none" }}>
        {todoList.map((item, index) => {
          return (
            <li key={index}>
              <h3>
                <input
                  type="checkbox"
                  id={"item" + index}
                  checked={item?.completed}
                  onChange={() => completeTodo(index)}
                />
                <label
                  htmlFor={"item" + index}
                  style={{
                    textDecoration: item?.completed ? "line-through" : "none",
                  }}
                >
                  {item?.text}
                </label>{" "}
                &nbsp;
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
