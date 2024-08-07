import { useContext, useState, useRef} from "react";
import { KanbanContext } from "../App";

const EditTask = ({title, description, index, createdOn, etc, colorCode}) => {
    //grab context from App.js
    const {taskList, setTaskList} = useContext(KanbanContext)
    

    //create useState to set previous value to current edit
    const [titleEdit, setTitleEdit] = useState(title)
    const [descriptionEdit, setDescriptionEdit] = useState(description)
    const [completionTimeEdit, setCompletionTimeEdit] = useState(Number(etc))
    const [colorCodeEdit, setColorCodeEdit] = useState(colorCode)
    
    

    //handle user typing
    const handleChange = ({target}) => {
        const {name, value} = target
        if (name === "taskTitle") setTitleEdit(value)
        if (name === "taskDescription") setDescriptionEdit(value)
    }

    //handle color change
    function handleColorChange({target}) {
        setColorCodeEdit(target.value)
    }

    //set newly edited task to taskList
    const handleEdit = (e) => {
        e.preventDefault()
        const newTaskList = [...taskList];
        newTaskList[index] = {title: titleEdit, description: descriptionEdit, createdOn, etc: completionTimeEdit, colorCode: colorCodeEdit}
        setTaskList(newTaskList)
        toggleEditTaskModal()
    }

     //useRef for modal form and its toggle function - also responsible for masking background while modal is open
    const editTaskModal = useRef(null)

    function toggleEditTaskModal() {
        if (!editTaskModal.current){
            return;
        }
      
        editTaskModal.current.hasAttribute("open")
        ? editTaskModal.current.close()
        : editTaskModal.current.showModal()
    }


    //handle task time button
    function handleTime(e) {
        const timeCommand = e.target.value;
        e.preventDefault()
        
        switch (timeCommand) {
            case "decreaseTime":
                //do not decrease time below 15min
                if(completionTimeEdit <= 0.5 ){
                    break;
                }
                setCompletionTimeEdit(prevTime => prevTime - 0.5);
                break;
            case "increaseTime":
                //do not increase time above 480min/8h
                if(completionTimeEdit >= 8 ){
                    break;
                }
                setCompletionTimeEdit(prevTime => prevTime + 0.5);
                break;
            default:
                break;
            }
            }


    return (
        <>
            <button className="edit-task-button" onClick={toggleEditTaskModal}>Edit</button>
            <dialog ref={editTaskModal} style={{backgroundColor: colorCodeEdit}}>


                <form 
                // onSubmit={handleEdit} 
                className="new-task-form" 
                method="dialog">
                    <button 
                    type="button" 
                    className="close-button-new-task" 
                    onClick={toggleEditTaskModal}>X</button>

                    <div 
                    className="title-block">

                        <label 
                        htmlFor="taskTitle"
                        >Title</label>
                        <input className="task-title-input"
                        name="taskTitle"
                        id="taskTitle"
                        value={titleEdit}
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
                          <span id="etc-input">{completionTimeEdit} hours</span>
                        <div>

                        <button value="increaseTime" onClick={handleTime}>&uarr;</button>
                        <button value="decreaseTime" onClick={handleTime}>&darr;</button>                    

                        </div>
                        
                    </div>

                    <div className="description-block">

                        <label htmlFor="taskDescription">Description</label>
                        <textarea 
                        name="taskDescription"
                        id="taskDescription"
                        value={descriptionEdit}
                        type="text" 
                        placeholder="description" 
                        maxLength={100}
                        size={50}
                        onChange={handleChange}
                        ></textarea>

                    </div>


                    <button
                    className="confirm-button-new-task"
                    onClick={handleEdit} 
                    type="button" //This way there is no submit event, just the edit funtion is called.
                    >Edit
                    </button>

                </form>
            </dialog>
        </>
        
        
    )
}

export default EditTask;