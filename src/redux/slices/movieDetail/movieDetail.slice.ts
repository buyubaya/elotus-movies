import { IMovieDetail } from '@/apis/movieDetail/types';
import { AppRootState } from '@/redux/store';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getMovieDetailAction } from './movieDetail.actions';
import { IMovieDetailReducerState } from './types';

export const MOVIE_DETAIL_SLICE_NAME = 'movieDetail';

const movieDetailAdapter = createEntityAdapter<IMovieDetail>({
  selectId: (account) => account.id,
});

const initialState: IMovieDetailReducerState = {
  statusMap: {},
  errorMap: {},
  data: movieDetailAdapter.getInitialState({
    ids: [],
    entities: {},
  }),
};

const movieDetailSlice = createSlice({
  name: MOVIE_DETAIL_SLICE_NAME,
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieDetailAction.pending, (state, action) => {
        state.statusMap[action.meta.arg.movieId] = 'LOADING';
      })
      .addCase(getMovieDetailAction.fulfilled, (state, action) => {
        state.statusMap[action.meta.arg.movieId] = 'SUCCESS';
        const payload = action.payload;
        delete state.errorMap[action.meta.arg.movieId];
        movieDetailAdapter.addOne(state.data, payload);
      })
      .addCase(getMovieDetailAction.rejected, (state, action) => {
        state.statusMap[action.meta.arg.movieId] = 'ERROR';
        state.errorMap[action.meta.arg.movieId] = action.error?.message;
      });
  },
});

export const movieDetailSelectors = movieDetailAdapter.getSelectors<AppRootState>((state) => state.movieDetail.data);

const movieDetailReducer = movieDetailSlice.reducer;
export default movieDetailReducer;
