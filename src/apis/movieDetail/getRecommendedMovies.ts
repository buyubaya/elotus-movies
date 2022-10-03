import { callApi } from '@/core/callApi';
import camelcaseKeys from 'camelcase-keys';
import { IMovieApiErrorResponse } from '../types';
import { IGetRecommendedMovieResponse } from './types';

export const getRecommendedMovies = async (movieId: string): Promise<IGetRecommendedMovieResponse> => {
  if (!movieId) {
    throw new Error('Missing movieId');
  }

  const response = await callApi(`${process.env.REACT_APP_MOVIE_API_URL}/movie/${movieId}/recommendations`);

  if (response.status >= 300) {
    throw new Error(response.statusText || 'Something went wrong');
  }

  const json = await response.json();

  if (typeof (json as IMovieApiErrorResponse).status_code === 'number') {
    throw new Error((json as IMovieApiErrorResponse).status_message);
  }

  return camelcaseKeys(json, { deep: true });
};
