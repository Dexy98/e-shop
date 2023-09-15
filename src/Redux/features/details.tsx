import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DetailProduct, products } from "../../react-app-env";


const initialState:DetailProduct = {
    detail : []
}

export const details = createSlice({
    name: 'details',
    initialState,
    reducers: {
        descriptionItem(state,action: PayloadAction<products>){
            state.detail = [action.payload];
        }
    },
})


export const {descriptionItem} = details.actions