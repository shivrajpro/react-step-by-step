import { useState } from "react"

const TodoList = () => {
    const [todoItems, setTodoItems] = useState([]);
    const [todoItemName, setTodoItemName] = useState('');

    function onAddTodo() {
        if (todoItemName.trim()) {
            setTodoItems((prevItems) => {
                return [...prevItems, { id: Date.now(), name: todoItemName, isDone: false }]
            })
            setTodoItemName('');
        }
    }

    function onTodoChecked(e, id) {
        const isChecked = e.target.checked;
        setTodoItems((prevItems) => {
            return prevItems.map((item) => item.id === id ? { ...item, isDone: isChecked } : item)
        })
    }

    function deleteTodo(id) {
        setTodoItems((prevItems) => { return prevItems.filter((todo) => todo.id !== id) })
    }

    console.log('>> todoItems', todoItems);
    return <>
        <h2>Todo List</h2>
        <input placeholder="Enter todo item name" value={todoItemName} onChange={(e) => setTodoItemName(e.target.value)} />
        <button onClick={onAddTodo} >Add</button>
        {todoItems.length > 0 && todoItems.map((todo) => {
            return <div key={todo.id}>
                <input type="checkbox" name="isDone" checked={todo.isDone} onChange={(e) => onTodoChecked(e, todo.id)} />
                <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }} >{todo.name}</span>
                <button onClick={() => deleteTodo(todo.id)} >❌</button>
            </div>
        })}
    </>
}

export default TodoList