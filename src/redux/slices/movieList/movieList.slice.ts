import { IListMovieInfo } from '@/apis/movieList/types';
import { MovieListType } from '@/types/common';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getMovieListAction } from './movieList.actions';
import { IMovieListReducerState } from './types';

export const MOVIE_LIST_SLICE_NAME = 'movieList';

const movieListAdapter = createEntityAdapter<IListMovieInfo>({
  selectId: (account) => account.id,
});

const initialState: IMovieListReducerState = {
  statusMap: {},
  errorMap: {},
  extraDataMap: {},
  now_playing: movieListAdapter.getInitialState({
    ids: [],
    entities: {},
  }),
  top_rated: movieListAdapter.getInitialState({
    ids: [],
    entities: {},
  }),
  popular: movieListAdapter.getInitialState({
    ids: [],
    entities: {},
  }),
  upcoming: movieListAdapter.getInitialState({
    ids: [],
    entities: {},
  }),
};

const movieListSlice = createSlice({
  name: MOVIE_LIST_SLICE_NAME,
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieListAction.pending, (state, action) => {
        state.statusMap[action.meta.arg.listType as MovieListType] = 'LOADING';
      })
      .addCase(getMovieListAction.fulfilled, (state, action) => {
        const listType = action.meta.arg.listType as MovieListType;
        state.statusMap[listType] = 'SUCCESS';
        const { results, ...restData } = action.payload;
        state.extraDataMap[listType] = restData;
        delete state.errorMap[listType];
        movieListAdapter.setAll(state[listType], results);
      })
      .addCase(getMovieListAction.rejected, (state, action) => {
        state.statusMap[action.meta.arg.listType as MovieListType] = 'ERROR';
        state.errorMap[action.meta.arg.listType as MovieListType] = action.error?.message;
      });
  },
});

const movieListReducer = movieListSlice.reducer;
export default movieListReducer;
