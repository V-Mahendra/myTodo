import React from "react";
import "../styles/DeleteBox.scss";

const DeleteBox = () => {

  // const trueHandler = () => {
  // };
  // const falseHandler = () => {
  // };
  return (
    <div className="dlt-container">
      <div className="dlt-box">
        <span className="topline"></span>
        <h3>Delete this task ?</h3>
        <div className="btn-group">
          <button onClick={() => trueHandler(task)}>Yes</button>
          <button onClick={() => falseHandler(task)}>No</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBox;
