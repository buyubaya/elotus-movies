import movieConfigurationReducer, { MOVIE_CONFIGURATION_SLICE_NAME } from './movieConfiguration.slice';

export function getMovieConfigurationReducerModule() {
  return {
    id: MOVIE_CONFIGURATION_SLICE_NAME,
    reducerMap: {
      [MOVIE_CONFIGURATION_SLICE_NAME]: movieConfigurationReducer,
    },
    // Actions to fire when this module is added/removed
    // initialActions: [],
    // finalActions: []
  };
}
