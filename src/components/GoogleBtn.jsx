import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {auth, db} from '../../firebase'
import { doc, serverTimestamp, setDoc,getDoc } from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast'



const GoogleBtn = () => {

  const navigate = useNavigate();

  const Google=async()=>{
    try{

      const provider = new GoogleAuthProvider()
      const result = await  signInWithPopup(auth,provider)
      const user = result.user

      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)
      if(!docSnap.exists()){
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp()
        })
      }
      navigate("/")
      toast.success('Successfully created!');
    }catch(error){
      console.log(error)
    }
    
  }
  return (
    <button type='button' onClick={Google} className='w-full py-4 rounded-md uppercase shadow-lg px-8 text-center flex justify-center items-center gap-5 bg-red-700 hover:bg-red-500 active:translate-y-2 transition ease-in-out duration-700 active:bg-red-400 text-white'>
        <FcGoogle className='text-2xl' />Continue With Google
    </button>
  )
}

export default GoogleBtn