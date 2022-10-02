import { getMovieList } from '@/apis/movieList/getMovieList';
import { IGetMovieListRequestQuery, IListMovieInfo } from '@/apis/movieList/types';
import { DEFAULT_PAGESIZE } from '@/constants/common';
import { LayoutMode } from '@/pages/MovieListPage/types';
import { IPagination, MovieListType } from '@/types/common';
import React, { useRef, useState } from 'react';
import MovieList from '../MovieList/MovieList';

interface IMovieListWithTypeProps {
  layoutMode?: LayoutMode;
  listType: MovieListType;
  paginationInfo: IPagination;
  list: IListMovieInfo[];
  isLoading?: boolean;
  error?: string;
  dispatchFetchMovieList?: () => void;
}

function MovieListWithType({
  layoutMode = 'grid',
  listType,
  list: initialList = [],
  paginationInfo: initialPaginationInfo,
  isLoading,
  error: initialError,
  dispatchFetchMovieList,
}: IMovieListWithTypeProps) {
  //
  const [filteredList, setFilteredList] = useState<IListMovieInfo[] | null>(null);
  const [paginationInfo, setPaginationInfo] = useState<IPagination | null>(null);
  const [error, setError] = useState<string | null>(null);
  const lastActionRef = useRef<(() => void | Promise<void>) | null>(null);
  //

  // COMPUTED
  const displayError = error || initialError;
  const displayList = filteredList || initialList;
  const displayPaginationInfo = paginationInfo || initialPaginationInfo;
  //

  // HANDLERs
  const fetchMovieData = async (query: IGetMovieListRequestQuery) => {
    try {
      const data = await getMovieList(listType, query);

      setFilteredList(data.results);
      setPaginationInfo({
        page: data.page,
        pageSize: DEFAULT_PAGESIZE,
        totalCount: data.totalResults,
      });

      lastActionRef.current = null;
    } catch (reason) {
      setError((reason as { message: string })?.message);
    }
  };

  const handlePageChange = (newPage: number) => {
    lastActionRef.current = async () => {
      await fetchMovieData({ page: newPage });
    };
    lastActionRef.current();
  };

  const handleRetry = async () => {
    if (lastActionRef.current) {
      await lastActionRef.current();
    }
  };
  //

  return (
    <div>
      <MovieList
        layoutMode={layoutMode}
        list={displayList}
        paginationInfo={{
          page: displayPaginationInfo?.page || 1,
          pageSize: displayPaginationInfo?.pageSize || DEFAULT_PAGESIZE,
          totalCount: displayPaginationInfo?.totalCount || 0,
        }}
        isLoading={isLoading}
        error={displayError}
        onPageChange={handlePageChange}
        onRetry={initialError ? dispatchFetchMovieList : handleRetry}
      />
    </div>
  );
}

export default MovieListWithType;
