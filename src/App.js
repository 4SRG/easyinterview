import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Cart from './pages/cart'
import Home from './pages/home'


const App = () => {
  return (
    <div className='bg-slate-700 min-h-screen'>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App