import { useContext } from "react"
import { KanbanContext } from "../App"
import { range, getMonday, areDatesSame, addDateBy } from "./util"

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const WeekPlanner = () => {
    const {taskList, setTaskList} = useContext(KanbanContext)


    let colorStyle = {
        'background-color': '#ff3e90',
    };

    const isToday = (index) => {
        console.log('new date', new Date())
        // console.log('getMonday', new Date(getMonday()))
        console.log('addDateBy', addDateBy(getMonday(), index))
        return areDatesSame(new Date(), addDateBy(getMonday(), index))
    } 

    return(
        <>
        <div className="calendar-grid">
            <div className="hours-lines">
                <span className="hour-row"></span>
                {range(25).map((hour, index) => (
                    <span className="hour-row" key={index}>{hour}</span>
                ))}
            </div>
            <div className="week-column">
                {DAYS.map((day, index) => (
                    
                    isToday(index) 
                    ? <div 
                    className="day" 
                    key={index}
                    style={colorStyle}
                    >{day}</div>
                    : <div 
                    className="day-column" 
                    key={index}
                    >{day}</div>
                ))}
            </div>
        </div>
        </>
    )
}

export default WeekPlanner