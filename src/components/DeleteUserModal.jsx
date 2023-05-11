import React from 'react'
import { ModalsContext } from '../context/Modals/ModalsContext'
import { useContext } from 'react'
import { Button } from './Button'
import { CommentsContext } from '../context/Comments/CommentsContext'

const DeleteUserModal = () => {

  const {userList,setUserList,userToDelete} = useContext(CommentsContext);
  const {deleteUserModal,setDeleteUserModal,setActiveModal} = useContext(ModalsContext);

  function deleteUser() {
    setUserList(prev=>prev.filter(u=>u.username!==userToDelete));
    setDeleteUserModal(false);
    setActiveModal(false);
  }

  function closeDeleteUserModal() {
    setDeleteUserModal(false);
    setActiveModal(false);
  }
  


  return (
    <>
        {deleteUserModal &&
        
        <div className='flex flex-col gap-5 bg-white p-10 fixed w-3/4 sm:w-1/2 md:w-2/5 z-20 self-center rounded-md'>
            
            <h2 className='font-semibold' style={{color:'var(--darkBlue)'}}>Delete user</h2>
            <p className='text-xs font-normal text-justify' style={{color:'var(--grayishBlue)'}} >Are you sure you want to delete this user? This will remove the user and can't be undone.</p>

            <section className='flex justify-between text-xs md:text-base'>
                <Button handleClick={closeDeleteUserModal} color='var(--grayishBlue)' text='NO, CANCEL' />
                <Button handleClick={deleteUser} color='var(--softRed)' text='YES, DELETE' />
            </section>

        </div> }
    </>

  )
}

export { DeleteUserModal }