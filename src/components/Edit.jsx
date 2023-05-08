import React from 'react'
import editIcon from '../assets/images/icon-edit.svg'

const Edit = () => {
  return (
    <button className='font-medium flex items-center gap-2 hover:opacity-50' style={{color:'var(--moderateBlue)'}}><span className='w-3 h-4' style={{backgroundImage:`url(${editIcon})`}}/>Edit</button>
  )
}

export { Edit };