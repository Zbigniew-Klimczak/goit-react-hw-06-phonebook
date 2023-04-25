import { createSlice } from '@reduxjs/toolkit';
const formInitialState = {
  name: '',
  number: '',
};
const formSlice = createSlice({
  name: 'form',
  initialState: formInitialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setNumber(state, action) {
      state.number = action.payload;
    },
  },
});
export const { setName, setNumber } = formSlice.actions;
export const formReducer = formSlice.reducer;
