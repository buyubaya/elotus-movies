import { IListMovieInfo } from '@/apis/movieList/types';
import { DEFAULT_PAGESIZE } from '@/constants/common';
import { LayoutMode } from '@/pages/MovieListPage/types';
import { IPagination } from '@/types/common';
import { Empty, Pagination } from 'antd';
import classNames from 'classnames';
import React from 'react';
import isEqual from 'react-fast-compare';
import CommonErrorComponent from '../CommonErrorComponent';
import LoadingMovieList from './components/LoadingMovieList';
import MovieItemRow from './components/MovieItemRow';
import MovieListItem from './components/MovieListItem';
import s from './MovieList.module.scss';

interface IMovieListProps {
  layoutMode?: LayoutMode;
  paginationInfo: IPagination | null;
  list: IListMovieInfo[];
  isLoading?: boolean;
  error?: string;
  showGoToHomeBtn?: boolean;
  onRetry?: () => void | Promise<void>;
  onPageChange?: (newPage: number) => void;
}

function MovieList({
  layoutMode = 'grid',
  list,
  paginationInfo,
  isLoading,
  error,
  showGoToHomeBtn,
  onRetry,
  onPageChange,
}: IMovieListProps) {
  // COMPUTED
  const isGrid = layoutMode === 'grid';
  const isList = layoutMode === 'list';
  //

  const renderMovieItem = (movieItem: IListMovieInfo) => {
    if (isList) {
      return <MovieItemRow key={movieItem.id} item={movieItem} />;
    }
    return <MovieListItem key={movieItem.id} item={movieItem} />;
  };

  if (isLoading) {
    return <LoadingMovieList containerClassname={s.movieListArea} itemCount={20} />;
  }

  if (error) {
    return <CommonErrorComponent showGoToHomeBtn={showGoToHomeBtn} onRetry={onRetry} />;
  }

  if (!list?.length) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  return (
    <div>
      <div
        className={classNames(s.movieListArea, {
          [s.isGrid]: isGrid,
          [s.isList]: isList,
        })}
      >
        {list.map(renderMovieItem)}
      </div>

      <Pagination
        hideOnSinglePage
        current={paginationInfo?.page || 1}
        pageSize={paginationInfo?.pageSize || DEFAULT_PAGESIZE}
        total={paginationInfo?.totalCount || 0}
        showSizeChanger={false}
        onChange={onPageChange}
      />
    </div>
  );
}

export default React.memo(MovieList, isEqual);
