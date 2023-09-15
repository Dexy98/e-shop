import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Cart, products } from "../../react-app-env";


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
        }
    },
})


export const {addToCart} = cartSlice.actions