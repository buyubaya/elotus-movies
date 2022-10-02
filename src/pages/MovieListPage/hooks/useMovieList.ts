import { movieListExtraDataToPaginationInfo } from '@/helpers/movieListExtraDataToPaginationInfo';
import { setNProgress } from '@/helpers/nprogress';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getMovieListAction } from '@/redux/slices/movieList/movieList.actions';
import {
  selectMovieList,
  selectMovieListError,
  selectMovieListExtraData,
  selectMovieListIsLoading,
} from '@/redux/slices/movieList/movieList.selectors';
import { MovieListType } from '@/types/common';
import { useEffect } from 'react';

export const useMovieList = (listType: MovieListType) => {
  const appDispath = useAppDispatch();
  const { movieList, paginationInfo, isMovieListLoading, movieListError } = useAppSelector((rootState) => {
    return {
      movieList: selectMovieList(listType)(rootState),
      paginationInfo: movieListExtraDataToPaginationInfo(selectMovieListExtraData(listType)(rootState)),
      isMovieListLoading: selectMovieListIsLoading(listType)(rootState),
      movieListError: selectMovieListError(listType)(rootState),
    };
  });

  const dispatchFetchMovieList = () => {
    setNProgress(0.3);
    appDispath(getMovieListAction({ listType: listType })).finally(() => {
      setNProgress(1);
    });
  };

  useEffect(() => {
    dispatchFetchMovieList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    movieList,
    paginationInfo,
    isMovieListLoading,
    movieListError,
    dispatchFetchMovieList: dispatchFetchMovieList,
  };
};
