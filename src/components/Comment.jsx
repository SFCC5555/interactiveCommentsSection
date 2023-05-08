import React from 'react'
import { useContext } from 'react';
import { CommentsContext } from '../context/Comments/CommentsContext';
import { Reply } from './Reply';
import { Votes } from './Votes';
import { Delete } from './Delete';
import { Edit } from './Edit';

const Comment = ({ c }) => {

  const {currentUser} = useContext(CommentsContext)

  return (
    <section className='flex flex-col p-4 rounded-md gap-5 sm:flex-row-reverse sm:relative' style={{backgroundColor:'var(--white)'}}>

                        <section className='flex flex-col gap-4'>

                            <section className='flex gap-5 items-center'>
                              <img src={c.user.image.png} alt={c.user.username} className='w-10'/>
                              <div style={{color:'var(--darkBlue)'}}><strong>{c.user.username}</strong></div>
                              {c.user.username===currentUser.username&&<div className='text-sm px-2 rounded-sm' style={{color:'var(--white)',backgroundColor:'var(--moderateBlue)'}} >you</div>}
                              <div className='font-normal' style={{color:'var(--grayishBlue)'}} >{c.createdAt}</div>
                            </section>

                            <p style={{color:'var(--grayishBlue)'}}>{c.replyingTo&&<div className='inline font-medium' style={{color:'var(--moderateBlue)'}}>@{c.replyingTo} </div>}{c.content}</p>

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

