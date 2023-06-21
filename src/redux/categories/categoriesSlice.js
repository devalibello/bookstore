import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'Under construction',
  },
  reducers: {
    status(state) {
      return state.status;
    },
  },
});

export const { status } = categoriesSlice.actions;
export default categoriesSlice.reducer;
