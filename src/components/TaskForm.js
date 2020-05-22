import React, { useState, useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
  const { addTask } = useContext(TaskListContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(title);
    setTitle("");
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Add Task..."
        value={title}
        onChange={handleChange}
        required
        className="task-input"
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          Add task
        </button>
        <button className="btn clear-btn">Clear</button>
      </div>
    </form>
  );
};

export default TaskForm;
