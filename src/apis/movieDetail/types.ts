import { IMovie } from '@/types/entity/Movie/types';
import { IListMovieInfo } from '../movieList/types';

// Detail
export type IGetMovieDetailResponse = IMovieDetail;

export interface IMovieDetail extends IMovie {}

export interface IGetMovieDetailRequestQuery {
  language?: string;
  append_to_response?: string;
}

export interface IGetRecommendedMovieResponse {
  page: number;
  results: IRecommendedMovieInfo[];
  dates: {
    minimum: string;
    maximum: string;
  };
  totalPages: number;
  totalResults: number;
}

export type IRecommendedMovieInfo = IListMovieInfo;
