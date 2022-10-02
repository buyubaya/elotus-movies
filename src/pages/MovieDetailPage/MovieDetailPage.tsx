import MovieDetailInformationArea from '@/pages/MovieDetailPage/components/MovieDetailInformationArea';
import React from 'react';
import MovieDetailTopSection from './components/MovieDetailTopSection';
import { useMovieDetail } from './hooks/useMovieDetail';
import s from './MovieDetailPage.module.scss';

function MovieDetailPage() {
  const { movieDetail, isLoading } = useMovieDetail();

  return (
    <div className={s.container}>
      <MovieDetailTopSection movieDetail={movieDetail || null} isLoading={isLoading} />

      <div className={s.moreDetailArea}>
        <MovieDetailInformationArea movieDetail={movieDetail || null} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default MovieDetailPage;
