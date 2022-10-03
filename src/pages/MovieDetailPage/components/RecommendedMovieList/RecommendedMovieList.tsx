import { IRecommendedMovieInfo } from '@/apis/movieDetail/types';
import MovieListItem from '@/components/MovieList/components/MovieListItem';
import SkeletonImage from '@/components/SkeletonImage';
import { Empty, Skeleton } from 'antd';
import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import s from './RecommendedMovieList.module.scss';

function RecommendedMovieList({ list, isLoading }: { list: IRecommendedMovieInfo[]; isLoading?: boolean }) {
  if (isLoading) {
    return (
      <div className={s.container}>
        <div className={s.inner}>
          {Array(10)
            .fill(null)
            .map((_, index) => {
              return (
                <div key={index} className={s.movieItem}>
                  <SkeletonImage style={{ width: 150, height: 225 }} />
                  <Skeleton active title={false} paragraph={{ rows: 2 }} style={{ marginTop: 12 }} />
                </div>
              );
            })}
        </div>
      </div>
    );
  }

  if (!list?.length) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  return (
    <div className={s.container}>
      <div className={s.outer}>
        <div className={s.inner}>
          {list.map((movieInfo) => {
            return (
              <div key={movieInfo.id} className={s.movieItem}>
                <MovieListItem item={movieInfo} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RecommendedMovieList;
