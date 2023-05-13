import React from 'react'
import { useContext } from 'react';
import { ModalsContext } from '../context/Modals/ModalsContext';

const Reset = () => {

    const {setActiveModal,setResetModal} = useContext(ModalsContext);

  function activeResetModal() {
    setResetModal(true);
    setActiveModal(true);
  }


  return (
    <button onClick={activeResetModal} className='fixed font-medium opacity-25 md:opacity-10 top-2 left-44 w-20 py-2 rounded-md hover:opacity-75 z-10 ' style={{color:'var(--moderateBlue)',backgroundColor:'var(--white)'}}>RESET</button>
  )
}

export {Reset};
