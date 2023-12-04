import React from 'react'
import Footer from './Footer'

const Body = () => {
  return (
    <div className='h-full w-ful relative scale-100'>
      <img className='bg-cover ' src='https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='main-background-img'/>
      <div className='w-full h-full opacity-50 absolute top-0 left-0 bg-black'></div>

      <Footer/>
    </div>
  )
}

export default Body
