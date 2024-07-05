import { useContext, useState, createContext } from "react"
import { KanbanContext } from "../App"
import EditTask from "./EditTask"

export const BoardContext = createContext(null)

const BoardCard = ({title, description, index, createdOn, etc}) => {
    // context fetcher
    const {taskList, setTaskList, setIsDisabled} = useContext(KanbanContext)
    //state managing edit mode activation
    const [editMode,setEditMode] = useState(false)
    //
    const [confirmDelete, setConfirmDelete] = useState(false)

    //create context for editMode to be passed to children
   

    const DeleteConfirmation = () => {

    }

    const DeleteTask = () => {
        const newTaskList = [...taskList]
        newTaskList.splice(index, 1)
        setTaskList(newTaskList)
        setConfirmDelete(false)
    }

    return (
        <>
        
            <div className="board-item">
                <label htmlFor="task-title">Title</label>
                <p name="task-title">{title}</p>
                <label htmlFor="task-description">Description</label>
                <p name="task-description">{description}</p>
                <label htmlFor="createdOn"></label>
                <p name="createdOn">{createdOn}</p>
                <label htmlFor="etc"></label>
                <p name="etc">ETC: <span>{etc}</span> hours</p>
                <button onClick={() => {
                    setEditMode(true)
                    setIsDisabled(true)
                }}>Edit</button>
                <button onClick={() => {setConfirmDelete(true)}}>Delete</button>
                {editMode ? 
                <div className="task-edit" > 
                    <EditTask index={index} title={title} description={description} setEditMode={setEditMode}/>
                </div> : null                
            }
                {confirmDelete ?
                <div className="delete-confirmation">
                    <p>Confirm deletion of <span>{title}</span>?</p>
                    <button onClick={DeleteTask}>Yes</button>
                    <button onClick={() => {setConfirmDelete(false)}}>No</button>
                </div> : null }
            </div>
        
        </>
    )
}

export default BoardCard;