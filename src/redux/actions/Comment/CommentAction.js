import {createAsyncThunk} from '@reduxjs/toolkit';

//create actions
export const getComments = createAsyncThunk(
  'COMMENT',
  async (payload, {rejectWithValue, getState, dispatch}) => {
    try {
      var requestOptions = {
        method: 'GET',
      };

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${payload.id}/comments`,
        requestOptions,
      );

      let data = await response.json();

      payload.navigation.navigate('Comment', {
        comments: data,
      });
      return data;
    } catch (error) {
      console.log(error.message);
    }
  },
);
