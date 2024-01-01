// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TaskForm from "./components/TaskForm";
import "./App.css";

function App() {
  return (
      <>
      <TaskForm />
      </>
  );
}

export default App;
