import './App.css';
import NewTask from './components/NewTask';
import BoardCard from './components/BoardCard';
import EditTask from './components/EditTask';
import { useState, createContext } from 'react';

export const KanbanContext = createContext(null)

function App() {

  
  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [isDisabled, setIsDisabled] = useState(true)
  const [taskList, setTaskList] = useState([
    {
      title: "wash dishes",
      description:"bla bla bla"
    },
    {
      title: "boletos",
      description: 'pay pay pay pay'
    },
    {
      title: "learn to fly",
      description: "buy wings and jump from balcony"
    },
    {
      title: "wash dishes",
      description:"bla bla bla"
    },
    {
      title: "boletos",
      description: 'pay pay pay pay'
    },
    {
      title: "learn to fly",
      description: "buy wings and jump from balcony"
    },
    {
      title: "wash dishes",
      description:"bla bla bla"
    },
    {
      title: "boletos",
      description: 'pay pay pay pay'
    },
    {
      title: "learn to fly",
      description: "buy wings and jump from balcony"
    }
  
  ])

  return (
    <>
    <div className="App">

    <h1>Kanban task manager</h1>

      <KanbanContext.Provider value={{taskTitle, setTaskTitle, taskDescription, setTaskDescription, isDisabled, setIsDisabled, taskList, setTaskList}}>

      <div className='new-task-container'>

      <span>Click </span>
      
      <NewTask/>
      
      <span> to add a new task</span>

      </div>

      <div className='board-container'>

      {taskList.map((task, i) => {
        return (
          <BoardCard key={i} index={i} title={task.title} description={task.description}>  
          </BoardCard>
        )        
      })}

      </div>
      

      </KanbanContext.Provider>

    </div>    
    </>
  );
}

export default App;
