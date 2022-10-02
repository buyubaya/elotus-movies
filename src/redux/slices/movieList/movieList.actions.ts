import { getMovieList } from '@/apis/movieList/getMovieList';
import { IGetMovieListRequestQuery } from '@/apis/movieList/types';
import { AppRootState } from '@/redux/store';
import { MovieListType } from '@/types/common';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IGetMovieListActionparams {
  listType: MovieListType;
  query?: IGetMovieListRequestQuery;
  force?: boolean;
}

export const getMovieListAction = createAsyncThunk(
  'movieList/getMovieListAction',
  async ({ listType, query }: IGetMovieListActionparams) => {
    const response = await getMovieList(listType, query);
    return response;
  },
  {
    condition: ({ listType, force }, { getState }) => {
      if (force) {
        return true;
      }

      const currentState = getState() as AppRootState;

      if (currentState.movieList.statusMap[listType] === 'LOADING') {
        return false;
      }

      return true;
    },
  }
);
