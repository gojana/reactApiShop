import { createSlice } from '@reduxjs/toolkit';

const autoCompleteSlice = createSlice({
  name: 'autoComplete',
  initialState: {
    items: [],
  },
  reducers: {
    autoCompleteFiller(state, action) {
      const newItems = action.payload;
      newItems.map((item) => {
        state.items.push(item);
      });
    },
    autoCompleteClear(state) {
      state.items = [];
    },
  },
});
export const autoCompleteActions = autoCompleteSlice.actions;

export default autoCompleteSlice;
