import React from 'react'
import { ModalsContext } from '../context/Modals/ModalsContext'
import { useContext } from 'react'
import { Button } from './Button'
import { CommentsContext } from '../context/Comments/CommentsContext'

const DeleteCommentModal = () => {

  const {comments,setComments,commentToDelete} = useContext(CommentsContext);
  const {deleteCommentModal,setDeleteCommentModal,setActiveModal} = useContext(ModalsContext);

  function deleteComment() {

    if (comments.some(c=>c.id===commentToDelete)) {
      setComments(prev=>prev.filter(c=>c.id!==commentToDelete));
    } else {

      let newComments = [...comments];

      for (let c of newComments) {
        if (c.replies.some(r=>r.id===commentToDelete)) {
          
          c.replies = c.replies.filter(r=>r.id!==commentToDelete);

          setComments(newComments);

        }
      }

    }

    setDeleteCommentModal(false);
    setActiveModal(false);
  }

  function closeDeleteCommentModal() {
    setDeleteCommentModal(false);
    setActiveModal(false);
  }
  


  return (
    <>
        {deleteCommentModal &&
        
        <div className='flex flex-col gap-5 bg-white p-10 fixed w-3/4 sm:w-1/2 md:w-2/5 z-20 self-center rounded-md'>
            
            <h2 className='font-semibold' style={{color:'var(--darkBlue)'}}>Delete comment</h2>
            <p className='text-xs font-normal text-justify' style={{color:'var(--grayishBlue)'}} >Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>

            <section className='flex justify-between text-xs sm:text-sm md:text-base gap-2'>
                <Button handleClick={closeDeleteCommentModal} color='var(--grayishBlue)' text='NO, CANCEL' />
                <Button handleClick={deleteComment} color='var(--softRed)' text='YES, DELETE' />
            </section>

        </div> }
    </>

  )
}

export { DeleteCommentModal }