import { createSlice } from '@reduxjs/toolkit';


export interface CartItem {
  id: number,
  name: string,
  count: number,
  price: number,
  category: string,
  descriptions: string
}

export interface CounterState {
  cart: CartItem[]
  price: number,
  counter: number
}

const initialState: CounterState = {
  cart: [],
  price: 0,
  counter: 0,
};

export const cartSlice = createSlice({
  name: 'cartCounter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      if(state.counter > 1 ) {
        state.counter--;
      } else if (state.counter === 1) {
        state.counter = 0;
      }
    },
    addProduct: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if(!item) {
        state.cart.push(action.payload);
        state.price = state.price + +action.payload.price;
      } else {
        item.count++;
        state.price = state.price + +action.payload.price;
      }
    },
    deleteProduct: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if(item?.count === 1) {
        state.cart = state.cart.filter(item => item.id !== action.payload.id);
        state.price = state.price - +action.payload.price;
      } else if (item) {
        item.count--;
        state.price = state.price - +action.payload.price;
      }
    },
    deleteAllProduct: (state, action) => {
      console.log(action.payload);
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
      state.counter = state.counter - action.payload.count;
      state.price = state.price - action.payload.price * action.payload.count;
    }
  },
});

export const { increment, decrement, addProduct, deleteProduct, deleteAllProduct } = cartSlice.actions;

export default cartSlice.reducer;