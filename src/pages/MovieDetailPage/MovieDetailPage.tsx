import RedirectRoute from '@/components/AppRoutes/comnponents/RedirectRoute';
import CommonContainer from '@/components/CommonContainer';
import { APP_ROUTES_CONFIG } from '@/constants/routes';
import MovieDetailInformationArea from '@/pages/MovieDetailPage/components/MovieDetailInformationArea';
import React from 'react';
import CreditList from './components/CreditList';
import MovieDetailTopSection from './components/MovieDetailTopSection';
import RecommendedMovieList from './components/RecommendedMovieList';
import { useMovieDetail } from './hooks/useMovieDetail';
import s from './MovieDetailPage.module.scss';

function MovieDetailPage() {
  const {
    movieDetail,
    isLoading,
    error,
    recommendedMovieList,
    isRecommendedMovieListLoading,
    credits,
    isCreditsLoading,
  } = useMovieDetail();

  if (error) {
    return <RedirectRoute to={APP_ROUTES_CONFIG.NOT_FOUND.getRoute()} />;
  }

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
