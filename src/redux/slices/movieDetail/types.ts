import { IMovieDetail, IRecommendedMovieInfo } from '@/apis/movieDetail/types';
import { EntityState } from '@reduxjs/toolkit';

export interface IMovieDetailReducerState {
  statusMap: {
    [movieId: string]: 'LOADING' | 'SUCCESS' | 'ERROR' | undefined;
  };
  errorMap: {
    [movieId: string]: string | undefined;
  };
  data: EntityState<IMovieDetail>;
  recommendations?: {
    [movieId: string]: {
      status: 'LOADING' | 'SUCCESS' | 'ERROR' | undefined;
      data?: IRecommendedMovieInfo[] | undefined;
    };
  };
}
