import React,{useState} from 'react'
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import GoogleBtn from '../components/GoogleBtn'
import {getAuth,createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import {auth, db} from '../../firebase'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast'


const SignUp = () => {
  const [formData, setData] = useState({
    email: '',
    password: '',
    name:''
  })
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const changePassword = () => {
    setShowPassword(!showPassword)
  }

  const changeHandler = (e) => {
    console.log({[e.target.name]: e.target.value})
  setData((prevState)=>({...prevState, [e.target.id]: e.target.value}))
  }

  const Submit =async(e)=>{
    e.preventDefault()
    
    try{
      const useCredentials =  await createUserWithEmailAndPassword(auth, email, password)
      const user = useCredentials.user
      updateProfile(auth.currentUser, {
        displayName: name,
      })

      const formDataCopy = {...formData}
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()
      await setDoc(doc(db,"users",user.uid),formDataCopy)
      navigate("/")
      toast.success('Successfully created!');
    }catch(error){
      console.log(error)
    }
  }

  const {email, password, name} = formData
  return (
    <section>
          <h1 className='text-center text-3xl text-black/90 font-bold mt-8 font-rale tracking-[4px]'>Register</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 mt-14 max-w-[90%] mx-auto gap-6">
            <div className="img w-full">
              <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="house-image" className="w-full rounded-md shadow-2xl h-full" />
            </div>

            <div className='w-full'>
            <form onSubmit={Submit} className="px-8 py-14 w-full ">
              <div className="mb-10 md:mb-none">
                <label className="block text-slate-700 text-xl font-bold mb-2">Email</label>
                <div className="w-full relative">
                <input onChange={changeHandler} required type="email" value={email} className="shadow appearance-none border rounded w-full py-4 px-12 text-slate-700 leading-tight focus:outline-none transition-all focus:shadow-outline" id="email" placeholder="Email" />
                <BsFillPersonFill className='absolute top-4 left-2 text-2xl' />
                  
                </div>
              </div>
              <div className="mb-10 md:mt-8">
                <label className="block text-slate-700 text-xl font-bold mb-2">Password</label>
                <div className="relative w-full">
                <input required minLength={6} onChange={changeHandler}  type={`${showPassword ? 'text' : 'password' }`} value={password} className="shadow appearance-none border rounded w-full py-4  px-12 text-slate-700 leading-tight focus:outline-none transition-all focus:shadow-outline" id="password" placeholder="Password" />
                {!showPassword && <AiFillEyeInvisible onClick={changePassword} className='text-3xl absolute top-3 right-5' />}
                {showPassword && <AiFillEye onClick={changePassword} className='text-3xl absolute top-3 right-5' />}
                </div>
              </div>
              <div className="mb-10 md:mt-4">
                <label className="block text-slate-700 text-xl font-bold mb-2">Full Name</label>
                <input onChange={changeHandler} required minLength={8}  type="text" value={name} className="shadow appearance-none border rounded w-full py-4 px-12 text-slate-700 leading-tight focus:outline-none focus:border focus:border-amber-300 focus:shadow-outline" id="name" placeholder="Full Name" />
              </div>

              <div className="w-full flex flex-col space-y-4 lg:space-y-0 lg:flex-row justify-between">
                <p className="text-md text-black">Already have an account? <Link className='text-red-500' to='/sign-up'>Sign In</Link></p>
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

export default SignUp