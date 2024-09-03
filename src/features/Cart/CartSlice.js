import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartItems:[],
    totalQuantity:0,
    totalPrice:0,
}
const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItemToCart:(state,action)=>{
            const newItem=action.payload
            const existingItem=state.cartItems.find(item=>item.id===newItem.id);
            state.totalQuantity++;
            if(!existingItem){
                state.cartItems.push({
                    id:newItem.id,
                    name:newItem.name,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                })
            }else{
                existingItem.quantity++;
                existingItem.totalPrice+=newItem.price;
            }
            state.totalPrice+=newItem.price;

        },
        removeItemFromCart:(state,action)=>{
            const id=action.payload;
            const existingItem=state.cartItems.find((item)=>item.id===id)
            if(existingItem){
                state.totalQuantity-= existingItem.quantity;
                state.totalPrice-=existingItem.totalPrice;
                state.cartItems=state.cartItems.filter((item)=>item.id!==id);   
            }

        },
        increaseItemQuantity:(state,action)=>{
            const id=action.payload;
            const existingItem=state.cartItems.find((item)=>item.id===id)
        if(existingItem){
            existingItem.quantity++
            existingItem.totalPrice+=existingItem.price;
            state.totalPrice+=existingItem.price;
            state.totalQuantity++;
        }
        },
        decreaseItemQuantity(state,action){
            const id=action.payload;
            const existingItem=state.cartItems.find((item)=>item.id===id);
            if(existingItem){
                if(existingItem.quantity > 1){
                    existingItem.quantity--;
                    existingItem.totalPrice-=existingItem.price;
                    state.totalPrice-=existingItem.price
                    state.totalQuantity--;
                }else{
                    state.cartItems=state.cartItems.filter((item)=>item.id !== id);
                    state.totalQuantity--;
                    state.totalPrice-=existingItem.price;
                }
            }
        }
    }
}) 
export const { addItemToCart, removeItemFromCart, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;