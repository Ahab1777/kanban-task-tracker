import { useContext, useState } from "react"
import { KanbanContext } from "../App"
import { range, getMonday, areDatesSame, addDateBy, MONTHS, DAYS } from "./util"


const getFridayFromMonday = () => {
    return addDateBy(getMonday(), 6)
}


const WeekPlanner = () => {
    // const {taskList, setTaskList} = useContext(KanbanContext)
    const [mondayDate, setMondayDate] = useState(getMonday)
    const [sundayDate, setSundayDate] = useState(getFridayFromMonday)
    
    console.log('mondayDate', mondayDate)
    console.log('getMonday()', getMonday())
    
    const prevWeek = () => {
        const prevMonday = addDateBy(mondayDate, -7)
        const prevSunday = addDateBy(sundayDate, -7)
        setMondayDate(prevMonday)
        setSundayDate(prevSunday)
        console.log('mondaydate', mondayDate)
    };
    const nextWeek = () => {
        const nextMonday = addDateBy(mondayDate, 7)
        const nextSunday = addDateBy(sundayDate, 7)
        setMondayDate(nextMonday)
        setSundayDate(nextSunday)
    };
    
    
        let colorStyle = {
            backgroundColor: 'rgba(255, 255, 0, 0.5)',
        };
    
    
        //impura
        // const isToday = (index) => {
        //     return areDatesSame(new Date(), addDateBy(mondayDate, index))
        // } 


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
            <button 
            onClick={() => prevWeek()}
            >Previous</button>
            <button 
            onClick={() => nextWeek()}
            >Next</button>
            <p>Today: {new Date().toDateString()}</p>
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
                    //passar isToday como props com areDatesSame. O elemento que isToday for true será estilizado de acordo

                    // isToday(index) 
                    // ? <div 
                    // className="day" 
                    // key={index}
                    // style={colorStyle}
                    // >{day}</div>
                    // : 
                    <div 
                    className="day-wrapper"
                    isToday={areDatesSame(new Date(), addDateBy(mondayDate, index))} >

                        <div 
                        className="day-column" 
                        key={index}
                        >{day}</div>
                    </div>
                    
                ))}
            </div>
        </div>
        </>
    )
}

export default WeekPlanner