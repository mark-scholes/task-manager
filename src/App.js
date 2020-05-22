import React, { useState } from "react";
import "./App.css";
import TaskListContext from "./context/TaskListContext";
import TaskList from "./components/TaskLists";
import TaskListContextProvider from "./context/TaskListContext";
import TaskForm from "./components/TaskForm";
import Header from "./components/Header";

const App = () => {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;
