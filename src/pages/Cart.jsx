import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { MdOutlineDeleteForever } from "react-icons/md";
import { removeFromCart } from '../slices/cart'

const Cart = () => {

   const { items } = useSelector(state => state.cart);
   const { totalItems } = useSelector(state => state.cart);
   const { totalAmount } = useSelector(state => state.cart);

   const dispatch = useDispatch();

   return (
      <div className='flex flex-col justify-center items-center my-auto'>
         {
            totalItems === 0 ? (
               <div className='flex flex-col w-screen h-screen justify-center items-center'>
                  <div className='text-3xl mb-5 text-emerald-500 font-semibold'>
                     No Items in the Cart
                  </div>
                  <NavLink
                     to={'/'}
                     className='bg-slate-300 rounded-lg p-4 hover:scale-90 transition-all duration-150'>
                     Go To Home
                  </NavLink>
               </div>)
               : (
                  <div className='flex items-center justify-center mb-10'>
                     <div className='mt-10 mr-10 w-[50%]'>
                        {
                           items.map((item) => (
                              <div
                                 key={item?.id}
                                 className='flex gap-x-10 pt-8 border-b-4 pb-5 '
                              >
                                 <div>
                                    <img
                                       src={item?.image}
                                       width={200}
                                    />
                                 </div>

                                 <div className='w-[80%]'>
                                    <p className='font-bold text-2xl w-[80%] mb-5'>{item?.title}</p>
                                    <p className='text-lg opacity-50'>{item?.description.substring(0, 60)}...</p>
                                    <div className='flex items-center mt-5 justify-between mx-5'>
                                       <p className='text-green-500 text-xl font-semibold'>${item?.price}</p>
                                       <MdOutlineDeleteForever
                                          onClick={() => dispatch(removeFromCart(item))}
                                          fontSize={30}
                                          className='mr-20 hover:text-indigo-600 cursor-pointer hover:scale-125 transition-all duration-100'
                                       />
                                    </div>
                                 </div>
                              </div>
                           ))
                        }
                     </div>

                     {/* Total Summary */}
                     <div className='w-[25%] sticky top-0 bottom-0'>

                        <p className='font-semibold text-2xl text-green-700 mb-2'>YOUR CART</p>
                        <div className='font-bold text-5xl text-green-800 tracking-widest mb-8'>SUMMARY</div>

                        <p className='font-bold text-xl'>Total Items : {totalItems}</p>
                        <p className='font-bold text-xl mb-5'>Total Amount : ${totalAmount}</p>

                        <button
                           className=' bg-emerald-700 rounded-md p-3 text-white w-full hover:opacity-95 transition-all duration-100'
                        >
                           Checkout Now
                        </button>

                     </div>

                  </div>
               )
         }
      </div>
   )
}

export default Cart