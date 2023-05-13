import React, { useState } from 'react'
import { useContext } from 'react';
import { CommentsContext } from '../context/Comments/CommentsContext';

const Votes = ({c,currentUser}) => {

  const {comments,setComments,resetVotes,setResetVotes} = useContext(CommentsContext);
  const [upVote,setUpVote] = useState(localStorage.getItem('upVoteStorage'+c.id)?JSON.parse(localStorage.getItem('upVoteStorage'+c.id)):[]);
  const [downVote,setDownVote] = useState(localStorage.getItem('downVoteStorage'+c.id)?JSON.parse(localStorage.getItem('downVoteStorage'+c.id)):[]);

  if (resetVotes) {
    setUpVote([]);
    setDownVote([]);
    localStorage.setItem('upVoteStorage'+c.id,JSON.stringify([]));
    localStorage.setItem('downVoteStorage'+c.id,JSON.stringify([]));
    setResetVotes(false);
  }
  
  function upScore() {

    if (!downVote.some(v=>v===currentUser)) {
      if (upVote.some(v=>v===currentUser)) {
              
        let newComments = [...comments];

        for (let i of newComments) {
    
          if (i.id===c.id) {
            i.score-=1;
          }
    
          for (let j of i.replies) {
            if (j.id===c.id) {
              j.score-=1;
            }
          }
    
        }        
        
        setComments(newComments);
        setUpVote(prev=>prev.filter(v=>v!==currentUser));
        localStorage.setItem('upVoteStorage'+c.id,JSON.stringify(upVote.filter(v=>v!==currentUser)));
      } else {

        let newComments = [...comments];

        for (let i of newComments) {
    
          if (i.id===c.id) {
            i.score+=1;
          }
    
          for (let j of i.replies) {
            if (j.id===c.id) {
              j.score+=1;
            }
          }
    
        }  


        setComments(newComments);
        setUpVote(prev=>[...prev,currentUser]);
        localStorage.setItem('upVoteStorage'+c.id,JSON.stringify([...upVote,currentUser]));
      }
    }



  }

  function downScore() {

    if (!upVote.some(v=>v===currentUser)) {
      if (downVote.some(v=>v===currentUser)) {

        let newComments = [...comments];

        for (let i of newComments) {
    
          if (i.id===c.id) {
            i.score+=1;
          }
    
          for (let j of i.replies) {
            if (j.id===c.id) {
              j.score+=1;
            }
          }
    
        }        
        
        setComments(newComments);
        setDownVote(prev=>prev.filter(v=>v!==currentUser));
        localStorage.setItem('downVoteStorage'+c.id,JSON.stringify(downVote.filter(v=>v!==currentUser)));

      } else {

        let newComments = [...comments];

        for (let i of newComments) {
    
          if (i.id===c.id) {
            i.score-=1;
          }
    
          for (let j of i.replies) {
            if (j.id===c.id) {
              j.score-=1;
            }
          }
    
        }  


        setComments(newComments);
        setDownVote(prev=>[...prev,currentUser]);
        localStorage.setItem('downVoteStorage'+c.id,JSON.stringify([...downVote,currentUser]));
      }
    }

  }


  return (
    <div className='flex w-24 items-center justify-between font-bold py-1 px-2 rounded-md sm:flex-col sm:w-7 sm:self-start' style={{backgroundColor:'var(--veryLightGray)'}}>
        <button onClick={upScore} ><span className={`${upVote.some(v=>v===currentUser)?'activePlusIcon':downVote.some(v=>v===currentUser)?'inactivePlusIcon':'plusIcon'} w-3 h-3`} /></button>
        <div className='' style={{color:c.score<0?'var(--softRed)':'var(--moderateBlue)'}}>{c.score}</div>
        <button onClick={downScore}><span className={`${downVote.some(v=>v===currentUser)?'activeMinusIcon':upVote.some(v=>v===currentUser)?'inactiveMinusIcon':'minusIcon'} w-3 h-3`} /></button>

    </div>

  )
}

export {Votes};