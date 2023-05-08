import React from 'react'
import deleteIcon from '../assets/images/icon-delete.svg'

const Delete = () => {
  return (
    <button className='font-medium flex items-center gap-2 hover:opacity-50' style={{color:'var(--softRed)'}}><span className='w-3 h-4' style={{backgroundImage:`url(${deleteIcon})`}}/>Delete</button>
  )
}

export { Delete };