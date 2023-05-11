import React, { useContext, useEffect, useState } from 'react'
import { ModalsContext } from '../context/Modals/ModalsContext';
import { CommentsContext } from '../context/Comments/CommentsContext';
import imageuser from '../assets/images/avatars/image-user.png';
import { Button } from './Button';

const AddUserModal = () => {

  const {addUserModal,setAddUserModal,setActiveModal} = useContext(ModalsContext);
  const {userList,setUserList,setCurrentUser,usersRecord,setUsersRecord,newUserImage,setNewUserImage} = useContext(CommentsContext);
  const [inputValue,setInputValue] = useState('');
  const [invalidCharacterError,setInvalidCharacterError] = useState(false);
  const [invalidUsernameError,setInvalidUsernameError] = useState(false);
  const [errorMessage,setErrorMessage] = useState('');
  const [imageName,setImageName] = useState('Add Image')
  const [invalidImageFormatError,setInvalidImageFormatError] = useState(false);


  function closeAddUserModal() {
    setAddUserModal(false);
    setActiveModal(false);
    setInputValue('');
    setImageName('Add Image');
  }

  function handleChange(e) {

    if (/^[a-z0-9]*$/i.test(e.target.value) && e.target.value.length<=16 && !(/(^\d)|(^[a-z]\d)|(^[a-z][a-z]\d)/i.test(e.target.value))) {
        setInvalidCharacterError(false);
        setInvalidUsernameError(false);
        setInputValue(e.target.value.toLowerCase());
    } else {
        setInvalidCharacterError(true);
    }

  }

  function handleImageChange(e) {

    const validFormatList = ['image/png','image/jpeg','image/svg+xml','image/webp'];

    if (validFormatList.some(f=>f===e.target.files[0].type)) {

      let imageSrc = URL.createObjectURL(e.target.files[0]);
      setNewUserImage(imageSrc);
      setImageName(e.target.files[0].name);
      setInvalidImageFormatError(false);

    } else {
      setNewUserImage('');
      setImageName(e.target.files[0].type);
      setInvalidImageFormatError(true);
    }



  }



  function addUser() {

    if (inputValue.length<3) {
        setInvalidCharacterError(true);
        setInvalidUsernameError(true);
        setErrorMessage('Username too short.');
    } else if (userList.some(u=>u.username===inputValue)) {
        setInvalidUsernameError(true);
        setErrorMessage('Username not available.');
    } else {


        setUserList(prev=>[...prev,{"username":inputValue,"image":newUserImage?newUserImage:usersRecord.some(u=>u.username===inputValue)?usersRecord.find(u=>u.username===inputValue).image:imageuser}].sort((a, b) => {
            const nameA = a.username.toUpperCase();
            const nameB = b.username.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            return 0;}))
    
        if (!(usersRecord.some(u=>u.username===inputValue))) {

          setUsersRecord(prev=>[...prev,{"username":inputValue,"image":newUserImage?newUserImage:imageuser}]);

        }

    
        setAddUserModal(false);
        setActiveModal(false);
        setInputValue('');
        setCurrentUser({
            "image": { 
                "png": newUserImage?newUserImage:usersRecord.some(u=>u.username===inputValue)?usersRecord.find(u=>u.username===inputValue).image:imageuser
            },
            "username": inputValue
            })
        
        setImageName('Add Image');
    }  

  }

  function addUserWithEnter(e) {
    if (e.key==='Enter') {
        addUser();
    }
  }

  useEffect(()=>{
    document.addEventListener('keypress',addUserWithEnter);

    return ()=>{
        document.removeEventListener('keypress',addUserWithEnter);
    }
  })


  return (
    <>
        {addUserModal &&
        
        <div className='flex flex-col gap-4 bg-white p-10 fixed w-3/4 sm:w-1/2 md:w-2/5 z-20 self-center rounded-md'>
            
            <h2 className='font-semibold' style={{color:'var(--darkBlue)'}}>Add new user</h2>
            
            <p className='text-xs font-normal text-justify' style={{color:invalidCharacterError?'var(--softRed)':'var(--lightGrayishBlue)'}} >Please enter your desired username using only lowercase letters, no spaces and optionally including numbers. The username must start with at least 3 letters and be no longer than 16 characters.</p>
            <div>
              <input type='text' value={inputValue} onChange={handleChange} className={`border-2 p-2 text-sm rounded-md outline-none ${(invalidCharacterError||invalidUsernameError)&&'inputError'}`} placeholder='Username' />
              <div className={`${!invalidUsernameError&&'invisible'} translate-y-1 text-xs px-1 none`} style={{color:'var(--softRed)'}}>{errorMessage}</div>
            </div>

            <p className='text-xs font-normal text-justify' style={{color:invalidImageFormatError?'var(--softRed)':'var(--lightGrayishBlue)'}} >Please select or drag an image in JPG, PNG, SVG or WEBP format for your profile picture. (optional)</p>
            <div className={`inputImageContainer overflow-hidden w-48 h-12 rounded-md border-dashed border-2 relative ${invalidImageFormatError&&'inputError'}`} style={{color:invalidImageFormatError?'var(--softRed)':'var(--lightGrayishBlue)'}}>
              <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-sm' >{imageName}</div>
              <input className='text-xs cursor-pointer opacity-0 w-full h-full z-10' style={{color:'var(--grayishBlue)'}} onChange={handleImageChange} type='file' />
            </div>
            <div className={`${!invalidImageFormatError&&'invisible'} -translate-y-3 text-xs px-1 none`} style={{color:'var(--softRed)'}}>Invalid Format</div>

            <section className='flex justify-between'>
                <Button handleClick={addUser} color='var(--grayishBlue)' text='CONFIRM' />
                <Button handleClick={closeAddUserModal} color='var(--softRed)' text='CANCEL' />
            </section>

        </div> }
    </>
  )
}

export { AddUserModal };