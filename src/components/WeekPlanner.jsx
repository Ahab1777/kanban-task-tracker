import { useContext } from "react"
import { KanbanContext } from "../App"
import { range } from "./util"

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const WeekPlanner = () => {
    const {taskList, setTaskList} = useContext(KanbanContext)

    return(
        <>
        <div className="calendar-grid">
            <div className="hours-line">
                {range(25).map((hour) => (
                    <span>{hour}</span>
                ))}
            </div>
            <div className="week-column">
                {DAYS.map((day, index) => (
                    <div className="day-column">{day}</div>
                ))}
            </div>
        </div>
        </>
    )
}

export default WeekPlanner