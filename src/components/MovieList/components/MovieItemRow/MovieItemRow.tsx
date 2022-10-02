import { IListMovieInfo } from '@/apis/movieList/types';
import MovieUserScore from '@/components/MovieUserScore';
import { APP_ROUTES_CONFIG } from '@/constants/routes';
import { getImgProxyUrl } from '@/helpers/getImgProxyUrl';
import classNames from 'classnames';
import React from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import ResponsiveImage from '../../../ResponsiveImage';
import s from './MovieItemRow.module.scss';

function MovieItemRow({ item }: { item: IListMovieInfo }) {
  return (
    <div className={s.container}>
      <div className={s.thumbnailArea}>
        <Link to={APP_ROUTES_CONFIG.MOVIE_DETAIL.getRoute(item.id)}>
          <LazyLoad height={300} once offset={0}>
            <ResponsiveImage whRatio={2 / 3}>
              <img
                src={getImgProxyUrl(item.posterPath || '', { type: 'poster', size: 200 })}
                className={s.img}
                alt={item.title}
                loading="lazy"
              />
            </ResponsiveImage>
          </LazyLoad>
        </Link>
      </div>

      <div className={s.contentArea}>
        <div className={s.titleArea}>
          <div className={classNames(s.title, 'hover-opacity')}>
            <Link to={APP_ROUTES_CONFIG.MOVIE_DETAIL.getRoute(item.id)}>{item.title}</Link>
          </div>
        </div>
        <div className={s.releaseDate}>{item.releaseDate}</div>

        <MovieUserScore className={s.score} score={item.voteAverage * 10} />
        <div className={classNames(s.overview, 'hide-max-md')}>{item.overview}</div>
      </div>
    </div>
  );
}

export default MovieItemRow;
