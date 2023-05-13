import React, { useState } from 'react'
import { useContext } from 'react';
import { CommentsContext } from '../context/Comments/CommentsContext';
import { Reply } from './Reply';
import { Votes } from './Votes';
import { Delete } from './Delete';
import { Edit } from './Edit';
import { CreatedAt } from './CreatedAt';
import imageuser from '../assets/images/avatars/image-user.png'
import { Input } from './Input';

const Comment = ({ c }) => {

  const {currentUser,userList,comments,setComments,resetVotes,setResetVotes} = useContext(CommentsContext);
  const [reply,setReply] = useState(false);
  const [edit,setEdit] = useState(false);
  const [editValue,setEditValue] = useState('');
  const [editedList,setEditedList] = useState(localStorage.getItem('editedListStorage')?JSON.parse(localStorage.getItem('editedListStorage')):[]);
  
  
  function handleEditChange(e) {

    if (c.replyingTo) {

      if (e.target.value.length>=c.replyingTo.length + 2) {
        setEditValue(e.target.value);
      }

    } else {
      setEditValue(e.target.value);
    }
    
  }


  function update() {

    let newComments = [...comments];

    for (let i of newComments) {

      if (i.id===c.id) {
        i.content=c.replyingTo?editValue.slice(c.replyingTo.length +2 ):editValue;
      }

      for (let j of i.replies) {
        if (j.id===c.id) {
          j.content=c.replyingTo?editValue.slice(c.replyingTo.length +2 ):editValue;
        }
      }

    }

    setComments(newComments)
    setEditedList(prev=>[...prev,c.id]);
    localStorage.setItem('editedListStorage',JSON.stringify([...editedList,c.id]));

    setEdit(false);
  }




  return (
    <>
      <section className='flex flex-col p-4 rounded-md gap-5 sm:flex-row-reverse sm:relative' style={{backgroundColor:'var(--white)'}}>

        <section className='flex flex-col gap-4 w-full'>

          <section className='flex gap-5 items-center'>

           <div className='w-10 h-10 overflow-hidden rounded-full'>
            <img src={userList.some(u=>u.username===c.user.username)?c.user.image.png:imageuser} alt={userList.some(u=>u.username===c.user.username)?c.user.username:'Deleted account'} className='w-10'/>
          </div>
        
           <div className={!userList.some(u=>u.username===c.user.username)&&'opacity-30 font-light'} style={{color:'var(--darkBlue)'}}><strong>{userList.some(u=>u.username===c.user.username)?c.user.username:'Deleted account'}</strong></div>
              {c.user.username===currentUser.username&&<div className='text-sm px-2 rounded-sm' style={{color:'var(--white)',backgroundColor:'var(--moderateBlue)'}} >you</div>}
          <CreatedAt createdAt = {c.createdAt}/>
          {editedList.some(e=>e===c.id)&&<div style={{color:'var(--lightGray)'}}>(Edited)</div>}
          </section>

        {(edit && c.user.username===currentUser.username)?<textarea onChange={handleEditChange} value={editValue} className='outline-none h-24 resize-none px-4 py-2 border-2 rounded-md' />:

        <p className='whitespace-pre-wrap break-all' style={{color:'var(--grayishBlue)'}}>{c.replyingTo&&<div className='inline font-medium' style={{color:'var(--moderateBlue)'}}>@{userList.some(u=>u.username===c.replyingTo)?c.replyingTo:'unknownuser'} </div>}{c.content}</p>}
        
        {(edit && c.user.username===currentUser.username)&&<button onClick={update} className='w-20 py-2 rounded-md self-end hover:opacity-50' style={{color:'var(--white)',backgroundColor:'var(--moderateBlue)'}}>UPDATE</button>}

        </section>

        <section className='flex items-center justify-between'>
              <Votes c={c} currentUser={currentUser.username} setEditedList={setEditedList}/>
              {c.user.username===currentUser.username?
              <div className='flex items-center gap-5 sm:absolute top-4 right-4'>
                <Delete id={c.id}/>
                <Edit edit={edit} setEdit={setEdit} setEditValue={setEditValue} c={c} />
              </div>:
              <Reply reply={reply} setReply={setReply}/>}
        </section>

      </section>

      {(reply && c.user.username!==currentUser.username)&&<Input replyingTo={userList.some(u=>u.username===c.user.username)?c.user.username:'unknownuser'} id={c.id} setReply={setReply}/>}

    </>

  )
}

export {Comment};

