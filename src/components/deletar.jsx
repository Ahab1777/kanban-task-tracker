import React, { useState, useMemo } from 'react';

function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Assuming you have a way to manage the selected date

  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Calculate isToday outside the loop
  const today = new Date();
  const isTodayArray = useMemo(() => DAYS.map(day => {
    const dayIndex = DAYS.indexOf(day); // terça - 2
    const currentDay = new Date(selectedDate);//mondayDate
    currentDay.setDate(selectedDate.getDate() + dayIndex); // Get the date for the current day
    return currentDay.getDate() === today.getDate() 
    && currentDay.getMonth() === today.getMonth() 
    && currentDay.getFullYear() === today.getFullYear();
  }), [selectedDate]); // Memoize based on selectedDate

  return (
    <div className="week-column">
      {DAYS.map((day, index) => (
        <div 
          className="day-wrapper"
          key={index}
        >
          <div 
            className={`day-column ${isTodayArray[index] ? 'is-today' : ''}`} 
            key={index}
          >{day}</div>
        </div>
      ))}
    </div>
  );
}

export default MyCalendar;
