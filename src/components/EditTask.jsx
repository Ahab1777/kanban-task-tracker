import { useContext, useState, useRef } from "react";
import { KanbanContext } from "../App";

const EditTask = ({setEditMode, title, description, index, createdOn, etc, colorCode}) => {
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
        newTaskList[index] = [ ...taskList, {title: taskTitle, description: taskDescription, createdOn, fullDate: currentDate, etc: completionTime, colorCode}]
        setTaskList(newTaskList)
        setEditMode(false)
    }

    const handleCloseButton = (e) => {
        e.preventDefault()
        setEditMode(false)
    }

    //useRef for modal form and its toggle function - also responsible for masking background while modal is open
    const newTaskModal = useRef(null)

    function toggleNewTaskModal() {
        if (!newTaskModal.current){
            return;
        }
        newTaskModal.current.hasAttribute("open")
        ? newTaskModal.current.close() && setEditMode(false)
        : newTaskModal.current.showModal()
    }


    //handle task time button
    function handleTime(e) {
        const timeCommand = e.target.value;
        
        switch (timeCommand) {
            case "decreaseTime":
                //do not decrease time below 15min
                if(completionTime <= 15 ){
                    break;
                }
                setCompletionTime(prevTime => prevTime - 15);
                break;
                case "increaseTime":
                    //do not increase time above 480min/8h
                    if(completionTime >= 480 ){
                        break;
                    }
                    setCompletionTime(prevTime => prevTime + 15);
                    break;
                    default:
                        break;
                    }
                }


    return (
        <>
            <dialog ref={newTaskModal} style={{backgroundColor: colorCode}}>


                <form className="new-task-form" disabled={true} method="dialog">
                    <button className="close-button-new-task" onClick={toggleNewTaskModal}>X</button>

                    <div className="title-block">

                        <label htmlFor="taskTitle">Title</label>
                        <input className="task-title-input"
                        name="taskTitle"
                        id="taskTitle"
                        value={taskTitle}
                        type="text" 
                        placeholder="Title" 
                        minLength={0} 
                        maxLength={16}
                        onChange={handleChange}
                        ></input>

                    </div>

                    <div className="color-block">
                        <label htmlFor="radioBlue">Blue</label>
                        <input 
                        type="radio" 
                        name="colorCode" 
                        id="radioBlue" 
                        value={'#add8e6'} 
                        defaultChecked={colorCode === '#add8e6'}
                        onChange={handleColorChange}
                        ></input>
                        
                        <label 
                        htmlFor="radioYellow">Yellow</label>
                        <input 
                        type="radio" 
                        name="colorCode" 
                        id="radioYellow" 
                        value={'#FFFF00'} 
                        defaultChecked={colorCode === '#FFFF00'}
                        onChange={handleColorChange}
                        ></input>

                        <label 
                        htmlFor="radioRed">Red</label>
                        <input 
                        type="radio" 
                        name="colorCode" 
                        id="radioRed" 
                        value={'#FF0000'} 
                        defaultChecked={colorCode === '#FF0000'}
                        onChange={handleColorChange}
                        ></input>
                    </div>

                    <div className="time-block">
                        <label htmlFor="etc-input">Time to Complete</label>
                        {completionTime >= 60 
                        ? <span>{completionTime/60} h</span>
                        : <span>{completionTime} min</span>}
                        <button value="increaseTime" onClick={handleTime}>&uarr;</button>
                        <button value="decreaseTime" onClick={handleTime}>&darr;</button>                    
                    </div>

                    <div className="description-block">

                        <label htmlFor="taskDescription">Description</label>
                        <textarea 
                        name="taskDescription"
                        id="taskDescription"
                        value={taskDescription}
                        type="text" 
                        placeholder="description" 
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
            </dialog>
        
        </>
    )
}

export default EditTask;