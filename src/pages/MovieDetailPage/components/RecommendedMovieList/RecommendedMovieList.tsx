import { IRecommendedMovieInfo } from '@/apis/movieDetail/types';
import MovieListItem from '@/components/MovieList/components/MovieListItem';
import SliderList from '@/components/SliderList';
import React from 'react';
import s from './RecommendedMovieList.module.scss';

function RecommendedMovieList({ list, isLoading }: { list: IRecommendedMovieInfo[]; isLoading?: boolean }) {
  return (
    <SliderList isLoading={isLoading} isEmpty={!list?.length}>
      {list.map((movieInfo) => {
        return (
          <div key={movieInfo.id} className={s.movieItem}>
            <MovieListItem item={movieInfo} />
          </div>
        );
      })}
    </SliderList>
  );
}

export default RecommendedMovieList;
