import React, { useContext } from "react";
import Context, { TaskListContext } from "../context/TaskListContext";
import Task from "./Task";

const TaskList = () => {
  const { state } = useContext(TaskListContext);
  return (
    <div>
      <ul className="list">
        {state.map((items) => {
          return <Task />;
        })}
      </ul>
    </div>
  );
};

export default TaskList;
