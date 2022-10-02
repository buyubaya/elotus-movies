import { IGetMovieListResponse, IListMovieInfo } from '@/apis/movieList/types';
import { MovieListType } from '@/types/common';
import { EntityState } from '@reduxjs/toolkit';

export type IMovieListReducerState = {
  statusMap: Partial<Record<MovieListType, 'LOADING' | 'SUCCESS' | 'ERROR' | undefined>>;
  errorMap: Partial<Record<MovieListType, string | undefined>>;
  extraDataMap: Partial<Record<MovieListType, Omit<IGetMovieListResponse, 'results'> | undefined>>;
} & Record<MovieListType, EntityState<IListMovieInfo>>;
