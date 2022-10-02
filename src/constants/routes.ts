import { queryObjectToString } from '@/helpers/queryObjectToString';
import { APP_ROUTE_KEYS, IRouteConfigInfo } from '@/types/common';

export const APP_ROUTES_CONFIG: Record<APP_ROUTE_KEYS, IRouteConfigInfo> = {
  [APP_ROUTE_KEYS.HOME]: {
    label: 'Movie List',
    test: /^(\/)?(\?[a-zA-Z0-9-_=&]*)?$/,
    path: '/',
    getRoute: () => '/',
  },

  [APP_ROUTE_KEYS.MOVIE_DETAIL]: {
    label: 'Movie Detail',
    test: /^\/movie\/([a-zA-Z0-9-]+)(\?[a-zA-Z0-9-_=&]*)?$/,
    path: '/movie/:movieId',
    getRoute: (movieId: string | number) => `/movie/${movieId}`,
  },

  [APP_ROUTE_KEYS.SEARCH]: {
    label: 'Search',
    test: /^\/search(\?[a-zA-Z0-9-_=&]*)?$/,
    path: '/search',
    getRoute: (searchtext: string | number, page?: string | number) =>
      `/search${queryObjectToString({ query: searchtext, page: page } as unknown as Record<string, string>)}`,
  },

  [APP_ROUTE_KEYS.NOT_FOUND]: {
    test: /^\/not-found(\?[a-zA-Z0-9-_=&]*)?$/,
    path: '/not-found',
    getRoute: () => '/not-found',
  },
};
