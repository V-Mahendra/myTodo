import React, { useEffect, useState } from "react";

import "../styles/ToDo.scss";
import logo from "../images/gyz_logo.png";
import Form from "./Form";
import TodoList from "./TodoList";

const ToDo = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];

  const [todos, setTodos] = useState(initialState);
  const [editTodo, seteditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  localStorage.setItem("todo", JSON.stringify(todos));
  return (
    <div className="container">
      <div className="nav">
        <img src={logo} alt="logo" />
        <div className="logo-name">
          <h2>Gyizer</h2>
          <p>ToDo App</p>
        </div>
      </div>
      <div className="form-container">
        <Form
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          seteditTodo={seteditTodo}
        />
      </div>
      <div className="content">
        <TodoList todos={todos} setTodos={setTodos} seteditTodo={seteditTodo} />
      </div>
    </div>
  );
};

export default ToDo;
