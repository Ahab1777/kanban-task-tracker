import { useContext, useState, useRef} from "react";
import { KanbanContext } from "../App";
import { MONTHS } from "./util";


//task
//description
//submit

function NewTask() {
    //grab context from App
    const {setTaskList} = useContext(KanbanContext)

    //create states to set new task
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [completionTime, setCompletionTime] = useState(15)
    const [colorCode, setColorCode] = useState('0000FF')

    //state reset function for clearing form after closing it
    function resetStates() {
        setTaskTitle("")
        setTaskDescription("")
        setCompletionTime(15)
        setColorCode('')
    }

     //useRef for modal form and its toggle function - also responsible for masking background while modal is open
    const newTaskModal = useRef(null)

    // const [dialogIsOpen, setDialogIsOpen] = useState(false)
    // const closeDialog = () => setDialogIsOpen(false)

    function toggleNewTaskModal() {
        //confirm that there is a useRef referenced
        if (!newTaskModal.current){
            return;
        }
        //ensures that states are empty when opening and closing modal
        resetStates() 
        console.log(newTaskModal.current.hasAttribute("open"))
        //TODO change this back to ternary
        if (newTaskModal.current.hasAttribute("open")) {
            resetStates()
            newTaskModal.current.close()
            console.log('modal was closed')
        } else {
            newTaskModal.current.showModal()
            console.log('modal was opened')

        }

        
    }

    //handle user typing
    const handleChange = ({target}) => {
        const {name, value} = target
        if (name === "taskTitle") setTaskTitle(value)
        if (name === "taskDescription") setTaskDescription(value)
    }

    //handle color change
    function handleColorChange({target}) {
        setColorCode(target.value)
    }

    //handle task time button
    function handleTime(e) {
        const timeCommand = e.target.value;
        e.preventDefault()
        
        switch (timeCommand) {
            case "decreaseTime":
                //do not decrease time below 15min
                if(completionTime <= 60 ){
                    break;
                }
                setCompletionTime(prevTime => prevTime - 60);
                break;
            case "increaseTime":
                //do not increase time above 480min/8h
                if(completionTime >= 480 ){
                    break;
                }
                setCompletionTime(prevTime => prevTime + 60);
                break;
            default:
                break;
            }
            }
            
//send newly created task to taskList on App
const handleSubmit = (e) => {
    e.preventDefault()
    const currentDate = new Date();
    const createdOn = `${currentDate.getDay()}/${MONTHS[currentDate.getMonth()]}/${currentDate.getFullYear()} - ${currentDate.getHours()}:${currentDate.getMinutes()}`
    const newTask = {title: taskTitle, description: taskDescription, createdOn, fullDate: currentDate, etc: completionTime, colorCode}
    setTaskList(prevList => [...prevList, newTask]);
    toggleNewTaskModal()
    console.log('handleSubmit was activated')
    console.log(e)
}
            
            return(
                <>
    <button className="new-task-button" onClick={toggleNewTaskModal}>Here</button>

        <dialog 
        ref={newTaskModal} 
        // open={dialogIsOpen} 
        style={{backgroundColor: colorCode}}>

            <form onSubmit={handleSubmit} className="new-task-form" method="dialog">
                <button 
                    className="close-button-new-task" 
                    onClick={() => {
                        toggleNewTaskModal()
                }} 
                    type="button"
                    formNoValidate>X</button>

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
                // onClick={handleSubmit} 
                // type="submit" 
                >Submit
                </button>

            </form>
        </dialog>
            

       

    
    </>

    )
}

export default NewTask;