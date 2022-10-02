import { getMovieDetail } from '@/apis/movieDetail/getMovieDetail';
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
