import { useContext, useState} from "react";
import { KanbanContext } from "../App";


//task
//description
//submit

const NewTask = () => {
    //grab context from App
    const {taskList, setTaskList} = useContext(KanbanContext)
    //create states to set new task
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [taskEdit, setTaskEdit] = useState(false)
    //handle user typing
    const handleChange = ({target}) => {
        const {name, value} = target
        if (name === "taskTitle") setTaskTitle(value)
        if (name === "taskDescription") setTaskDescription(value)
    }
    //send newly created task to taskList on App
    const handleSubmit = (e) => {
        e.preventDefault()
        const newTaskList = [ ...taskList, {title: taskTitle, description: taskDescription}]
        setTaskList(newTaskList);
        setTaskEdit(false)
    }

    const handleCloseButton = (e) => {
        e.preventDefault()
        setTaskEdit(false)
    }

    
    return(
    <>
    <button className="new-task-button" onClick={() => setTaskEdit(true)}>Here</button>

    
        {taskEdit ? <div className="task-edit">
        
            <form>

                <input className="task-title-input"
                name="taskTitle"
                value={taskTitle}
                type="text" 
                placeholder="Title" 
                required minLength={0} 
                maxLength={16}
                onChange={handleChange}
                ></input>

                <button onClick={handleCloseButton}>X</button>

                <input 
                name="taskDescription"
                value={taskDescription}
                type="text" 
                placeholder="description" 
                required
                maxLength={100}
                size={50}
                onChange={handleChange}
                ></input>

                <button
                onClick={handleSubmit} 
                type="submit"
                >Submit
                </button>

            </form>

        </div> : null}


    
    </>

    )
}

export default NewTask;