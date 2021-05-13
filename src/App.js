import React from "react";
import "./App.css";
import TodoContainer from "./Container/TodoContainer.js";
import { SiTodoist } from "react-icons/si";

function App() {
  return (
    <div className="App">
      <div className="heading">
        <span className="todoicon">
          <SiTodoist />
        </span>{" "}
        Todo App
      </div>
      <TodoContainer />
    </div>
  );
}

export default App;