import {createSlice} from '@reduxjs/toolkit';
import {getPosts} from '../actions/Post/PostAction';

//reducer
const postSlice = createSlice({
  name: 'Post',
  initialState: {},
  extraReducers: {
    // posts
    [getPosts.pending]: (state, action) => {
      state.postErrors = action.payload;
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.Posts = action.payload;
      state.loading = false;
    },
    [getPosts.rejected]: (state, action) => {
      alert(action.payload);
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
