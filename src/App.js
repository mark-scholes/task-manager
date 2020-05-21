import React, { useState } from "react";
import "./App.css";
import TaskListContext from "./context/TaskListContext";
import TaskList from "./components/TaskLists";
import TaskListContextProvider from "./context/TaskListContext";

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="App">
        <TaskList />
      </div>
    </TaskListContextProvider>
  );
};

export default App;
