import { IListMovieInfo } from '@/apis/movieList/types';
import { AppRootState } from '@/redux/store';
import { MovieListType } from '@/types/common';

export const selectMovieList = (type: MovieListType) => (rootState: AppRootState) => {
  const entityIds = rootState.movieList[type].ids || [];
  const entitiesMap = rootState.movieList[type].entities || {};
  return entityIds.map((entityId) => entitiesMap[entityId]).filter(Boolean) as IListMovieInfo[];
};

export const selectMovieListExtraData = (type: MovieListType) => (rootState: AppRootState) => {
  return rootState.movieList.extraDataMap[type];
};

export const selectMovieListIsLoading = (type: MovieListType) => (rootState: AppRootState) => {
  return rootState.movieList.statusMap[type] === 'LOADING';
};

export const selectMovieListError = (type: MovieListType) => (rootState: AppRootState) => {
  return rootState.movieList.errorMap[type];
};
