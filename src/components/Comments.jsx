import React from 'react';
import { useContext } from 'react';
import { CommentsContext } from '../context/Comments/CommentsContext';
import { Comment } from '../components/Comment';


const Comments = () => {

    const {comments,setComments} = useContext(CommentsContext);

  return (
    <section className='flex flex-col gap-5'>
        {comments.map(c=>(
        <>
          <Comment key={c.id} c={c} />
        
        <section className='flex flex-col gap-5 pl-4 border-l-2' style={{borderColor:'var(--lightGray)'}}>

          {c.replies?.map(r=><Comment key={r.id} c={r} />)}

        </section>

        </>

      ))}
        
    </section>
  )
}

export {Comments}