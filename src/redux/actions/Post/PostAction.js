import {createAsyncThunk} from '@reduxjs/toolkit';

//create actions
export const getPosts = createAsyncThunk(
  'POST',
  async (payload, {rejectWithValue, getState, dispatch}) => {
    try {
      var requestOptions = {
        method: 'GET',
      };

      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        requestOptions,
      );

      let data = await response.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  },
);
