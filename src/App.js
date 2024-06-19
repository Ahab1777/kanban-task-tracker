import './App.css';
import NewTask from './components/NewTask';
import Board from './components/Board';
import { useState } from 'react';


function App() {
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
    }
  
  ])

  return (
    <div className="App">
      <p>Click</p>
      <NewTask setTaskList={setTaskList} taskList={taskList}/>
      <p>to add a new task</p>
      {taskList.map((task, i) => {
        return (
          <Board key={i} index={i} title={task.title} description={task.description} setTaskList={setTaskList} taskList={taskList}/>
        )        
      })}
    </div>
  );
}

export default App;
