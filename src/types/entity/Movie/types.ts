import { IGenre } from '../Genre/types';

export interface IMovie {
  posterPath: string | null;
  adult: boolean;
  overview: string;
  releaseDate: string;
  genreIds: number[];
  id: number;
  originalTitle: string;
  originalLanguage: string;
  title: string;
  backdropPath: string | null;
  popularity: number;
  voteCount: number;
  video: boolean;
  voteAverage: number;
  belongsToCollection: unknown | null;
  budget: number;
  genres: IGenre[];
  homepage: string | null;
  imdbId: string;
  productionCompanies: {
    id: number;
    name: string;
    logoPath: string | null;
    originCountry: string;
  }[];
  productionCountries: {
    iso31661: number;
    name: string;
  }[];
  revenue: number;
  runtime: number | null;
  spokenLanguages: {
    iso6391: string;
    name: string;
  }[];
  status: 'Rumored' | 'Planned' | 'In Production' | 'Post' | 'Production' | 'Released' | 'Canceled';
  tagline: string | null;
}
