import React from 'react'
import editIcon from '../assets/images/icon-edit.svg'

const Edit = ({edit,setEdit,setEditValue,c}) => {

  function activeEdit() {
    edit?setEdit(false):setEdit(true);
    setEditValue(c.replyingTo?`@${c.replyingTo} ${c.content}`:c.content)
  }


  return (
    <button onClick={activeEdit} className={`font-medium flex items-center gap-2 ${edit?'opacity-25':'opacity-100'} hover:opacity-50`} style={{color:'var(--moderateBlue)'}}><span className='w-3 h-4' style={{backgroundImage:`url(${editIcon})`}}/>Edit</button>
  )
}

export { Edit };