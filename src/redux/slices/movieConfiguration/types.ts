import { IGetMovieConfigurationResponse } from '@/apis/movieConfiguration/types';

export interface IMovieConfigurationReducerState {
  status: 'LOADING' | 'SUCCESS' | 'ERROR' | undefined;
  configuration: IGetMovieConfigurationResponse | null;
}
