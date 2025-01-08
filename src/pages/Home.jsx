import React from 'react'
import { products } from '../data';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../slices/cart';

const Home = () => {

   const { items } = useSelector(state => state.cart);
   const dispatch = useDispatch();

   return (
      <div className='w-[80%] mt-10 mx-auto grid grid-cols-4 gap-x-5'>
         {
            products.map((product) => (
               <div key={product?.id}>
                  <div className='border-2 hover:scale-110 transition-all duration-150 cursor-pointer mb-8 shadow-lg rounded-md flex-col'>

                     <h2 className='text-lg text-center font-semibold mt-4'>{`${product?.title.substring(0, 18)}...`}</h2>
                     <p className='text-left px-10 mt-4 text-sm opacity-60'>{product?.description?.substring(0, 51)}...</p>
                     <img
                        className='mx-auto mt-4'
                        src={product?.image}
                        width={150}
                     />
                     <div className='flex items-center justify-between mt-8 mb-4'>
                        <p className='font-semibold ml-6 text-green-700'>
                           ${product?.price}
                        </p>

                        {
                           items.some(item => item?.id === product?.id) ? (
                              <button
                                 className='rounded-2xl px-2 py-1 mr-8 border-2 border-slate-600 hover:bg-gray-400 transition-all duration-100'
                                 onClick={() => dispatch(removeFromCart(product))}
                              >
                                 Remove
                              </button>
                           ) : (
                              <button
                                 className='rounded-2xl px-2 py-1 mr-8 border-2 border-slate-600 hover:bg-gray-400 transition-all duration-100'
                                 onClick={() => dispatch(addToCart(product))}
                              >
                                 Add To Cart
                              </button>
                           )
                        }
                     </div>
                  </div>

               </div>
            ))
         }
      </div>
   )
}

export default Home