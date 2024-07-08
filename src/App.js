import './App.css';
import NewTask from './components/NewTask';
import BoardCard from './components/BoardCard';
import { useState, createContext } from 'react';

export const KanbanContext = createContext(null)

function App() {

  
  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [taskList, setTaskList] = useState([
    {
      title: "wash dishes",
      description:"bla bla bla",
      createdOn: '3/July/2024 - 10:17',
      fullDate: 'qwe',
      etc: '30' ,
      colorCode: '#add8e6'
    },
    {
      title: "boletos",
      description: 'pay pay pay pay',
      createdOn: '3/July/2024 - 10:17',
      etc: '30' ,
      colorCode: '#FFFF00'
    },
    {
      title: "learn to fly",
      description: "buy wings and jump from balcony",
      createdOn: '3/July/2024 - 10:17',
      etc: '135' ,
      colorCode: '#FF0000'
    },
  
  
  ])


  return (
    <>
    <div className="App">

    <h1>Kanban Task Manager</h1>

      <KanbanContext.Provider value={{taskTitle, setTaskTitle, taskDescription, setTaskDescription, taskList, setTaskList}}>
           
      
      <div className='new-task-container'>

      <span>Click </span>
      
      <NewTask/>
      
      <span> to add a new task</span>

      </div>

      <div className='board-container'>

      {taskList.map((task, i) => {
        return (
          <BoardCard key={i} index={i} title={task.title} description={task.description} createdOn={task.createdOn} etc={task.etc} colorCode={task.colorCode}>  
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
