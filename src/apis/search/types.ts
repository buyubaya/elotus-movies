import { IMovie } from '@/types/entity/Movie/types';

export interface ISearchMoviesResposne {
  page: number;
  results: ISearchMovieInfo[];
  dates: {
    minimum: string;
    maximum: string;
  };
  totalPages: number;
  totalResults: number;
}

export type ISearchMovieInfo = Pick<
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

export interface ISearchMoviesRequestQuery {
  language?: string;
  query: string;
  page?: number;
  include?: boolean;
  region?: string;
  year?: number;
  primary_release_year?: number;
}
