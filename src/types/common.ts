export type Id = string | number;

export type DateString = string;

export interface IFilterQuery {
  search?: string;
  sort?: {
    field: string;
    order: SORT_TYPE | null;
  };
  pagination?: Pick<IPagination, 'page' | 'pageSize'>;
}

export interface IPagination {
  page: number;
  pageSize: number;
  totalCount: number;
}

export enum SORT_TYPE {
  DESC = 'DESC',
  ASC = 'ASC',
}

export enum APP_ROUTE_KEYS {
  HOME = 'HOME',
  MOVIE_DETAIL = 'MOVIE_DETAIL',
  SEARCH = 'SEARCH',
  NOT_FOUND = 'NOT_FOUND',
}

export interface IRouteConfigInfo {
  label?: string;
  test: RegExp;
  path: string;
  getRoute: (...args: (string | number)[]) => string;
}

export type MovieListType = 'now_playing' | 'top_rated' | 'popular' | 'upcoming';
