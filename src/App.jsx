import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Offers from './pages/Offers'
import SignIn from './pages/SignIn'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/offers'  element={<Offers />} />
        <Route path='/sign-in'  element={<SignIn />} />
      </Routes>

    </>
  )
}

export default App
