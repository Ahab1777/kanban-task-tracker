import { useContext, useState, createContext, useRef } from "react"
import { KanbanContext } from "../App"
import EditTask from "./EditTask"

export const BoardContext = createContext(null)



const BoardCard = ({title, description, index, createdOn, etc, colorCode}) => {
    // context fetcher
    const {taskList, setTaskList} = useContext(KanbanContext)
    //confirmation delete
    const [confirmDelete, setConfirmDelete] = useState(false)

    //useRef for deletion confirmation modal
    const deletionConfirm = useRef(null)

    function toggleDeleteModal() {
        deletionConfirm.current.hasAttribute("open")
        ? deletionConfirm.current.close()
        : deletionConfirm.current.showModal()
    }

    //create context for editMode to be passed to children
   
    const DeleteTask = () => {
        const newTaskList = [...taskList]
        newTaskList.splice(index, 1)
        setTaskList(newTaskList)
        setConfirmDelete(false)
    }

    
    return (
        <>
        
            <div className="board-item item-backbround" style={{backgroundColor: colorCode}}>
                <label htmlFor="task-title">Title</label>
                <p name="task-title">{title}</p>
                <label htmlFor="task-description">Description</label>
                <p name="task-description">{description}</p>
                <label htmlFor="createdOn"></label>
                <p name="createdOn">{createdOn}</p>
                <label htmlFor="etc"></label>
                <p name="etc">ETC:
                     {etc >= 60 
                    ? <span>{etc/60} h</span>
                    : <span>{etc} min</span>}</p>

                <EditTask index={index} title={title} description={description} createdOn={createdOn} etc={etc} colorCode={colorCode}/>
                

                <button 
                onClick={() => {
                    setConfirmDelete(true)
                    toggleDeleteModal()
                }}>Delete</button>
                {confirmDelete 
                ? <dialog ref={deletionConfirm}> Confirm deletion of <span>{title}</span></dialog>
                : null}
            
               
            </div>
        
        </>
    )
}

export default BoardCard;