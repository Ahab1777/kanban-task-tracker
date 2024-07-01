import { useContext, useState, createContext } from "react"
import { KanbanContext } from "../App"
import EditTask from "./EditTask"

export const BoardContext = createContext(null)

const BoardCard = ({title, description, index, key}) => {

    const {taskList, setTaskList, taskTitle, setTaskTitle, taskDescription, setTaskDescription, isDisabled, setIsDisabled} = useContext(KanbanContext)
    //state managing edit mode activation
    const [editMode,setEditMode] = useState(false)

    //create context for editMode to be passes to children
   

    const DeleteTask = () => {
        const newTaskList = [...taskList]
        newTaskList.splice(index, 1)
        setTaskList(newTaskList)
    }

    return (
        <>
        <BoardContext.Provider value={editMode}>
            <div className="board-item">
                <p>{title}</p>
                <p>{description}</p>
                <button onClick={() => setEditMode(true)}>Edit</button>
                <button onClick={DeleteTask}>Delete</button>
                {editMode ? 
                <div className="task-edit"> 
                    <EditTask index={index} title={title} description={description} setEditMode={setEditMode}/>
                </div> : null                
            }
            </div>
        </BoardContext.Provider>
        </>
    )
}

export default BoardCard;