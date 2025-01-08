import React from 'react'
import { BsCart4 } from "react-icons/bs";
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

   const { totalItems } = useSelector(state => state.cart);

   return (
      <div className='w-full bg-slate-600 flex justify-center items-center h-[10%]'>

         <div className='w-[75%] flex justify-between'>

            <NavLink to={'/'}>
               <img src={logo}
                  width={180}
                  className='cursor-pointer'
               />
            </NavLink>

            <div className='flex items-center gap-x-6 text-white'>
               <NavLink to={'/'} className='cursor-pointer'>
                  Home
               </NavLink>
               <div className='relative'>
                  <NavLink to={'/cart'}>
                     <BsCart4
                        className='cursor-pointer'
                        fontSize={30}
                     />
                     <div className='absolute top-5 left-1 bg-green-600 rounded-lg px-1 animate-bounce'>
                        {totalItems > 0 && totalItems}
                     </div>
                  </NavLink>

               </div>
            </div>

         </div>

      </div>
   )
}

export default Navbar