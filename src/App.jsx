import React from 'react'
import Home from './pages/home'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
 
  return (
    <div > 
      <Home/>
       <ToastContainer />
    </div>
  )
}

export default App