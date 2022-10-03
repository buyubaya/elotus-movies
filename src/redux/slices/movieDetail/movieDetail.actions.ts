import { getMovieDetail } from '@/apis/movieDetail/getMovieDetail';
import { getRecommendedMovies } from '@/apis/movieDetail/getRecommendedMovies';
import { IGetMovieDetailRequestQuery } from '@/apis/movieDetail/types';
import { AppRootState } from '@/redux/store';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IGetMovieDetailAction {
  movieId: string;
  query?: IGetMovieDetailRequestQuery;
  force?: boolean;
}

export const getMovieDetailAction = createAsyncThunk(
  'movieDetail/getMovieDetailAction',
  async ({ movieId, query }: IGetMovieDetailAction) => {
    const response = await getMovieDetail(movieId, query);
    return response;
  },
  {
    condition: ({ movieId, force }, { getState }) => {
      if (force) {
        return true;
      }

      const currentState = getState() as AppRootState;

      if (currentState.movieDetail.statusMap[movieId] === 'LOADING') {
        return false;
      }

      if (currentState.movieDetail.data.ids.includes(movieId)) {
        return false;
      }

      return true;
    },
  }
);

interface IGetRecommndedMoviesAction {
  movieId: string;
  force?: boolean;
}

export const getRecommendedMoviesAction = createAsyncThunk(
  'movieDetail/getRecommendedMoviesAction',
  async ({ movieId }: IGetRecommndedMoviesAction) => {
    const response = await getRecommendedMovies(movieId);
    return response;
  },
  {
    condition: ({ movieId, force }, { getState }) => {
      if (force) {
        return true;
      }

      const currentState = getState() as AppRootState;

      if (currentState.movieDetail.recommendations?.[movieId]?.status === 'LOADING') {
        return false;
      }

      return true;
    },
  }
);
