import { callApi } from '@/core/callApi';
import { queryObjectToString } from '@/helpers/queryObjectToString';
import camelcaseKeys from 'camelcase-keys';
import { IMovieApiErrorResponse } from '../types';
import { ISearchMoviesRequestQuery, ISearchMoviesResposne } from './types';

export const searchMovies = async (query: ISearchMoviesRequestQuery): Promise<ISearchMoviesResposne> => {
  if (!query?.query) {
    throw new Error('Mising query');
  }

  const response = await callApi(
    `${process.env.REACT_APP_MOVIE_API_URL}/search/movie${queryObjectToString(
      query as unknown as Record<string, string>
    )}`
  );

  if (response.status >= 300) {
    throw new Error(response.statusText || 'Something went wrong');
  }

  const json = await response.json();

  if (typeof (json as IMovieApiErrorResponse).status_code === 'number') {
    throw new Error((json as IMovieApiErrorResponse).status_message);
  }

  return camelcaseKeys(json as ISearchMoviesResposne, { deep: true });
};
