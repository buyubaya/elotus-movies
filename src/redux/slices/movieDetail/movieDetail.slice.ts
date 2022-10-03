import { IMovieDetail } from '@/apis/movieDetail/types';
import { AppRootState } from '@/redux/store';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getCreditsAction, getMovieDetailAction, getRecommendedMoviesAction } from './movieDetail.actions';
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

    builder
      .addCase(getRecommendedMoviesAction.pending, (state, action) => {
        if (!state.recommendations) {
          state.recommendations = {};
        }
        if (!state.recommendations[action.meta.arg.movieId]) {
          state.recommendations[action.meta.arg.movieId] = {
            status: 'LOADING',
            data: [],
          };
        } else {
          state.recommendations[action.meta.arg.movieId].status = 'LOADING';
        }
      })
      .addCase(getRecommendedMoviesAction.fulfilled, (state, action) => {
        if (!state.recommendations) {
          state.recommendations = {};
        }
        if (!state.recommendations[action.meta.arg.movieId]) {
          state.recommendations[action.meta.arg.movieId] = {
            status: 'SUCCESS',
          };
        } else {
          state.recommendations[action.meta.arg.movieId].status = 'SUCCESS';
        }
        state.recommendations[action.meta.arg.movieId].data = action.payload?.results || [];
      })
      .addCase(getRecommendedMoviesAction.rejected, (state, action) => {
        if (!state.recommendations) {
          state.recommendations = {};
        }
        if (!state.recommendations[action.meta.arg.movieId]) {
          state.recommendations[action.meta.arg.movieId] = {
            status: 'ERROR',
          };
        } else {
          state.recommendations[action.meta.arg.movieId].status = 'ERROR';
        }
      });

    builder
      .addCase(getCreditsAction.pending, (state, action) => {
        if (!state.credits) {
          state.credits = {};
        }
        if (!state.credits[action.meta.arg.movieId]) {
          state.credits[action.meta.arg.movieId] = {
            status: 'LOADING',
          };
        } else {
          state.credits[action.meta.arg.movieId].status = 'LOADING';
        }
      })
      .addCase(getCreditsAction.fulfilled, (state, action) => {
        if (!state.credits) {
          state.credits = {};
        }
        if (!state.credits[action.meta.arg.movieId]) {
          state.credits[action.meta.arg.movieId] = {
            status: 'SUCCESS',
          };
        } else {
          state.credits[action.meta.arg.movieId].status = 'SUCCESS';
        }
        state.credits[action.meta.arg.movieId].data = action.payload;
      })
      .addCase(getCreditsAction.rejected, (state, action) => {
        if (!state.credits) {
          state.credits = {};
        }
        if (!state.credits[action.meta.arg.movieId]) {
          state.credits[action.meta.arg.movieId] = {
            status: 'ERROR',
          };
        } else {
          state.credits[action.meta.arg.movieId].status = 'ERROR';
        }
      });
  },
});

export const movieDetailSelectors = movieDetailAdapter.getSelectors<AppRootState>((state) => state.movieDetail.data);

const movieDetailReducer = movieDetailSlice.reducer;
export default movieDetailReducer;
