// TaskForm/TaskForm.js
import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = () => {
  const[isCompleted, setIsCompleted] = useState(false);


  return (
    <div className="App">
      <h1>My Todo</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label1>Title</label1>
            <input type="text" placeholder="Enter task" />
          </div>
          <div className="todo-input-item">
            <label1>Description</label1>
            <input type="text" placeholder="Enter task" />
          </div>
          <div className="todo-input-item">
            <button type="button" className="primaryBtn">
              Add Task
            </button>
          </div>
        </div>

        <div className="btn-area">
          <button className={`secondaryBtn ${isCompleted===false && 'active'}`} onClick={()=>setIsCompleted(false)}>Todo</button>
          <button className={`secondaryBtn ${isCompleted===true && 'active'}`} onClick={()=>setIsCompleted(true)}>Comleted</button>
        </div>

        <div className="todo-list">
          <div className="todo-list-item">
            <h3>Task 1</h3>
            <p>Task 1 description</p>
          </div>
        </div>
      </div>

      <div />
    </div>
  );
};

export default TaskForm;
