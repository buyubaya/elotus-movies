import { AppRootState } from '@/redux/store';
import { movieDetailSelectors } from './movieDetail.slice';

export const selectMovieDetail = (movieId: string) => (rootState: AppRootState) =>
  movieDetailSelectors.selectById(rootState, movieId);

export const selectMovieDetailIsLoading = (movieId: string) => (rootState: AppRootState) =>
  rootState.movieDetail?.statusMap?.[movieId] === 'LOADING';

export const selectMovieDetailError = (movieId: string) => (rootState: AppRootState) =>
  rootState.movieDetail?.errorMap?.[movieId];