import { useContext, useState } from "react";
import { KanbanContext } from "../App";

const EditTask = (index) => {
    const {taskList, setTaskList, taskTitle, setTaskTitle, taskDescription, setTaskDescription, isDisabled, setIsDisabled} = useContext(KanbanContext)

    const handleChange = ({target}) => {
        const {name, value} = target
        if (name === "taskTitle") setTaskTitle(value)
        if (name === "taskDescription") setTaskDescription(value)
    }

    const handleEdit = (e) => {
        e.preventDefault()
        const newTaskList = [...taskList];
        newTaskList[index] = {title: taskTitle, description: taskDescription}
        setTaskList(newTaskList)
    }

    return (
        <>
        <div className="task-edit" disabled={isDisabled}>
            <form className="new-task-form">

                <input className="task-title-input"
                name="taskTitle"
                value={taskTitle}
                type="text"
                placeholder="Title" 
                required minLength={0} 
                maxLength={16}
                onChange={handleChange}
                ></input>

                <input 
                name="taskDescription"
                value={taskDescription}
                type="text" 
                placeholder="Description" 
                required maxLength={100}
                size={50}
                onChange={handleChange}
                ></input>

                <button
                onClick={handleEdit} 
                type="submit"
                >Edit
                </button>

            </form>
        </div>
        </>
    )
}

export default EditTask;