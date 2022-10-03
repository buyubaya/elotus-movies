import CommonContainer from '@/components/CommonContainer';
import MovieDetailInformationArea from '@/pages/MovieDetailPage/components/MovieDetailInformationArea';
import React from 'react';
import CreditList from './components/CreditList';
import MovieDetailTopSection from './components/MovieDetailTopSection';
import RecommendedMovieList from './components/RecommendedMovieList';
import { useMovieDetail } from './hooks/useMovieDetail';
import s from './MovieDetailPage.module.scss';

function MovieDetailPage() {
  const { movieDetail, isLoading, recommendedMovieList, isRecommendedMovieListLoading, credits, isCreditsLoading } =
    useMovieDetail();

  return (
    <div className={s.container}>
      <MovieDetailTopSection movieDetail={movieDetail || null} isLoading={isLoading} />

      <CommonContainer>
        <div>
          <div className={s.detailTitle}>More Information</div>
          <MovieDetailInformationArea movieDetail={movieDetail || null} isLoading={isLoading} />
        </div>

        <div className={s.castArea}>
          <div className={s.detailTitle}>Cast and Crew</div>
          <CreditList data={credits || null} isLoading={isCreditsLoading} />
        </div>

        <div className={s.recommndedMoviesArea}>
          <div className={s.detailTitle}>Recommendations</div>
          <RecommendedMovieList list={recommendedMovieList || []} isLoading={isRecommendedMovieListLoading} />
        </div>
      </CommonContainer>
    </div>
  );
}

export default MovieDetailPage;
