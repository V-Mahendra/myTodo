import React, { useState } from "react";
import "../styles/TodoList.scss";
import edit from "../images/Vector.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const TodoList = ({ todos, setTodos, seteditTodo }) => {
  const [btnmode, setbtnmode] = useState(null);

  // --------------------- edit task ---------------

  const editHandler = ({ id }) => {
    const findtask = todos.find((task) => task.id === id);
    seteditTodo(findtask);
  };

  // ----------------------- delete task -----------------------
  const deleteHandler = ({ id }) => {
    if (window.confirm("Delete This Task ? ")) {
      setTodos(todos.filter((task) => task.id !== id));
      toast.warn("Task Deleted")

    }
  };

  return (
    <>
    <ToastContainer />
    <div className="tasks">
      {todos[0] == null ? (
        <div className="no-task">
          <span></span>
          <h2>No Tasks</h2>
          <span></span>
        </div>
      ) : (
        todos.map((task) => (
          <div className="task" key={task.id}>
            <div className="texts">
              <input
                type="text"
                className="title"
                value={task.input}
                onChange={(event) => event.preventDefault()}
              />
              <input
                type="text"
                className="details"
                value={task.details}
                onChange={(event) => event.preventDefault()}
              />
            </div>
            <div className="buttons">
              {!btnmode ? (
                <button
                  className="btn-style"
                  onClick={() => setbtnmode(true)}
                >
                  i
                </button>
              ) : (
                <div className="btnmode">
                  <button
                    className="btn-style"
                    id="dlt"
                    onClick={() => editHandler(task)}
                  >
                    <img src={edit} alt="edit" />
                  </button>
                  <button
                    className="btn-style"
                    onClick={() => deleteHandler(task)}
                  >
                    x
                  </button>
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
    </>

  );
};

export default TodoList;
