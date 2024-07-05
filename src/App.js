import './App.css';
import NewTask from './components/NewTask';
import BoardCard from './components/BoardCard';
import EditTask from './components/EditTask';
import { useState, createContext } from 'react';

export const KanbanContext = createContext(null)

function App() {

  
  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)
  const [taskList, setTaskList] = useState([
    {
      title: "wash dishes",
      description:"bla bla bla",
      createdOn: '3/July/2024 - 10:17',
      etc: '0,5' ,
      colorCode: '0000FF'
    },
    {
      title: "boletos",
      description: 'pay pay pay pay',
      createdOn: '3/July/2024 - 10:17',
      etc: '0,5' ,
      colorCode: 'FFFF00'
    },
    {
      title: "learn to fly",
      description: "buy wings and jump from balcony",
      createdOn: '3/July/2024 - 10:17',
      etc: '2,5' ,
      colorCode: 'FF0000'
    },
  
  
  ])


  return (
    <>
    <div className="App">

    <h1>Kanban Task Manager</h1>

      <KanbanContext.Provider value={{taskTitle, setTaskTitle, taskDescription, setTaskDescription, isDisabled, setIsDisabled, taskList, setTaskList}}>
      {isDisabled ? <div className="disabler"></div> : null}      
      
      <div className='new-task-container'>

      <span>Click </span>
      
      <NewTask/>
      
      <span> to add a new task</span>

      </div>

      <div className='board-container'>

      {taskList.map((task, i) => {
        return (
          <BoardCard key={i} index={i} title={task.title} description={task.description} createdOn={task.createdOn} etc={task.etc}>  
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
