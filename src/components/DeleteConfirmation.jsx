import {useRef} from "react";

const DeleteConfirmation = ({index, title, DeleteTask}) => {
    //useRef for dialog component
    const deleteModal = useRef(null)

    function toggleDeleteModal() {
        if(!deleteModal.current){
            return
        }
        deleteModal.current.hasAttribute("open")
        ? deleteModal.current.close()
        : deleteModal.current.showModal()
    }

    return (
        <>
        <button onClick={toggleDeleteModal}>Delete</button>
        <dialog ref={deleteModal}> 
        Confirm deletion of 
        <span> {title}</span>
        <button 
        onClick={toggleDeleteModal}
        >Cancel</button>
        <button 
        onClick={() => {
            DeleteTask()
            toggleDeleteModal()
            }}
        >Delete</button>
        </dialog>
        </>
    )
}

export default DeleteConfirmation