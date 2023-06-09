import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blog',
  initialState: [],
  reducers: {
    setBlogs: (state, action) => {
      return action.payload;
    },
  },
});

export const { setBlogs } = blogSlice.actions;

export default blogSlice.reducer;
