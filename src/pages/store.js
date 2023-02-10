import { configureStore, createSlice } from "@reduxjs/toolkit";
const wish = createSlice({
  name: 'wish',
  initialState: [],
  reducers: {
    addPro(state, action) {
      const index = state.findIndex((i) => {return i.id === action.payload.id})
      if(index > -1 ) {
        alert('이미 추가된 상품입니다.');
      } else {
        state.push(action.payload);
        alert('위시리스트에 담았습니다.')
      }
    },
    canPro(state, action) {
      const index = state.findIndex((i) => {return i.id === action.payload})
      state.splice(index, 1)
    }
  }
})
export const { addPro, canPro } = wish.actions
const cart = createSlice({
  name: 'cart',  
  initialState: [],
  reducers: {
    addCount(state, action) {
      const index = state.findIndex((i) => {return i.id === action.payload})
      state[index].count++
    },
    subCount(state,action) {
      const index = state.findIndex((i) => {return i.id === action.payload})
      if(state[index].count > 1) {state[index].count--}
    },
    deleteItem(state, action) {
      const index = state.findIndex((i) => {return i.id === action.payload})
      state.splice(index, 1)
    },
    addItem(state, action) {
      const index = state.findIndex((i) => {return i.id === action.payload.id})
      if(index > -1) {
        state[index].count++
      } else {
        state.push(action.payload)
      }
    }
  }
})
export const { addCount, subCount, deleteItem, addItem } = cart.actions 
export default configureStore({
  reducer: {
    cart: cart.reducer,
    wish: wish.reducer,
  }
})