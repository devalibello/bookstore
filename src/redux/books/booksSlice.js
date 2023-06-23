import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/rLWfgIbPsqUQyzUR9fFI/books/';

const initialState = {
  books: [],
  ifSucceed: false,
  isLoading: false,
  error: null,
};

const headers = {
  headers: {
    'content-type': 'application/json',
  },
};

const addBooks = createAsyncThunk('books/appendBooks', async (newBook) => {
  const data = JSON.stringify(newBook);
  try {
    const response = await axios.post(url, data, headers);
    return response.data;
  } catch (error) {
    return error;
  }
});

const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (err) {
      return err.message;
    }
  },
);

const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  const data = JSON.stringify({ item_id: id });
  try {
    const response = await axios.delete(url + id, data, headers);
    return response.data;
  } catch (error) {
    return error;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: {
    [addBooks.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [addBooks.fulfilled]: (state) => ({
      ...state,
      isLoading: false,
      ifSucceed: false,
    }),
    [addBooks.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),
    [fetchBooks.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [fetchBooks.fulfilled]: (state, action) => ({
      ...state,
      isLoading: false,
      ifSucceed: true,
      books: action.payload,
    }),
    [fetchBooks.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),
    [removeBook.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [removeBook.fulfilled]: (state) => ({
      ...state,
      isLoading: false,
      ifSucceed: false,
    }),
    [removeBook.rejected]: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
});

// const booksSlice = createSlice({
//   name: 'books',
//   initialState: {
//     books: [],
//   },
//   reducers: {
//     appendBooks(state, action) {
//       state.books.push(action.payload);
//     },

//     removeBooks(state, action) {
//       return {
//         ...state,
//         books: state.books.filter((book) => book.item_id !== action.payload),
//       };
//     },
//   },
// });

// export const { appendBooks, removeBooks } = booksSlice.actions;
export default booksSlice.reducer;
export { addBooks, fetchBooks, removeBook };
