

export const range = (keyCount) => [...Array(keyCount).keys()];



export const getMonday = () => {
    const today = new Date();
    const monday = today.getDate() - today.getDay() + 1;
    return new Date(today.setDate(monday));
    // return finalValue;
}

export const areDatesSame = (date1, date2) => {
    return date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
}

export const addDateBy = (date, count) => {
    const currentDate = date;
    return new Date(currentDate.setDate(currentDate.getDate() + count))
    // return currentDate;
}

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

//universal CSS parameters
export const HOUR_HEIGHT = 20
export const TASK_BORDER_WIDTH = 1
export const TASK_MARGIN = 0
export const TASK_FONT_SIZE = 16