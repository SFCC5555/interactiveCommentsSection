import React from 'react'

const Votes = ({score}) => {
  return (
    <div className='flex w-24 items-center justify-between font-bold py-1 px-2 rounded-md sm:flex-col sm:w-7 sm:self-start' style={{backgroundColor:'var(--veryLightGray)'}}>
        <button><span className='plusIcon w-3 h-3 cursor-pointer' /></button>
        <div className='' style={{color:'var(--moderateBlue)'}}>{score}</div>
        <button><span className='minusIcon w-3 h-3 cursor-pointer' /></button>

    </div>

  )
}

export {Votes};