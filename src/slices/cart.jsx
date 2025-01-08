import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
   totalItems: 0,
   totalAmount: 0,
   items: [],
}

export const CartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action) => {

         let ind = state.items.some(item => item?.id === action.payload?.id);
         if (ind) {
            toast.error('Product is already in the Cart');
            return;
         }

         state.totalItems++;
         state.items.push(action.payload);
         state.totalAmount += action.payload?.price
         toast.success('Product Added to the Cart');
      },

      removeFromCart: (state, action) => {
         state.items = state.items.filter(item => item.id !== action.payload?.id)
         state.totalItems--
         state.totalAmount -= action.payload?.price
         toast.success("Product Removed");
      }
   }
})

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;