import React, { useState, useContext } from 'react';
import { CommentsContext } from '../context/Comments/CommentsContext';
import { UsersMenu } from './UsersMenu';

const NavBar = () => {

  const {currentUser} = useContext(CommentsContext);

  const [usersMenu,setUsersMenu] = useState(false);

  function renderUsersMenu() {

      usersMenu?setUsersMenu(false):setUsersMenu(true);

  }

  function closeUsersMenu(e) {


    if (e.target.id!=='userName' && e.target.id!=='userImage') {
      setUsersMenu(false);
    }
    
  }

  return (
    <>
     <nav className='fixed px-5 flex items-center justify-between w-full h-14 top-0 left-0 z-10 font-medium' style={{backgroundColor:'var(--moderateBlue)',color:'var(--white)'}}>
        <div>The Social Network</div>
        <div onClick={renderUsersMenu} className='flex items-center gap-2 cursor-pointer hover:opacity-80'>
            <div id='userName'>{currentUser.username}</div>
            <div className='w-10 h-10 overflow-hidden rounded-full'>
              <img id='userImage' className='w-10' src={currentUser.image.png} alt={currentUser.username}/>
            </div>
        </div>
     </nav>
     {usersMenu&&<UsersMenu closeUsersMenu={closeUsersMenu}/>}
    
    </>

  )
}

export { NavBar };