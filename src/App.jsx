import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Cart from './pages/Cart';
import cartSliceReducer from './slices/cart';
import { Toaster } from 'react-hot-toast';

export const store = configureStore({
   reducer: {
      cart: cartSliceReducer,
   },
})

const App = () => {
   return (
      <div className='w-screen h-screen overflow-auto mx-auto'>
         <Navbar />

         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
         </Routes>
         <Toaster />
      </div >
   )
}

export default App