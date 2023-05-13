import React from 'react'
import deleteIcon from '../assets/images/icon-delete.svg'
import { useContext } from 'react'
import { ModalsContext } from '../context/Modals/ModalsContext'
import { CommentsContext } from '../context/Comments/CommentsContext'

const Delete = ({id}) => {

  const {setDeleteCommentModal,setActiveModal} = useContext(ModalsContext);
  const {setCommentToDelete} = useContext(CommentsContext)

  function activeDeleteCommentModal() {
    setDeleteCommentModal(true);
    setActiveModal(true);
    setCommentToDelete(id);
  }



  return (
    <button onClick={activeDeleteCommentModal} className='font-medium flex items-center gap-2 hover:opacity-50' style={{color:'var(--softRed)'}}><span className='w-3 h-4' style={{backgroundImage:`url(${deleteIcon})`}}/>Delete</button>
  )
}

export { Delete };