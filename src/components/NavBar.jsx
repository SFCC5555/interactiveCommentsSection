import React, { useState, useContext } from 'react';
import { CommentsContext } from '../context/Comments/CommentsContext';
import { UsersMenu } from './UsersMenu';

const NavBar = () => {

  const {currentUser} = useContext(CommentsContext);

  const [usersMenu,setUsersMenu] = useState(false);

  function renderUsersMenu() {

    usersMenu?setUsersMenu(false):setUsersMenu(true);

  }

  return (
    <>
     <nav className='fixed px-5 flex items-center justify-between w-full h-14 top-0 left-0 z-10 font-medium' style={{backgroundColor:'var(--moderateBlue)',color:'var(--white)'}}>
        <div>The Social Network</div>
        <div onClick={renderUsersMenu} className='flex items-center gap-2 cursor-pointer hover:opacity-80'>
            <div>{currentUser.username}</div>
            <img className='w-10' src={currentUser.image.png} alt={currentUser.username}/>
        </div>
     </nav>
     {usersMenu&&<UsersMenu />}
    
    </>

  )
}

export { NavBar };