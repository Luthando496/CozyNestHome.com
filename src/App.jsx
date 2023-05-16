import { useState,lazy,Suspense } from 'react'
import {Route,Routes} from 'react-router-dom'
const Home = lazy(()=>import('./pages/Home'))
const Header = lazy(()=>import('./components/Header'))
const Offers = lazy(()=>import('./pages/Offers'))
const SignIn = lazy(()=>import('./pages/SignIn'))
const SignUp = lazy(()=>import('./pages/SignUp'))
const ForgotPassword = lazy(()=>import('./pages/ForgotPassword'))
import {Toaster} from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 3000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/offers'  element={<Offers />} />
        <Route path='/sign-in'  element={<SignIn />} />
        <Route path='/register'  element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
      </Suspense>

    </>
  )
}

export default App
