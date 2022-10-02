import { AppRootState } from '@/redux/store';

export const selectMovieConfiguration = (rootState: AppRootState) => rootState.movieConfiguration.configuration;

export const selectMovieConfigurationIsLoading = (rootState: AppRootState) =>
  rootState.movieConfiguration?.status === 'LOADING';
