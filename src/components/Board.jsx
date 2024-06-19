import { useState } from "react"

const Board = ({title, description, index, taskList, setTaskList}) => {
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")

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

    const DeleteTask = () => {
        const newTaskList = [...taskList]
        newTaskList.splice(index, 1)
        setTaskList(newTaskList)
    }

    return (
        <>
        <div className="board-item">
            <p>{title}</p>
            <p>{description}</p>
            <button>Edit</button>
            <button onClick={DeleteTask}>Delete</button>
            <div className="task-edit">

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
        </div>
        </>
    )
}

export default Board;