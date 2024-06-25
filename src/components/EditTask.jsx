import { useContext, useState } from "react";
import { KanbanContext } from "../App";

const EditTask = ({index, title, description}) => {
    //grab context from App.js
    const {taskList, setTaskList} = useContext(KanbanContext)

    //create useState to set previous value to current edit
    const [titleEdit, setTitleEdit] = useState(title)
    const [descriptionEdit, setDescriptionEdit] = useState(description)
    

    //handle user typing
    const handleChange = ({target}) => {
        const {name, value} = target
        if (name === "taskTitle") setTitleEdit(value)
        if (name === "taskDescription") setDescriptionEdit(value)
    }

    //set newly edit task to taskList
    const handleEdit = (e) => {
        e.preventDefault()
        const newTaskList = [...taskList];
        newTaskList[index] = {title: titleEdit, description: descriptionEdit}
        setTaskList(newTaskList)
    }

    return (
        <>
        
            <form className="new-task-form">

                <div className="task-form-block">
                <label htmlFor="task-title-input" className="title-input-label">Title</label>
                <input className="task-title-input"
                name="taskTitle"
                value={titleEdit}
                type="text"
                placeholder="Title" 
                required minLength={0} 
                maxLength={16}
                onChange={handleChange}
                ></input>                
                </div>

                <div className="task-form-block">
                <label htmlFor="taskDescription">Description</label>
                <textarea 
                name="taskDescription"
                value={descriptionEdit}
                type="text" 
                
                placeholder="Description" 
                required
                maxLength={100}
                onChange={handleChange}
                ></textarea>
                </div>

                <button
                onClick={handleEdit} 
                type="submit"
                >Edit
                </button>

            </form>
        
        </>
    )
}

export default EditTask;