import React from 'react'
import replyIcon from '../assets/images/icon-reply.svg'

const Reply = ({reply,setReply}) => {

  function activeReplyInput() {
    reply?setReply(false):setReply(true);
  }


  return (
    <button onClick={activeReplyInput} className={`font-semibold flex items-center gap-2 sm:absolute top-4 right-4 ${reply?'opacity-25':'opacity-100'} sm:hover:opacity-50`} style={{color:'var(--moderateBlue)'}}><span className={'w-3 h-3'} style={{backgroundImage:`url(${replyIcon})`}}/>Reply</button>
  )
}

export {Reply};