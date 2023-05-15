import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'


const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const pathMatch=(route)=>{
        if(route === location.pathname){
            return true;
        }
    }
    
    

  return (
    <div className='bg-white border-b shadow-md sticky top-0 z-50'>
        <header className='flex justify-between items-center px-8 max-w-6xl mx-auto'>
            <div>
                <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="logo-image" className='h-5 cursor-pointer' onClick={()=> navigate('/')} />
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li onClick={()=> navigate('/')} className={`py-4 text-gray-400 cursor-pointer text-md font-semibold hover:text-pink-400 duration-700 border-b-[3px] border-b-transparent ${pathMatch('/') && 'border-b-[3px] border-b-amber-400 text-black'}`}>Home</li>
                    <li onClick={()=> navigate('/offers')} className={`py-4 text-gray-400 cursor-pointer text-md font-semibold hover:text-pink-400 duration-700 ${pathMatch('/offers') && 'border-b-[3px] border-b-amber-400 text-black'}`}>Offers</li>
                    <li onClick={()=> navigate('/sign-in')} className={`py-4 text-gray-400 cursor-pointer text-md font-semibold hover:text-pink-400 duration-300  ${pathMatch('/sign-in') && ' border-b-amber-400 border-b-[3px] text-black'}`}>Sign In</li>
                </ul>
            </div>
        </header>
    </div>
  )
}

export default Header