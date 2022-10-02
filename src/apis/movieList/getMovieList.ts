import { callApi } from '@/core/callApi';
import { queryObjectToString } from '@/helpers/queryObjectToString';
import { MovieListType } from '@/types/common';
import camelcaseKeys from 'camelcase-keys';
import { IMovieApiErrorResponse } from '../types';
import { IGetMovieListRequestQuery, IGetMovieListResponse } from './types';

export const getMovieList = async (
  type: MovieListType,
  query?: IGetMovieListRequestQuery
): Promise<IGetMovieListResponse> => {
  const response = await callApi(
    `${process.env.REACT_APP_MOVIE_API_URL}/movie/${type}${queryObjectToString(
      (query || {}) as Record<string, string>
    )}`
  );

  if (response.status >= 300) {
    throw new Error(response.statusText || 'Something went wrong');
  }

  const json = await response.json();

  if (typeof (json as IMovieApiErrorResponse).status_code === 'number') {
    throw new Error((json as IMovieApiErrorResponse).status_message);
  }

  return camelcaseKeys(json, { deep: true });
};
