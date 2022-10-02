import movieListReducer, { MOVIE_LIST_SLICE_NAME } from './movieList.slice';

export function getMovieListReducerModule() {
  return {
    id: MOVIE_LIST_SLICE_NAME,
    reducerMap: {
      [MOVIE_LIST_SLICE_NAME]: movieListReducer,
    },
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: []
  };
}
