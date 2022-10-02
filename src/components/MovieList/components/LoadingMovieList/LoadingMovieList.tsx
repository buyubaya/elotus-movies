import classNames from 'classnames';
import React from 'react';
import MovieListItem from '../MovieListItem';
import s from './LoadingMovieList.module.scss';

function LoadingMovieList({ itemCount = 10, containerClassname }: { itemCount?: number; containerClassname?: string }) {
  return (
    <div className={classNames(s.container, containerClassname)}>
      {Array(itemCount)
        .fill(null)
        .map((_, index) => (
          <MovieListItem key={index} item={null} />
        ))}
    </div>
  );
}

export default LoadingMovieList;
