import { useContext } from "react"
import BoardCard from "./BoardCard"
import { KanbanContext } from "../App"

const BoardContainer = () => {
    //context fetcher
    const {taskList} = useContext(KanbanContext)

    return(
        <>
            <div className='board-container'>

            {taskList.map((task, i) => {
                return (
                <BoardCard key={i} index={i} title={task.title} description={task.description} createdOn={task.createdOn} etc={task.etc} colorCode={task.colorCode}>  
                </BoardCard>
                )        
            })}

            </div>        
        </>
    )
}

export default BoardContainer