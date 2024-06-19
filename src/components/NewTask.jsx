import { useContext} from "react";
import { KanbanContext } from "../App";


//task
//description
//submit

const NewTask = ({taskList, setTaskList}) => {
    // const [taskTitle, setTaskTitle] = useState("")
    // const [taskDescription, setTaskDescription] = useState("")

    const {taskTitle, setTaskTitle, taskDescription, setTaskDescription} = useContext(KanbanContext)

    const currentTaskTitle = taskTitle
    const currentTaskDescription = taskDescription

    const handleChange = ({target}) => {
        const {name, value} = target
        if (name === "taskTitle") setTaskTitle(value)
        if (name === "taskDescription") setTaskDescription(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(taskTitle, taskDescription)
        const newTaskList = [ ...taskList, {title: taskTitle, description: taskDescription}]
        console.log(newTaskList)
        setTaskList(newTaskList);
    }

    
    return(
    <>
    <button className="new-task-button">Here</button>
    <form className="new-task-form">

        <input className="task-title-input"
        name="taskTitle"
        value={taskTitle}
        type="text" 
        placeholder="Title" 
        required minLength={0} 
        maxLength={16}
        onChange={handleChange}
        ></input>

        <input 
        name="taskDescription"
        value={taskDescription}
        type="text" 
        placeholder="description" 
        required maxLength={100}
        size={50}
        onChange={handleChange}
        ></input>

        <button
        onClick={handleSubmit} 
        type="submit"
        >Submit
        </button>

    </form>
    </>

    )
}

export default NewTask;