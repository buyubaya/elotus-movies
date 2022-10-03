import { callApi } from '@/core/callApi';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getMovieDetailAction, getRecommendedMoviesAction } from '@/redux/slices/movieDetail/movieDetail.actions';
import {
  selectMovieDetail,
  selectMovieDetailError,
  selectMovieDetailIsLoading,
  selectRecommendedMovieList,
  selectRecommendedMovieListIsLoading,
} from '@/redux/slices/movieDetail/movieDetail.selectors';
import { useEffect } from 'react';
import { batch } from 'react-redux';
import { useParams } from 'react-router-dom';

export const useMovieDetail = () => {
  const routeParams = useParams();

  const appDispatch = useAppDispatch();

  const { movieDetail, isLoading, error, recommendedMovieList, isRecommendedMovieListLoading } = useAppSelector(
    (rootState) => ({
      movieDetail: selectMovieDetail(routeParams.movieId || '')(rootState),
      isLoading: selectMovieDetailIsLoading(routeParams.movieId || '')(rootState),
      error: selectMovieDetailError(routeParams.movieId || '')(rootState),

      recommendedMovieList: selectRecommendedMovieList(routeParams.movieId || '')(rootState),
      isRecommendedMovieListLoading: selectRecommendedMovieListIsLoading(routeParams.movieId || '')(rootState),
    })
  );

  useEffect(() => {
    if (routeParams.movieId) {
      batch(() => {
        appDispatch(getMovieDetailAction({ movieId: routeParams.movieId || '' }));
        appDispatch(getRecommendedMoviesAction({ movieId: routeParams.movieId || '' }));
      });

      callApi(`${process.env.REACT_APP_MOVIE_API_URL}/movie/${routeParams.movieId}/credits`).then(console.log);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeParams.movieId]);

  return {
    movieDetail: movieDetail,
    isLoading: isLoading,
    error: error,

    recommendedMovieList: recommendedMovieList,
    isRecommendedMovieListLoading: isRecommendedMovieListLoading,
  };
};
