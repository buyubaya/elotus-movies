import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getMovieDetailAction } from '@/redux/slices/movieDetail/movieDetail.actions';
import {
  selectMovieDetail,
  selectMovieDetailError,
  selectMovieDetailIsLoading,
} from '@/redux/slices/movieDetail/movieDetail.selectors';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useMovieDetail = () => {
  const routeParams = useParams();

  const appDispatch = useAppDispatch();

  const { movieDetail, isLoading, error } = useAppSelector((rootState) => ({
    movieDetail: selectMovieDetail(routeParams.movieId || '')(rootState),
    isLoading: selectMovieDetailIsLoading(routeParams.movieId || '')(rootState),
    error: selectMovieDetailError(routeParams.movieId || '')(rootState),
  }));

  useEffect(() => {
    if (routeParams.movieId) {
      appDispatch(getMovieDetailAction({ movieId: routeParams.movieId }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeParams.movieId]);

  return {
    movieDetail: movieDetail,
    isLoading: isLoading,
    error: error,
  };
};
