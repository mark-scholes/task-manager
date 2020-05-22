import React, { useContext, useState } from "react";
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {
  const { addTask } = useContext(TaskListContext);
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        className="task-input"
        placeholder="Add new task"
        required
        value={task}
      />
      <div className="buttons">
        <button type="submit" className="btn add-task-btn">
          Add Task
        </button>
        <button className="btn clear-btn">Clear</button>
      </div>
    </form>
  );
};

export default TaskForm;
