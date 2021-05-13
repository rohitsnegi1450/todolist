import React from "react";
import "../App.css";
import { FaTrashAlt } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { FaPencilAlt } from "react-icons/fa";

const TaskList = (props) => {
    const {
        todoList,
        handleCheck,
        handleDelete,
        handlEdit,
        inputopen,
        handleChangeTask,
        handleSave,
    } = props;

    return (
        <div>
            {todoList.map((list, index) => {
                const { taskname, isChecked } = list;
                return (
                    <div className="list" key={index}>
                        <input
                            type="checkbox"
                            className="check"
                            checked={isChecked}
                            onChange={() => {
                                handleCheck(index);
                            }}
                        />
                        {inputopen !== index && <span>{taskname}</span>}

                        {inputopen === index && (
                            <input
                                type="text"
                                className="editinput"
                                onChange={(e) => handleChangeTask(e)}
                                autoFocus
                            />
                        )}
                        {inputopen === index && (
                            <button onClick={() => handleSave(index)}>save</button>
                        )}

                        {isChecked === true && (
                            <span
                                style={{ float: "right" }}
                                onClick={() => {
                                    handleDelete(index);
                                }}
                            >
                                <FaTrashAlt />
                            </span>
                        )}
                        {
                            <span onClick={() => handlEdit(index)} className="complete">
                                <FaPencilAlt />
                            </span>
                        }
                        {isChecked === true && (
                            <span className="complete">
                                <GiCheckMark />
                            </span>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default TaskList;