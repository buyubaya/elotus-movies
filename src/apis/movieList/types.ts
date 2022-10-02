import { IMovie } from '@/types/entity/Movie/types';

export interface IGetMovieListResponse {
  page: number;
  results: IListMovieInfo[];
  dates: {
    minimum: string;
    maximum: string;
  };
  totalPages: number;
  totalResults: number;
}

export type IListMovieInfo = Pick<
  IMovie,
  | 'posterPath'
  | 'adult'
  | 'overview'
  | 'releaseDate'
  | 'genreIds'
  | 'id'
  | 'originalTitle'
  | 'originalLanguage'
  | 'title'
  | 'backdropPath'
  | 'popularity'
  | 'voteCount'
  | 'video'
  | 'voteAverage'
>;

export interface IGetMovieListRequestQuery {
  language?: string;
  page?: number; // [1-1000]
  region?: string;
}
