import React from "react";
import Todo from "./Todo";

function TodoList({ todo, deleteTodo, checkTodo }) {
  return (
    <div className="todoList">
      {todo.map((x) => (
        <Todo
          key={x.id}
          id={x.id}
          title={x.title}
          isCompleted={x.isCompleted}
          deleteTodo={deleteTodo}
          checkTodo={checkTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
