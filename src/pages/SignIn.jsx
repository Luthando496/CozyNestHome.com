import React,{useState} from 'react'
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import GoogleBtn from '../components/GoogleBtn'



const SignIn = () => {
  const [formData, setData] = useState({
    email: '',
    password: '',
  })

  const [showPassword, setShowPassword] = useState(false)
  const changePassword = () => {
    setShowPassword(!showPassword)
  }

  const changeHandler = (e) => {
    console.log({[e.target.name]: e.target.value})
  setData((prevState)=>({...prevState, [e.target.id]: e.target.value}))
  }

  const Submit =(e)=>{
    e.preventDefault()
    console.log(formData)
  }

  const {email, password} = formData
  return (
    <section>
          <h1 className='text-center text-3xl text-black/90 font-bold mt-8 font-rale tracking-[4px]'>Sign In</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 mt-14 max-w-[90%] mx-auto gap-6">
            <div className="img w-full">
              <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="house-image" className="w-full rounded-md shadow-2xl h-full" />
            </div>

            <div className='w-full'>
            <form onSubmit={Submit} className="px-8 py-14 w-full ">
              <div className="mb-10 md:mb-none">
                <label className="block text-slate-700 text-xl font-bold mb-2">Email</label>
                <div className="w-full relative">
                <input onChange={changeHandler}  type="email" value={email} className="shadow appearance-none border rounded w-full py-4 px-12 text-slate-700 leading-tight focus:outline-none transition-all focus:shadow-outline" id="email" placeholder="Email" />
                <BsFillPersonFill className='absolute top-4 left-2 text-2xl' />
                  
                </div>
              </div>
              <div className="mb-10 md:mt-8">
                <label className="block text-slate-700 text-xl font-bold mb-2">Password</label>
                <div className="relative w-full">
                <input onChange={changeHandler}  type={`${showPassword ? 'text' : 'password' }`} value={password} className="shadow appearance-none border rounded w-full py-4  px-12 text-slate-700 leading-tight focus:outline-none transition-all focus:shadow-outline" id="password" placeholder="Password" />
                {!showPassword && <AiFillEyeInvisible onClick={changePassword} className='text-3xl absolute top-3 right-5' />}
                {showPassword && <AiFillEye onClick={changePassword} className='text-3xl absolute top-3 right-5' />}
                </div>
              </div>

              <div className="w-full flex flex-col space-y-4 lg:space-y-0 lg:flex-row justify-between">
                <p className="text-md text-black">Don't have an account? <Link className='text-red-500' to='/register'>Register</Link></p>
                <div className="text-md text-black"> <Link to='/forgot-password'>Forgot Password</Link></div>
              </div>

              <button type='submit' onClick={Submit} className="w-full shadow-lg active:bg-sky-700 px-12 text-center py-4 text-md tracking-[4px] rounded-md bg-sky-500 hover:bg-sky-700 duration-700 text-white font-rail font-semibold uppercase mt-12">Register</button>
              <div className="my-6  flex  items-center before:border-gray-400 before:flex-1 before:border-t after:border-gray-400 after:flex-1 after:border-t">
                <p className="text-center text-md font-rail tracking-[2px] font-bold mx-4">OR</p>
              </div>
              <GoogleBtn />
            </form>

            </div>
          </div>
    </section>
  )
}

export default SignIn