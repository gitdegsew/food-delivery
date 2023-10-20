import { createSelector, createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addTocart: (state,action) => {
    
      state.items=[...state.items,action.payload]
      
    },
    removeFromCart: (state,action) => {
        let newCart=[...state.items]
        let itemIndex=state.items.findIndex(item=>item.id==action.payload.id)
        if(itemIndex>=0){
            newCart.splice(itemIndex,1)
        }else{
            console.log('cant remove the item that is not added to cart')
        }
        state.items=newCart
      },
      emptyCart: (state,action) => {
        state.items=[]
      },
   
  },
})

// Action creators are generated for each case reducer function
export const { addTocart,removeFromCart,emptyCart } = cartSlice.actions

export const selectCartItems=state=>state.cart.items
export const selectCartItemById = createSelector(
  [selectCartItems, (_, id) => id], // Dependencies
  (items, id) => items.filter(item => item.id === id) // Selector function
);

export const selectTotalPrice=state=>state.cart.items.reduce((total,item)=>total=total+item.price,0)

export default cartSlice.reducer