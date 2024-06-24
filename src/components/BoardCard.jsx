import { useContext, useState } from "react"
import { KanbanContext } from "../App"

const BoardCard = ({title, description, index, children}) => {

    const {taskList, setTaskList, taskTitle, setTaskTitle, taskDescription, setTaskDescription, isDisabled, setIsDisabled} = useContext(KanbanContext)
    const [editMode,setEditMode] = useState(false)
   
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
            <button onClick={() => setEditMode(true)}>Edit</button>
            <button onClick={DeleteTask}>Delete</button>
            <div className="task-edit" style={{display: editMode ? 'block' : 'none'}}>
                {children}
            </div>
        </div>
        </>
    )
}

export default BoardCard;