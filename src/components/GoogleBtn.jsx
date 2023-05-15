import React from 'react'
import {FcGoogle} from 'react-icons/fc'



const GoogleBtn = () => {
  return (
    <button className='w-full py-4 rounded-md uppercase shadow-lg px-8 text-center flex justify-center items-center gap-5 bg-red-700 hover:bg-red-500 active:translate-y-2 transition ease-in-out duration-700 active:bg-red-400 text-white'>
        <FcGoogle className='text-2xl' />Continue With Google
    </button>
  )
}

export default GoogleBtn