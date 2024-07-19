import { useContext, useState } from "react"
import { KanbanContext } from "../App"
import { range, getMonday, areDatesSame, addDateBy, MONTHS, DAYS } from "./util"

const WeekPlanner = () => {
    // const {taskList, setTaskList} = useContext(KanbanContext)
    const [mondayDate, setMondayDate] = useState(getMonday())
    // const [sundayDate, setSundayDate] = useState(addDateBy(getMonday(), 7))
    const sundayDate = addDateBy(getMonday(), 6)

    let colorStyle = {
        backgroundColor: 'rgba(255, 255, 0, 0.5)',
    };

    const isToday = (index) => {
        return areDatesSame(new Date(), addDateBy(getMonday(), index))
    } 

    const prevWeek = () => setMondayDate(addDateBy(mondayDate, -7));
    const nextWeek = () => setMondayDate(addDateBy(mondayDate, 7));

    // const displayDateByDay = (day) => {
    //     switch(day){
    //         case 'monday':
    //             return mondayDate.toDateString()
    //         case 'sunday':
    //             return sundayDate.toDateString();
    //         default:
    //             return
    //     }
    // }
    

    return(
        <>
        <div className="week-selector">
            {/* <button onClick={() => prevWeek()}>Previous</button> */}
            {/* <button onClick={() => nextWeek()}>Next</button> */}
            {/* <p>Today: {new Date().toDateString()}</p> */}
            <p>From: {mondayDate.toDateString()}</p>
            <p>To: {sundayDate.toDateString()}</p>


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