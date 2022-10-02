import MovieDetailArea from '@/components/MovieDetailArea';
import React from 'react';
import MovieDetailSection from './components/MovieDetailSection';
import { useMovieDetail } from './hooks/useMovieDetail';
import s from './MovieDetailPage.module.scss';

function MovieDetailPage() {
  const { movieDetail, isLoading } = useMovieDetail();

  return (
    <div className={s.container}>
      <MovieDetailSection movieDetail={movieDetail || null} isLoading={isLoading} />

      <div className={s.moreDetailArea}>
        <MovieDetailArea movieDetail={movieDetail || null} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default MovieDetailPage;
