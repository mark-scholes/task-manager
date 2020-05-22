import React, { createContext, useState } from "react";
import { v5 as uuid } from "uuid";

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

  const addTask = (task) => {
    setState([...state, { task, id: uuid }]);
  };
  return (
    <TaskListContext.Provider value={{ state, addTask }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
