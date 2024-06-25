import { useContext, useState } from "react"
import { KanbanContext } from "../App"

const BoardCard = ({title, description, index, children}) => {

    const {taskList, setTaskList, taskTitle, setTaskTitle, taskDescription, setTaskDescription, isDisabled, setIsDisabled} = useContext(KanbanContext)
    //state managing edit mode activation
    const [editMode,setEditMode] = useState(false)
   

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
            <button onClick={() => setEditMode(true)}>Edit</button>
            <button onClick={DeleteTask}>Delete</button>
            <div className="task-edit" style={{display: editMode ? 'block' : 'none'}}> 
                {children}
                <button onClick={() => setEditMode(false)}>X</button>
            </div>
        </div>
        </>
    )
}

export default BoardCard;