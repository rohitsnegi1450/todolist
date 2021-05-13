import React from "react";
import { TodoInput, TaskList } from "../Components/Index";

class TodoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // States for inputValue & list
            inputValue: "",
            todoList: [],
            filterText: "",
            alerttext: "",
            inputopen: -1,
            editname: "",
        };
        // Binding the constructor
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleTodoInput = this.handleTodoInput.bind(this);
        this.handleInputValue = this.handleInputValue.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handlEdit = this.handlEdit.bind(this);
        this.handleChangeTask = this.handleChangeTask.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    // searchbar function
    handleFilterTextChange(e) {
        const refList = this.state.todoList;
        const filterText = this.state.filterText;
        const rows = [];

        this.setState({
            filterText: e.target.value,
        });

        refList.forEach((refLis) => {
            if (refLis.taskname.indexOf(filterText) === -1) {
                return;
            }
            rows.push(refLis.taskname);
        });
        console.log(rows);
    }

    handleInputValue(e) {
        // changing state for inputValue
        this.setState({
            inputValue: e.target.value,
        });
    }

    // task delete function
    handleDelete(index) {
        let refList = this.state.todoList;
        refList.splice(index, 1);

        this.setState({
            todoList: refList,
        });
    }

    // todo input function
    handleTodoInput() {
        // writing the logics for inserting the inputValues in todoList array
        const { todoList, inputValue } = this.state;
        let refTodoList = todoList;
        if (inputValue.length > 4) {
            refTodoList.push({
                taskname: inputValue,
                isChecked: false,
            });
        } else {
            this.setState({
                alerttext: "*required 5 characters minimum",
            });
        }
        this.setState({
            todoList: refTodoList,
            inputValue: "",
        });
    }

    // checkbox function
    handleCheck(index) {
        let refList = this.state.todoList;

        if (!refList[index].isChecked) refList[index].isChecked = true;
        else refList[index].isChecked = false;

        this.setState({
            todoList: refList,
        });
    }

    // edit function
    handlEdit(index) {
        this.setState({
            inputopen: index,
        });
    }

    handleChangeTask(e) {
        this.setState({
            editname: e.target.value,
        });
    }

    handleSave(index) {
        let refList = this.state.todoList;
        if (this.state.editname.length >= 5) {
            refList[index].taskname = this.state.editname;
        }
        this.setState({
            inputopen: !this.state.inputopen,
        });
    }

    render() {
        const {
            inputValue,
            todoList,
            filterText,
            alerttext,
            inputopen,
            editname,
        } = this.state;

        return (
            <div>
                <TodoInput
                    inputValue={inputValue}
                    filterText={filterText}
                    handleInputValue={this.handleInputValue}
                    handleTodoInput={this.handleTodoInput}
                    handleFilterTextChange={this.handleFilterTextChange}
                    alerttext={alerttext}
                />

                <TaskList
                    todoList={todoList}
                    inputopen={inputopen}
                    editname={editname}
                    handleChangeTask={this.handleChangeTask}
                    handleCheck={this.handleCheck}
                    handleDelete={this.handleDelete}
                    handlEdit={this.handlEdit}
                    handleSave={this.handleSave}
                />
            </div>
        );
    }
}
export default TodoContainer;