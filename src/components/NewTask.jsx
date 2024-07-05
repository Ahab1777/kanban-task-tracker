import { useContext, useState} from "react";
import { KanbanContext } from "../App";


//task
//description
//submit

const NewTask = () => {
    //grab context from App
    const {taskList, setTaskList, setIsDisabled} = useContext(KanbanContext)
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
        const currentDate = new Date();
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const createdOn = `${currentDate.getDay()}/${months[currentDate.getMonth()]}/${currentDate.getFullYear()} - ${currentDate.getHours()}:${currentDate.getMinutes()}`
        const newTaskList = [ ...taskList, {title: taskTitle, description: taskDescription, createdOn}]
        console.log(createdOn)
        setTaskList(newTaskList);
        setIsDisabled(false)
        setTaskEdit(false)
    }

    const handleCloseButton = (e) => {
        e.preventDefault()
        
        setIsDisabled(false)
        setTaskEdit(false)
    }

    
    return(
    <>
    <button className="new-task-button" onClick={() => {
        setTaskEdit(true)
        setIsDisabled(true)
    }}>Here</button>

    
        {taskEdit ? <div className="new-task-popup">
            
            <form className="new-task-form" disabled={true}>
                <button className="close-button-new-task" onClick={handleCloseButton}>X</button>

                <div className="title-block">

                    <label htmlFor="taskTitle">Title</label>
                    <input className="task-title-input"
                    name="taskTitle"
                    id="taskTitle"
                    value={taskTitle}
                    type="text" 
                    placeholder="Title" 
                    required minLength={0} 
                    maxLength={16}
                    onChange={handleChange}
                    ></input>

                </div>

                <div className="color-block">
                    <input type="radio" name="colorCode" id="radioBlue" value={'0000FF'}></input>
                    <label htmlFor="radioBlue">Blue</label>
                    
                    <input type="radio" name="colorCode" id="radioYellow" value={'FFFF00'}></input>
                    <label htmlFor="radioYellow">Yellow</label>

                    <input type="radio" name="colorCode" id="radioRed" value={'FF0000'} checked></input>
                    <label htmlFor="radioRed">Red</label>
                </div>

                <div className="description-block">

                    <label htmlFor="taskDescription">Description</label>
                    <textarea 
                    name="taskDescription"
                    id="taskDescription"
                    value={taskDescription}
                    type="text" 
                    placeholder="description" 
                    required
                    maxLength={100}
                    size={50}
                    onChange={handleChange}
                    ></textarea>

                </div>


                <button
                className="confirm-button-new-task"
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