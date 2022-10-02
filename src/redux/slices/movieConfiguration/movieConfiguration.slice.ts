import { createSlice } from '@reduxjs/toolkit';
import { getMovieConfigurationAction } from './movieConfiguration.actions';
import { IMovieConfigurationReducerState } from './types';

export const MOVIE_CONFIGURATION_SLICE_NAME = 'movieConfiguration';

const initialState: IMovieConfigurationReducerState = {
  status: undefined,
  configuration: null,
};

const movieConfigurationSlice = createSlice({
  name: MOVIE_CONFIGURATION_SLICE_NAME,
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieConfigurationAction.pending, (state) => {
        state.status = 'LOADING';
      })
      .addCase(getMovieConfigurationAction.fulfilled, (state, action) => {
        state.status = 'SUCCESS';
        state.configuration = action.payload;
      })
      .addCase(getMovieConfigurationAction.rejected, (state) => {
        state.status = 'ERROR';
      });
  },
});

const movieConfigurationReducer = movieConfigurationSlice.reducer;
export default movieConfigurationReducer;
