import { useEffect } from 'react';
import { useContext } from 'react';
import { CommentsContext } from '../context/Comments/CommentsContext';
import { Comment } from '../components/Comment';


const Comments = () => {
  
  const {comments,currentUser,idCounter,userList,usersRecord} = useContext(CommentsContext);

  
  useEffect(()=>{

    localStorage.setItem('commentsStorage',JSON.stringify(comments));
    localStorage.setItem('currentUserStorage',JSON.stringify(currentUser));
    localStorage.setItem('idCounterStorage',idCounter);
    localStorage.setItem('userListStorage',JSON.stringify(userList));
    localStorage.setItem('usersRecordStorage',JSON.stringify(usersRecord));

  },[comments,currentUser,idCounter,userList,usersRecord])


  return (
    <section className='flex flex-col gap-5'>
        {comments.map(c=>(
        <>
          <Comment key={c.id} c={c} />
        
        {c.replies.length!==0&&<section className='flex flex-col gap-5 pl-4 border-l-2' style={{borderColor:'var(--lightGray)'}}>

          {c.replies.map(r=><Comment key={r.id} c={r} />)}

        </section>}

        </>

      ))}
        
    </section>
  )
}

export {Comments}