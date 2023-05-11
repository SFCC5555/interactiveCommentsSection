import React from 'react'

const Button = ({handleClick,color,text}) => {
  return (
    <button className='hover:opacity-80 px-4 py-2 rounded-md' onClick={handleClick} style={{color:'var(--white)',backgroundColor:color}}>{text}</button>
  )
}

export { Button };