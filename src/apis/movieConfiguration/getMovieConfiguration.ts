import { callApi } from '@/core/callApi';
import camelcaseKeys from 'camelcase-keys';

export const getMovieConfiguration = async () => {
  const response = await callApi(`${process.env.REACT_APP_MOVIE_API_URL}/configuration`);

  if (response.status >= 300) {
    throw new Error(response.statusText || 'Something went wrong');
  }

  const json = await response.json();
  return camelcaseKeys(json, { deep: true });
};
