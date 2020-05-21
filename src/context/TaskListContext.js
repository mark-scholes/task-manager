import React, { createContext, useState } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [state, setState] = useState([
    {
      task: "Coding",
      id: 6,
    },
    {
      task: "Exercise",
      id: 40,
    },
    {
      task: "Washing",
      id: 30,
    },
  ]);
  return (
    <TaskListContext.Provider value={{ state }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
