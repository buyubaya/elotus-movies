import MovieListWithType from '@/components/MovieListWithType';
import { MovieListType } from '@/types/common';
import React from 'react';
import { useMovieList } from '../../hooks/useMovieList';
import { LayoutMode } from '../../types';

function MovieListWrapper({ layoutMode, listType }: { layoutMode?: LayoutMode; listType: MovieListType }) {
  const { movieList, paginationInfo, isMovieListLoading, movieListError, dispatchFetchMovieList } =
    useMovieList(listType);

  return (
    <MovieListWithType
      layoutMode={layoutMode}
      listType={listType}
      list={movieList}
      paginationInfo={paginationInfo}
      isLoading={isMovieListLoading}
      error={movieListError}
      showGoToHomeBtn={false}
      dispatchFetchMovieList={dispatchFetchMovieList}
    />
  );
}

export default MovieListWrapper;
