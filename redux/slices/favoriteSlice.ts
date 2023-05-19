import { createSlice } from '@reduxjs/toolkit';

export interface CartItem {
  id: number,
  name: string,
  count: number
}

export interface CounterState {
  favorite: CartItem[]
}

const initialState: CounterState = {
  favorite: [],
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
      } else {
        state.favorite.push(action.payload);
      }
    },
  },
});

export const { toogleFav } = favoriteSlice.actions;



export default favoriteSlice.reducer;