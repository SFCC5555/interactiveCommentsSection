import React, { useState } from 'react'
import { CommentsContext } from '../context/Comments/CommentsContext';
import { useContext } from 'react';

const Input = ({replyingTo,id,setReply}) => {

  const {currentUser,comments,setComments,idCounter,setIdCounter} = useContext(CommentsContext);
  const [textareaValue,setTextareValue] = useState(replyingTo?`@${replyingTo} `:'');


  function handleChange(e) {

    if (replyingTo) {
      if (e.target.value.length>=replyingTo.length+2) {
        setTextareValue(e.target.value);
      }
    } else {
      setTextareValue(e.target.value);
    }

  }


  function sendComment() {


      if (replyingTo) {

        if (textareaValue.slice(replyingTo.length + 2)) {

          let newComments = [...comments];
          let newComment = newComments.find(c=>c.id===id);

          if (!newComment) {

            for (let c of newComments) {
              newComment = c.replies.find(r=>r.id===id);
              
              if (newComment) {
                newComment=c
                break;
              }  
            }

          }

          newComment.replies.push({
            "id": idCounter,
            "content": textareaValue.slice(replyingTo.length + 2),
            "createdAt": Date(),
            "score": 0,
            "replyingTo": replyingTo,
            "user": {
              "image": { 
                "png": currentUser.image.png
              },
              "username": currentUser.username
            }
          })

          setComments(newComments);
          setReply(false);
        }

      } else {

        if (textareaValue) {

          setComments(prev=>[...prev, {
            "id": idCounter,
            "content": textareaValue,
            "createdAt": Date(),
            "score": 0,
            "user": {
              "image": { 
                "png": currentUser.image.png
              },
              "username": currentUser.username
            },
            "replies": []
          }])
  
        }

        }

      setIdCounter(prev=>prev+1);
      setTextareValue(replyingTo?`@${replyingTo} `:'');

  }


  return (
    <section className='flex flex-col p-4 rounded-md gap-5 sm:flex-row-reverse sm:justify-end sm:relative' style={{backgroundColor:'var(--white)'}}>
        <textarea value={textareaValue} onChange={handleChange} placeholder='Add a comment...' className='outline-none h-24 resize-none px-4 py-2 border-2 rounded-md sm:flex-grow sm:mr-24' ></textarea>
        <section className='flex items-center justify-between'>
            <div className='w-10 h-10 overflow-hidden rounded-full sm:self-start'>
              <img className='w-10' src={currentUser.image.png} alt={currentUser.username}/>
            </div>
            <button onClick={sendComment} className='w-20 py-2 rounded-md sm:absolute top-4 right-4 hover:opacity-50' style={{color:'var(--white)',backgroundColor:'var(--moderateBlue)'}}>SEND</button>
        </section>

    </section>
  )
}

export {Input};