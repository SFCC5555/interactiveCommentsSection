import React from 'react'
import { useContext } from 'react';
import { CommentsContext } from '../context/Comments/CommentsContext';
import { Reply } from './Reply';
import { Votes } from './Votes';
import { Delete } from './Delete';
import { Edit } from './Edit';
import { CreatedAt } from './CreatedAt';
import imageuser from '../assets/images/avatars/image-user.png'

const Comment = ({ c }) => {

  const {currentUser,userList} = useContext(CommentsContext)  

  return (
    <section className='flex flex-col p-4 rounded-md gap-5 sm:flex-row-reverse sm:relative' style={{backgroundColor:'var(--white)'}}>

                        <section className='flex flex-col gap-4'>

                            <section className='flex gap-5 items-center'>

                              <div className='w-10 h-10 overflow-hidden rounded-full'>
                                <img src={userList.some(u=>u.username===c.user.username)?c.user.image.png:imageuser} alt={userList.some(u=>u.username===c.user.username)?c.user.username:'Deleted account'} className='w-10'/>
                              </div>
                                
                              <div className={!userList.some(u=>u.username===c.user.username)&&'opacity-40'} style={{color:'var(--darkBlue)'}}><strong>{userList.some(u=>u.username===c.user.username)?c.user.username:'Deleted account'}</strong></div>
                              {c.user.username===currentUser.username&&<div className='text-sm px-2 rounded-sm' style={{color:'var(--white)',backgroundColor:'var(--moderateBlue)'}} >you</div>}
                              <CreatedAt createdAt = {c.createdAt}/>
                            </section>

                            <p style={{color:'var(--grayishBlue)'}}>{c.replyingTo&&<div className='inline font-medium' style={{color:'var(--moderateBlue)'}}>@{userList.some(u=>u.username===c.replyingTo)?c.replyingTo:'unknownuser'} </div>}{c.content}</p>

                        </section>

                        <section className='flex items-center justify-between'>
                              <Votes score={c.score}/>
                              {c.user.username===currentUser.username?
                              <div className='flex items-center gap-5 sm:absolute top-4 right-4'>
                                <Delete />
                                <Edit />
                              </div>:
                              <Reply />}
                        </section>

        
    </section>
  )
}

export {Comment};

