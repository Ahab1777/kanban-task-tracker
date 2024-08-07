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

  const [screen, setScreen] = useState(SCREENS.weekPlanner)
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      title: "wash dishes",
      description:"bla bla bla",
      createdOn: '3/July/2024 - 10:17',
      fullDate: new Date(2024, 6, 19, 10),
      etc: 2 ,
      colorCode: '#add8e6',
      scheduledTime: '',
      scheduledWeek: 33,
      scheduledDay: 3
    },
    {
      id: 2,
      title: "boletos",
      description: 'pay pay pay pay',
      createdOn: '3/July/2024 - 10:17',
      fullDate: new Date(2024, 6, 16, 10),
      etc: 3 ,
      colorCode: '#FFFF00',
      scheduledTime: '',
      scheduledWeek: '',
      scheduledDay: 3
    },
    {
      id: 3,
      title: "learn to fly",
      description: "buy wings and jump from balcony",
      createdOn: '3/July/2024 - 10:17',
      fullDate: new Date(2024, 6, 17, 10),
      etc: 3 ,
      colorCode: '#FF0000',
      scheduledTime: 9,
      scheduledWeek: 32,
      scheduledDay: 4
    }])


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
    setTaskList
  }

  return (
    <>
    <div className="App">

    <h1>Kanban Week Planner</h1>

      <KanbanContext.Provider value={providerValue}> 
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
        {/* switch dashboard based on the screen variable state */}
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
