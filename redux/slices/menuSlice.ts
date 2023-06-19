import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  openedSearch: boolean
  opened: boolean
  menuLevel: number
}

const initialState: CounterState = {
  openedSearch: false,
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
    },
    setOpenSearch (state) {
      state.openedSearch = true;
    },
    setCloseSearch: (state) => {
      state.openedSearch = false;
    },
  },

});

export const { setOpen, setClose, setMenuLevel, setOpenSearch, setCloseSearch } = menuSlice.actions;



export default menuSlice.reducer;