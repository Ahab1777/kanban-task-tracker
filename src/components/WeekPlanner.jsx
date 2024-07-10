import { useContext } from "react"



const WeekPlanner = () => {


    return(
        <>
        <h3>Monday</h3>
        <div className='week-container'>
            <div className="day-card">
                <div className="day-column time-column">
                    <div>08:00</div>
                    <div>09:00</div>
                    <div>10:00</div>
                    <div>11:00</div>
                    <div>12:00</div>
                    <div>13:00</div>
                    <div>14:00</div>
                    <div>15:00</div>
                    <div>16:00</div>
                    <div>17:00</div>
                    <div>18:00</div>            
                </div>
                <div className="day-column task-column">
                <div>08:00</div>
                    <div>09:00</div>
                    <div>10:00</div>
                    <div>11:00</div>
                    <div>12:00</div>
                    <div>13:00</div>
                    <div>14:00</div>
                    <div>15:00</div>
                    <div>16:00</div>
                    <div>17:00</div>
                    <div>18:00</div>
                </div>
            </div>

        </div>





        <div className="day-item">Tuesday</div>
        <div className="day-item">Wednesday</div>
        <div className="day-item">Thursday</div>
        <div className="day-item">Friday</div>
        <div className="day-item">Saturday</div>
        <div className="day-item">Sunday</div>
        </>
    )
}

export default WeekPlanner