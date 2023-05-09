import React from 'react'
import { CommentsContext } from '../context/Comments/CommentsContext';
import { useContext } from 'react';

const UsersMenu = () => {

  const {currentUser,setCurrentUser,userList} = useContext(CommentsContext);

  function changeUser(e) {

    let newUser=userList.find(u=>u.username===e.target.innerText)

    setCurrentUser({
        "image": { 
            "png": newUser.image
        },
        "username": newUser.username
        })

    }

  return (
    <section className='fixed top-14 right-5 px-5 py-3 flex flex-col gap-2 w-36 z-10 rounded-b-md font-medium' style={{backgroundColor:'var(--white)',color:'var(--darkBlue)'}}>{userList.filter(u=>u.username!==currentUser.username).map(u=><div key={u.username} onClick={changeUser} className='cursor-pointer hover:opacity-75'>{u.username}</div>)}</section>
  )
}

export { UsersMenu };