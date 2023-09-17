import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Cart, products } from "../../react-app-env";
//notifica
import { toast } from 'react-toastify';


const initialState:Cart = {
    cart : [],
    totalQuantity : 0,
    totalAmount : 0,
}

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart(state,action: PayloadAction<products>){
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id)
            
            if(itemIndex >= 0){
                state.cart[itemIndex].quantity += action.payload.quantity
            } else {
                const tempProduct = {...action.payload , quantity: action.payload.quantity}
                state.cart.push(tempProduct)
            }
            toast.success('✔ Aggiunto', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            localStorage.setItem('cartslice' , JSON.stringify(state))
        },
        removeFromCart(state, action: PayloadAction<number>){
            const itemIndex = state.cart.findIndex(item => item.id === action.payload)
            if(itemIndex >= 0){
                state.cart[itemIndex].quantity -= 1;
                if(state.cart[itemIndex].quantity === 0) {
                    state.cart.splice(itemIndex, 1);
                }
            }
            toast.error('❌ Rimosso', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }



    },
})


export const {addToCart, removeFromCart} = cartSlice.actions