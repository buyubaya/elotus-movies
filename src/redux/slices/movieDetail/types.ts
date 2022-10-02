import { IMovieDetail } from '@/apis/movieDetail/types';
import { EntityState } from '@reduxjs/toolkit';

export interface IMovieDetailReducerState {
  statusMap: {
    [movieId: string]: 'LOADING' | 'SUCCESS' | 'ERROR' | undefined;
  };
  errorMap: {
    [movieId: string]: string | undefined;
  };
  data: EntityState<IMovieDetail>;
}
