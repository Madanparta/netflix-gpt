import React, { useRef, useState } from 'react'
import Footer from './Footer';
import { emailValidation,passwordValidation,nameValidation } from '../utils/validation';
import {auth } from "../utils/firebase";

import { createUserWithEmailAndPassword,updateProfile  } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Header from './Header';


const Body = () => {

  const navigation = useNavigate()

  const [signUp,setSignUp]=useState(false);

  const [nameError,setNameError]=useState(null);
  const [emailError,setEmailError]=useState(null);
  const [passwordError,setPasswordError]=useState(null);

  const displayName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const onSubmit = (e) => {
    e.preventDefault();
    const emailError = emailValidation(email);
    const passwordError = passwordValidation(password);
    
    if(signUp){
      const nameError = nameValidation(displayName);
      setNameError(nameError)
    }
    
    setEmailError(emailError)
    setPasswordError(passwordError)

    if(emailError && passwordError) return;


    if (signUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: displayName.current.value
          }).then(() => {
            // Profile updated!
            console.log("upadated successfully..")
            // ...
          }).catch((error) => {
            // An error occurred
            console.log("worng something..")
            // ...
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // just checking..
          setEmailError(errorCode);
          setPasswordError(errorMessage);

          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigation('/browser')


          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // just checking..
          setEmailError(errorCode);
          setPasswordError(errorMessage);
          navigation("/")
        });
    }

  }


  return (
    <>
    <Header/>
    <div className='h-full w-full relative scale-100'>
      <img className='bg-cover bg-fixed bg-center h-[120vh] w-full' src='https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='main-background-img'/>
      <div className='w-full h-full opacity-50 absolute top-0 left-0 bg-black'></div>
      
      <div className='absolute bottom-20 left-0 w-full flex justify-center items-center opacity-80 h-full'>
        <form onSubmit={onSubmit} className=' text-white  bg-black rounded-lg py-12 px-16'>
          
          <div className='w-80'>
            {
              signUp?<h1 className='text-3xl font-bold mb-7'>Sign Up</h1>:<h1 className='text-3xl font-bold mb-7'>Sign In</h1>

            }
            
            <div className='flex flex-col gap-5 text-center pb-10'>

              {
                signUp && (<input ref={displayName} className={`${nameError?"border border-red-600 'h-14 w-full px-4 pt-5 pb-4 rounded-md focus:outline-none bg-[#161110] border-slate-500'":'h-14 w-full px-4 pt-5 pb-4 rounded-md focus:outline-none bg-[#161110] border border-slate-500'}`} autoComplete='off' type='text' name='name' placeholder='Full Name'/>)
              }
              {
                nameError && <p className='text-sm text-red-500 font-light text-start'>{nameError}</p>
              }


              <input ref={email} className={`${emailError?"border border-red-600 'h-14 w-full px-4 pt-5 pb-4 rounded-md focus:outline-none bg-[#161110] border-slate-500'":'h-14 w-full px-4 pt-5 pb-4 rounded-md focus:outline-none bg-[#161110] border border-slate-500'}`} autoComplete='off' type='type' name='email' placeholder='Email or Phone Number'/>
              {
                emailError && <p className='text-sm text-red-500 font-light text-start'>{emailError}</p>
              }

              <input ref={password} className={`${passwordError?"border border-red-600 'h-14 w-full px-4 pt-5 pb-4 rounded-md focus:outline-none bg-[#161110] border-slate-500'":'h-14 w-full px-4 pt-5 pb-4 rounded-md focus:outline-none bg-[#161110] border border-slate-500'}`} autoComplete='off' type='password' name='password' placeholder='Password'/>
              {
                passwordError && <p className='text-sm text-red-500 font-light text-start'>{passwordError}</p>
              }

              <button type='submit' className='h-10 w-full bg-red-600 hover:bg-red-700 active:bg-red-800 font-bold rounded-md'>{signUp?"Sign Up":"Sign In"}</button>

              {
                signUp?"":<p className='text-lg cursor-pointer hover:underline transition duration-150 ease-in-out'>Forgot password?</p>
              }

            </div>

            <div className='pb-5'>
              <input type='checkbox' className='mr-2'/>
              <span>Remember me</span>

              {
                signUp?<p className='my-3 text-gray-500 mr-2'>You have an already Account? <span className='text-white font-bold cursor-pointer hover:underline' onClick={()=>setSignUp(!signUp)}>Sign In now.</span></p>:<p className='my-3 text-gray-500 mr-2'>New to Netflix? <span className='text-white font-bold cursor-pointer hover:underline' onClick={()=>setSignUp(!signUp)}>Sign up now.</span></p>
              }
              
            </div>
          </div>

        </form>
      </div>

      <Footer/>
    </div>
    </>
  )
}

export default Body
