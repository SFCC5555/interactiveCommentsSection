import React from 'react'

const CreatedAt = ({createdAt}) => {

  const currentDate = new Date();
  const commentDate = new Date(createdAt); 

  const differenceMilliseconds = currentDate-commentDate;
  const differenceMinutes = Math.floor(differenceMilliseconds / (1000 * 60 ));

  let timeAgo;
  
  if (differenceMinutes>=525600) {
    timeAgo = Math.floor(differenceMinutes/525600) + ' year'
  } else if (differenceMinutes>=43200) {
    timeAgo = Math.floor(differenceMinutes/43200) + ' month'
  } else if (differenceMinutes>=10080) {
    timeAgo = Math.floor(differenceMinutes/10080) + ' week'
  } else if (differenceMinutes>=1440) {
    timeAgo = Math.floor(differenceMinutes/1440) + ' day'
  } else if (differenceMinutes>=60) {
    timeAgo = Math.floor(differenceMinutes/60) + ' hour'
  } else {
    timeAgo = differenceMinutes + ' minute'
  } 


  return (
    <div className='font-normal' style={{color:'var(--grayishBlue)'}} >{timeAgo.split(' ')[0]==='1'?timeAgo+' ago':timeAgo.split(' ')[0]==='0'?'Now':timeAgo+'s ago'}</div>
  )
}

export { CreatedAt };