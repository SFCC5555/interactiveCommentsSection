import React, { useEffect, useContext} from 'react'
import { CommentsContext } from '../context/Comments/CommentsContext';
import { ModalsContext } from '../context/Modals/ModalsContext';

const UsersMenu = ({closeUsersMenu}) => {

  const {currentUser,setCurrentUser,userList,setUserToDelete,setNewUserImage} = useContext(CommentsContext);
  const {setActiveModal,setAddUserModal,setDeleteUserModal} = useContext(ModalsContext);

  function changeUser(e) {

    let target = e.target.attributes.name.value;

    let newUser=userList.find(u=>u.username===target)

    setCurrentUser({
        "image": { 
            "png": newUser.image
        },
        "username": newUser.username
        })

  }

  useEffect(()=>{

    document.addEventListener('click',closeUsersMenu);

    return ()=>{document.removeEventListener('click',closeUsersMenu)};
  })


  function openAddUserModal() {
    setActiveModal(true);
    setAddUserModal(true);
    setNewUserImage('');
  }


  function openDeleteUserModal(e) {
    setActiveModal(true);
    setDeleteUserModal(true);
    setUserToDelete(e.target.id);
  }
  
  return (
    <section className='fixed top-14 right-5 px-3 py-3 flex flex-col gap-3 w-38 z-10 rounded-b-md font-medium' style={{backgroundColor:'var(--white)',color:'var(--darkBlue)'}}>{userList.filter(u=>u.username!==currentUser.username).map(u=><div key={u.username} onClick={changeUser} className='cursor-pointer hover:opacity-75 flex items-center justify-between gap-3 usersMenu'>
      <div className='flex items-center gap-3'>
        <div className='w-6 h-6 overflow-hidden rounded-full'>
          <img className='w-6' src={u.image} alt={u.username} name={u.username}/>
        </div>
        <div name={u.username}>{u.username}</div>
      </div>
      <span  id={u.username} onClick={openDeleteUserModal} className='w-3 h-3 deleteIcon opacity-50 sm:opacity-0'/>
      </div>)}
      <div onClick={openAddUserModal} className='font-normal cursor-pointer opacity-75 hover:opacity-100 self-end' style={{color:'var(--lightGrayishBlue)'}}>New User</div></section>
  )
}

export { UsersMenu };