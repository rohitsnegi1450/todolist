import React from "react";
import "./../App.css";

const TodoInput = (props) => {
    const {
        handleInputValue,
        handleTodoInput,
        filterText,
        inputValue,
        handleFilterTextChange,
        alerttext,
    } = props;

    return (
        <div>
            <input
                type="text"
                className="inputfield"
                value={inputValue}
                placeholder="Add Your Task"
                onChange={handleInputValue}
                autoFocus
            />

            <input
                type="text"
                className="searchfield"
                placeholder="search...&#128269;"
                value={filterText}
                onChange={handleFilterTextChange}
            />

            <button className="btn" onClick={handleTodoInput}>
                Add Task
      </button>

            <br />
            <span className="alerttxt">{alerttext}</span>
        </div>
    );
};
export default TodoInput;