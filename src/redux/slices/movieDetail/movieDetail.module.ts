import movieDetailReducer, { MOVIE_DETAIL_SLICE_NAME } from './movieDetail.slice';

export function getMovieDetailReducerModule() {
  return {
    id: MOVIE_DETAIL_SLICE_NAME,
    reducerMap: {
      [MOVIE_DETAIL_SLICE_NAME]: movieDetailReducer,
    },
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: []
  };
}
