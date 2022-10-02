import { IListMovieInfo } from '@/apis/movieList/types';
import MovieUserScore from '@/components/MovieUserScore';
import { APP_ROUTES_CONFIG } from '@/constants/routes';
import { getImgProxyUrl } from '@/helpers/getImgProxyUrl';
import { Skeleton } from 'antd';
import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import s from './MovieListItem.module.scss';

interface IMovieListItemProps {
  item: IListMovieInfo | null;
}

function MovieListItem({ item }: IMovieListItemProps) {
  if (!item) {
    return (
      <div className={s.container}>
        <div className={s.imgOuter}>
          <div className={s.imgInner}>
            <div className={s.img}>
              <Skeleton.Image active style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={s.container}>
      <div className={s.imgOuter}>
        <Link to={APP_ROUTES_CONFIG.MOVIE_DETAIL.getRoute(item.id)}>
          <LazyLoad height={300} once offset={200}>
            <div className={s.imgInner}>
              <img
                src={getImgProxyUrl(item.posterPath || '', { type: 'poster', size: 200 })}
                alt={item.title}
                className={s.img}
                loading="lazy"
              />
            </div>
          </LazyLoad>
        </Link>

        <MovieUserScore score={item.voteAverage * 10} className={s.voteScore} />
      </div>

      <div className={s.infoArea}>
        <div className={s.title}>
          <Link to={APP_ROUTES_CONFIG.MOVIE_DETAIL.getRoute(item.id)}>{item.title}</Link>
        </div>
        <div className={s.releaseDate}>{item.releaseDate}</div>
      </div>
    </div>
  );
}

export default MovieListItem;
