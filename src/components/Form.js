import React, { useState } from "react";

import "../styles/Form.scss";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ todos, setTodos, editTodo, seteditTodo }) => {
  const [input, setInput] = useState("");
  const [details, setDetails] = useState("");

  // ---------------------------- update task -------------------------------

  const updateTodo = (input, details, id) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { input, details, id } : todo
    );
    toast.success("Task updated successfully");
    setTodos(newTodo);
    seteditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.input);
      setDetails(editTodo.details);
    } else {
      setInput("");
      setDetails("");
    }
  }, [setInput, setDetails, editTodo]);

  // ------------------------------ Submit the task ----------------------

  const FormHandle = (event) => {
    event.preventDefault();
    if (!input || !details) {
      toast.error("Fill all input fields");
    } else {
      if (!editTodo) {
        toast.success("Task added successfully");
        setTodos([...todos, { id: uuidv4(), input: input, details: details }]);
        setInput("");
        setDetails("");
      } else {
        updateTodo(input, details, editTodo.id);
      }
    }
  };
  return (
    <>
      <ToastContainer />
      <form className="form" onSubmit={FormHandle}>
        <div className="inputs">
          <input
            className="title"
            type="text"
            placeholder="Title..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          {!editTodo ? (
            <input
              className="details"
              type="text"
              placeholder="Input..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          ) : (
            <textarea
              className="edit-details"
              type="text"
              placeholder="Input..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          )}
        </div>
        <button type="submit">
          {editTodo ? <span className="update-btn">update</span> : "+"}
        </button>
      </form>
    </>
  );
};

export default Form;
