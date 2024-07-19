import './App.css';
import NewTask from './components/NewTask';
import WeekPlanner from './components/WeekPlanner';
import { useState, createContext } from 'react';
import BoardContainer from './components/BoardContainer';

export const KanbanContext = createContext(null)

const SCREENS = {
  weekPlanner: 'WeekPlanner',
  boardContainer: 'BoardContainer'
}


function App() {

  const [screen, setScreen] = useState(SCREENS.boardContainer)
  // const [taskTitle, setTaskTitle] = useState("")
  // const [taskDescription, setTaskDescription] = useState("")
  const [taskList, setTaskList] = useState([
    {
      title: "wash dishes",
      description:"bla bla bla",
      createdOn: '3/July/2024 - 10:17',
      fullDate: new Date(2024, 6, 19, 10),
      etc: '60' ,
      colorCode: '#add8e6'
    },
    {
      title: "boletos",
      description: 'pay pay pay pay',
      createdOn: '3/July/2024 - 10:17',
      fullDate: new Date(2024, 6, 16, 10),
      etc: '120' ,
      colorCode: '#FFFF00'
    },
    {
      title: "learn to fly",
      description: "buy wings and jump from balcony",
      createdOn: '3/July/2024 - 10:17',
      fullDate: new Date(2024, 6, 17, 10),
      etc: '240' ,
      colorCode: '#FF0000'
    }])

  const updateList = (newTaskObject) => {
    setTaskList((prevList) => [...prevList, newTaskObject])
    
  }

  function toggleScreen(e) {
    const currentScreen = e.target.value;
    if (currentScreen === screen) {
      return
    } else if (currentScreen !== screen){
      setScreen(currentScreen)
    }
  }

 

  const providerValue = {
    taskList,
    // setTaskList
    updateList
  }

  return (
    <>
    <div className="App">

    <h1>Kanban Week Planner</h1>

      {/* previsamente retirados do provider => taskTitle, setTaskTitle, taskDescription, setTaskDescription,  */}
      <KanbanContext.Provider value={providerValue}> 
           {/* -passar a o atual board de tarefas para um componente único.
                - criar modal com ternary operator para dar switch entre week planner e boardlist  */}

      <div className='dashboard'>
        <div className='new-task-button'>

          <span>Click </span>
          <NewTask/>      
          <span> to add a new task</span>

        </div>
        <div>
          <span>Click </span>
          <button value={SCREENS.boardContainer} onClick={toggleScreen}>Here</button>   
          <span> see your backlog</span>
        </div>

        <div className='week-button'>
          <span>Click </span>
          <button value={SCREENS.weekPlanner} onClick={toggleScreen}>Here</button>      
          <span> to manage your week</span>
        </div>
        
      </div>
        {/* switch case top render dashboard based on the screen variable state */}
        {(() => {
          switch (screen) {
            case 'WeekPlanner': 
              return <WeekPlanner></WeekPlanner>;
            case 'BoardContainer': 
              return <BoardContainer></BoardContainer>;
            default: 
              return <WeekPlanner></WeekPlanner>
          }
        })()}

     
      

      </KanbanContext.Provider>

    </div>    
    </>
  );
}

export default App;
