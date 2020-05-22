import React, { useContext } from "react";

const Task = ({ task }) => {
  return (
    <li className="list-item">
      <span>{task}</span>
      <div>
        <button className="btn-edit task-btn">
          <i className="fas fa-pen"></i>
        </button>
        <button className="btn-delete task-btn">
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  );
};
export default Task;
