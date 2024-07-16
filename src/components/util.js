

export const range = (keyCount) => [...Array(keyCount).keys()];


export const getMonday = () => {
    const today = new Date();
    const monday = today.getDate() - today.getDay() + 1;
    const finalValue = new Date(today.setDate(monday));
    // console.log('return new date from getMonday', finalValue) ok
    return finalValue;
}

export const areDatesSame = (date1, date2) => {
    // console.log('areDatesSame?', date1.getFullYear() === date2.getFullYear() &&
    // date1.getMonth() === date2.getMonth() &&
    // date1.getDate() === date2.getDate())
    return date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
}

export const addDateBy = (date, count) => {
    // console.log('addDatebys date', date)
    const currentDate = date;
    // console.log("🚀 ~ addDateBy ~ currentDate:", currentDate) ok
    // console.log('currentdate,getDate', currentDate.getDate())
    const currentDatePlusCount = currentDate.getDate() + count
    // console.log("🚀 ~ addDateBy ~ currentDatePlusCount:", currentDatePlusCount)
    
    currentDate.setDate(currentDate.getDate() + count)
    // console.log("🚀 ~ addDateBy ~ dateAdded:", currentDate)
    
    return currentDate;
}

