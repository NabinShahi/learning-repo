import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { v4 as uuid } from "uuid";

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: uuid(),
      title: text,
      isCompleted: false,
    };
    setTodo([...todo, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  const checkTodo = (id) => {
    console.log(id);
    setTodo(
      todo.map((todo) => {
        if (todo.id === id) todo.isCompleted = !todo.isCompleted;
        console.log(todo.isCompleted);
        return todo;
      })
    );
  };
  return (
    <div className="app">
      <h1 style={{ textAlign: "center" }}>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todo={todo} deleteTodo={deleteTodo} checkTodo={checkTodo} />
    </div>
  );
}

export default App;
