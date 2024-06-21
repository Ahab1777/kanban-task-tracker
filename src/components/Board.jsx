import { useContext, useState } from "react"
import { KanbanContext } from "../App"

const Board = ({title, description, index, children}) => {

    const {taskList, setTaskList, taskTitle, setTaskTitle, taskDescription, setTaskDescription, isDisabled, setIsDisabled} = useContext(KanbanContext)

   
    console.log(children)

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
            <button onClick={() => setIsDisabled(false)}>Edit</button>
            <button onClick={DeleteTask}>Delete</button>
            <div className="task-edit" disabled={isDisabled}>
                {children}
            </div>
        </div>
        </>
    )
}

export default Board;