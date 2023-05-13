import React from 'react'
import { ModalsContext } from '../context/Modals/ModalsContext'
import { useContext } from 'react'
import { Button } from './Button'
import { CommentsContext } from '../context/Comments/CommentsContext'
import { data } from '/src/data.js';

const ResetModal = () => {

  const {resetModal,setResetModal,setActiveModal} = useContext(ModalsContext);
  const {setComments,setCurrentUser,setUserList,setUsersRecord,setUserToDelete,setNewUserImage,setIdCounter,setCommentToDelete,setResetVotes} = useContext(CommentsContext)

  function reset() {

    setComments(data.comments);
    setCurrentUser(data.currentUser);
    setUserList(data.userList);
    setUsersRecord(data.userList);
    setUserToDelete('');
    setNewUserImage('');
    setIdCounter(5);
    setCommentToDelete(0);
    setResetVotes(true);

    setResetModal(false);
    setActiveModal(false);

    location.reload(); 

  }

  function closeResetModal() {
    setResetModal(false);
    setActiveModal(false);

  }


  return (
    <>
        {resetModal &&
        
        <div className='flex flex-col gap-5 bg-white p-10 fixed w-3/4 sm:w-1/2 md:w-2/5 z-20 self-center rounded-md'>
            
            <h2 className='font-semibold' style={{color:'var(--darkBlue)'}}>Reset to the initial state</h2>
            <p className='text-xs font-normal text-justify' style={{color:'var(--grayishBlue)'}} >Are you sure you want to reset to the initial state? This will remove all the changes and can't be undone.</p>

            <section className='flex justify-between text-xs sm:text-sm md:text-base gap-2'>
                <Button handleClick={closeResetModal} color='var(--grayishBlue)' text='NO, CANCEL' />
                <Button handleClick={reset} color='var(--softRed)' text='YES, RESET' />
            </section>

        </div> }
    </>

  )
}

export { ResetModal }