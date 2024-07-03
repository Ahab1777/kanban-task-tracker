import { useContext, useState, createContext } from "react"
import { KanbanContext } from "../App"
import EditTask from "./EditTask"

export const BoardContext = createContext(null)

const BoardCard = ({title, description, index, createdOn}) => {
    // context fetcher
    const {taskList, setTaskList, setIsDisabled} = useContext(KanbanContext)
    //state managing edit mode activation
    const [editMode,setEditMode] = useState(false)

    //create context for editMode to be passed to children
   

    const DeleteTask = () => {
        const newTaskList = [...taskList]
        newTaskList.splice(index, 1)
        setTaskList(newTaskList)
    }

    return (
        <>
        {/* <BoardContext.Provider value={editMode}> */}
            <div className="board-item">
                <label htmlFor="task-title">Title</label>
                <p name="task-title">{title}</p>
                <label htmlFor="task-description">Description</label>
                <p name="task-description">{description}</p>
                <label htmlFor="createdOn"></label>
                <p>{createdOn}</p>
                <button onClick={() => {
                    setEditMode(true)
                    setIsDisabled(true)
                }}>Edit</button>
                <button onClick={DeleteTask}>Delete</button>
                {editMode ? 
                <div className="task-edit" > 
                    <EditTask index={index} title={title} description={description} setEditMode={setEditMode}/>
                </div> : null                
            }
            </div>
        {/* </BoardContext.Provider> */}
        </>
    )
}

export default BoardCard;