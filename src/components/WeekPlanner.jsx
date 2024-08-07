import { useContext, useState, useMemo } from "react"
import { KanbanContext } from "../App"
import { range, getMonday, areDatesSame, addDateBy, MONTHS, DAYS } from "./util"
import { addDays, isToday, getWeek } from 'date-fns'
import { Task } from "./Task"

const getFridayFromMonday = () => {
    return addDateBy(getMonday(), 6)
}


const WeekPlanner = () => {
    const {taskList, setTaskList} = useContext(KanbanContext)
    const [mondayDate, setMondayDate] = useState(getMonday)
    const [sundayDate, setSundayDate] = useState(getFridayFromMonday)
    const [currentWeek, setCurrentWeek] = useState(getWeek(new Date()))

    const prevWeek = () => {
        //TODO - adicionar um switch
        const prevMonday = addDateBy(mondayDate, -7)
        const prevSunday = addDateBy(sundayDate, -7)
        setMondayDate(prevMonday)
        setSundayDate(prevSunday)
        setCurrentWeek(getWeek(mondayDate))
    };

    const nextWeek = () => {
        const nextMonday = addDateBy(mondayDate, 7)
        const nextSunday = addDateBy(sundayDate, 7)
        setMondayDate(nextMonday)
        setSundayDate(nextSunday)
        setCurrentWeek(getWeek(mondayDate))
    };
    
    //calculate is-today class
    const isTodayArray = useMemo(() => DAYS.map(day => {
        const referenceDay = mondayDate;
        const currentMapDateindex = DAYS.indexOf(day);
        const currentMapDate = addDays(referenceDay, currentMapDateindex)
        return isToday(currentMapDate)

    }), [mondayDate])

    let colorStyle = {
        backgroundColor: 'rgba(255, 255, 0, 0.5)',
    };

    
    
    

    return(
        <>
        <div className="week-selector">
            <button 
            onClick={() => prevWeek()}
            >Previous</button>
            <button 
            onClick={() => nextWeek()}
            >Next</button>
            <p>Today: {new Date().toDateString()}</p>
            <p>From: {mondayDate.toDateString()}</p>
            <p>To: {sundayDate.toDateString()}</p>
            <p>Week: {currentWeek} </p>
            <div>Unappointed tasks:
                {taskList.map((task, index) => (
                    (task.scheduledForWeek === '' ? <div key={index}>{task.title}</div> : '')
                ))}
            </div>


        </div>
        <div className="calendar-grid">
            <div className="hours-lines">
                <span className="hour-row"></span>
                {range(25).map((hour, index) => (
                    <span className="hour-row" key={index}>{hour}</span>
                ))}
            </div>
            <div className="week-column">
                {DAYS.map((day, index) => (
                    <div className="day-wrapper" key={index} taskList={taskList}>
                        <div 
                        className={"day-column " + (isTodayArray[index] ? "is-today" : '')}
                        key={index}
                        >{day}

                            {taskList.map((task, taskIndex) => (
                                (task.scheduledWeek === currentWeek ? (task.scheduledDay === index ? <Task task={task} key={taskIndex}></Task> : '') : '')
                            
                            ))}

                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default WeekPlanner