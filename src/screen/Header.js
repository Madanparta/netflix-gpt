import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const [isTranslated,setIsTranslated]=useState(false);
  const [isListMenu,setIsListMenu]=useState(false);
  const navigation = useNavigate()

  const store = useSelector(store=>store.user)

  const handlingTranslate = () => {
    setIsTranslated(!isTranslated)
    setIsListMenu(!isListMenu)
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigation('/')

    }).catch((error) => {
      // An error happened.
    });
  }
  const handleMenuBar = () => {
    setIsListMenu(!isListMenu)
  }

  const dispatch = useDispatch()

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        console.log(displayName)
        dispatch(addUser({
          uid:uid,
          email:email,
          displayName:displayName
        }));
        navigation("/browser")
  
      } else {
        dispatch(removeUser())
        navigation('/')
      }
    });
  },[]);


  return (
    <div className='w-full h-20 py-0.5 px-6 bg-gradient-to-b from-black absolute top-0 left-0 z-10 flex justify-between'>
      <img className='w-48 cursor-pointer' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'/>

      {store && <div className='py-3 px-10 flex justify-center items-center text-white gap-2'>
        <img onClick={handlingTranslate} className='w-10 h-10 cursor-pointer z-20' src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u1.jpg' alt='profile' />
        
        <div className='text-center'>
          <p onClick={handleMenuBar} className={`transform z-10 px-1 py-2 ${isListMenu?"mt-10" : "mt-1"}  hover:bg-yellow-500 active:bg-yellow-600 cursor-pointer rounded-md font-bold hover:text-black  ${isTranslated?'translate-x-0 ease-in-out duration-200 opacity-100':"-translate-x-20 ease-in-out duration-200 opacity-0"}`}>Hey {store.displayName}</p>
          {isListMenu && <div className='overflow-clip'>
            <p onClick={handleSignOut} className={`px-1 py-2 text-black cursor-pointer rounded-md font-bold  hover:bg-yellow-500 active:bg-yellow-600 ease-in-out duration-200 ${isListMenu?"translate-y-0  opacity-100":'-translate-y-20 opacity-0' }`}>Sign Out</p>
          </div>}
        </div>
      </div>}
    </div>
  )
}

export default Header
