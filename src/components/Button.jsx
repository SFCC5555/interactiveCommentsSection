import React from 'react'

const Button = ({handleClick,color,text}) => {
  return (
    <button className='hover:opacity-80 px-2 py-1 sm:px-4 sm:py-2 rounded-md' onClick={handleClick} style={{color:'var(--white)',backgroundColor:color}}>{text}</button>
  )
}

export { Button };