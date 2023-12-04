import React from 'react';
import { TfiWorld } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className='absolute bottom-0 left-0 w-full h-64 bg-black opacity-75'>
      <div className='text-gray-400 w-1/2 m-auto h-full py-8'>
        <p className='text-lg font-light mb-11'>Questions? Call <span className='hover:underline cursor-pointer'>000-800-919-1694</span></p>

        <div className=' flex flex-col'>

            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <p className='hover:underline cursor-pointer font-light text-sm mb-4'>FAQ</p>
                    <p className='hover:underline cursor-pointer font-light text-sm'>Cookie Preferences</p>
                </div>
                <div className='flex flex-col'>
                    <p className='hover:underline cursor-pointer font-light text-sm mb-4'>Help Center</p>
                    <p className='hover:underline cursor-pointer font-light text-sm'>Cookie Preference</p>
                </div>
                <div className='flex flex-col'>
                    <p className='hover:underline cursor-pointer font-light text-sm mb-4'>Terms of Use</p>
                </div>
                <div className='flex flex-col'>
                    <p className='hover:underline cursor-pointer font-light text-sm mb-4'>Privacy</p>
                </div>
            </div>

            <div className='mt-7'>
                <button className='bg-black flex items-center font-light text-sm border border-gray-400  p-1'><TfiWorld className='text-lg m-3'/> 
                    <select id='longuage' className='bg-black'>
                        {/* <option value=""><IoIosArrowDown/></option> */}
                        <option className='hover:bg-blue-900' value="englis">English</option>
                        <option className='hover:bg-blue-900' value="hindi">हिन्दी</option>
                    </select>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
