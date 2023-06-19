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
  favorite: CartItem[]
  counter: number
}

const initialState: CounterState = {
  favorite: [],
  counter: 0,
};

export const favoriteSlice = createSlice({
  name: 'addFavorite',
  initialState,
  reducers: {
    toogleFav: (state, action) => {
      const favItem = state.favorite.find(item => item.id === action.payload.id);
      console.log(favItem);
      if(favItem) {
        state.favorite = state.favorite.filter(item => item.id !== action.payload.id);
        state.counter--;
      } else {
        state.favorite.push(action.payload);
        state.counter++;
      }
    },
  },
});

export const { toogleFav } = favoriteSlice.actions;



export default favoriteSlice.reducer;