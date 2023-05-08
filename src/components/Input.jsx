import React from 'react'
import { CommentsContext } from '../context/Comments/CommentsContext';
import { useContext } from 'react';

const Input = () => {

    const {currentUser} = useContext(CommentsContext)


  return (
    <section className='flex flex-col p-4 rounded-md gap-5 sm:flex-row-reverse sm:justify-end sm:relative' style={{backgroundColor:'var(--white)'}}>
        <textarea placeholder='Add a comment...' className='outline-none h-24 resize-none px-4 py-2 border-2 rounded-md sm:w-full sm:mr-24' ></textarea>
        <section className='flex items-center justify-between'>
            <img className='w-10 sm:self-start' src={currentUser.image.png} alt={currentUser.username}/>
            <button className='w-20 py-2 rounded-md sm:absolute top-4 right-4 hover:opacity-50' style={{color:'var(--white)',backgroundColor:'var(--moderateBlue)'}}>SEND</button>
        </section>

    </section>
  )
}

export {Input};