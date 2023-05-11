import React, { useContext } from 'react'
import { ModalsContext } from '../context/Modals/ModalsContext';

const InactiveLayer = () => {

    const {activeModal} = useContext(ModalsContext);


  return (
    <>
        {activeModal && <div className='bg-black fixed w-full h-full opacity-75 top-0 left-0 z-10'></div> }
    </>
    
  )
}

export { InactiveLayer };