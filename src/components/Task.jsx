import { HOUR_HEIGHT, TASK_BORDER_WIDTH, TASK_MARGIN, TASK_FONT_SIZE } from "./util"

export const Task = ({task}) => {
    //sizes in pixels(px)
    const totalHeight = (task.etc * HOUR_HEIGHT)
    const taskHeight = (totalHeight) - (2 * TASK_BORDER_WIDTH)
    //calculates necessary padding to center text within task
    const paddingTop = (taskHeight - TASK_FONT_SIZE) / 2
    
    
    const taskStyle = {
        height: `${totalHeight}px`,
        paddingTop: `${paddingTop}px`
    }






    //do not render render task if week not set
    // if(task.scheduledForWeek === ''){
    //     return;
    // }

    return (
        <div style={taskStyle} className="task">
            <span>{task.title}</span>
        </div>
    )
}


