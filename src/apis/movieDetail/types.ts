import { IMovie } from '@/types/entity/Movie/types';

export type IGetMovieDetailResponse = IMovieDetail;

export interface IMovieDetail extends IMovie {}

export interface IGetMovieDetailRequestQuery {
  language?: string;
  append_to_response?: string;
}
