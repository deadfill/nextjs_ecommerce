import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  opened: boolean
  menuLevel: number
}

const initialState: CounterState = {
  opened: false,
  menuLevel: 1
};

export const menuSlice = createSlice({
  name: 'menuOpened',
  initialState,
  reducers: {
    setOpen: (state) => {
      state.opened = true;
    },
    setClose: (state) => {
      state.opened = false;
    },
    setMenuLevel: (state, action) => {
      state.menuLevel = action.payload;
    }
  },

});

export const { setOpen, setClose, setMenuLevel } = menuSlice.actions;



export default menuSlice.reducer;