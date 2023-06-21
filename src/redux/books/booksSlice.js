import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: { books: [] },
  reducers: {
    appendBooks(state, action) {
      state.books.push(action.payload);
    },

    removeBooks(state, action) {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    },
  },
});

export const { appendBooks, removeBooks } = booksSlice.actions;
export default booksSlice.reducer;
