import { getMovieConfiguration } from '@/apis/movieConfiguration/getMovieConfiguration';
import { AppRootState } from '@/redux/store';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IGetMovieConfigurationActionParams {
  force?: boolean;
}

export const getMovieConfigurationAction = createAsyncThunk(
  'movieConfiguration/getMovieConfigurationAction',
  async () => {
    const response = await getMovieConfiguration();
    return response;
  },
  {
    condition: ({ force }: IGetMovieConfigurationActionParams, { getState }) => {
      if (force) {
        return true;
      }

      const currentState = getState() as AppRootState;

      if (currentState.movieConfiguration.status === 'LOADING') {
        return false;
      }

      if (currentState.movieConfiguration.status === 'SUCCESS') {
        return false;
      }

      return true;
    },
  }
);
