import { IMovieDetail } from '@/apis/movieDetail/types';
import MovieUserScore from '@/components/MovieUserScore';
import ResponsiveImage from '@/components/ResponsiveImage';
import SkeletonImage from '@/components/SkeletonImage';
import { getImgProxyUrl } from '@/helpers/getImgProxyUrl';
import { IGenre } from '@/types/entity/Genre/types';
import { Skeleton } from 'antd';
import classNames from 'classnames';
import React from 'react';
import s from './MovieDetailSection.module.scss';

const MovieThumbnailSize = {
  width: 300,
  height: 450,
};

function MovieDetailSection({ movieDetail, isLoading }: { isLoading?: boolean; movieDetail: IMovieDetail | null }) {
  const linearGradient =
    'linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) 150px, rgba(31.5, 10.5, 10.5, 0.84) 100%)';

  if (!movieDetail || isLoading) {
    return (
      <div className={s.topSectionArea}>
        <div className={s.wrapper}>
          <div className={s.thumbnailArea}>
            <ResponsiveImage whRatio={2 / 3}>
              <SkeletonImage style={MovieThumbnailSize} />
            </ResponsiveImage>
          </div>

          <div className={s.contentArea}>
            <Skeleton active />
            <Skeleton active />
          </div>
        </div>
      </div>
    );
  }

  const getDisplayGenres = (genres: IGenre[]) => {
    return genres.map((genre) => genre.name).join(', ');
  };

  return (
    <div
      className={s.topSectionArea}
      style={{
        backgroundImage: `${linearGradient}, url(${getImgProxyUrl(movieDetail.backdropPath || '', {
          type: 'backdrop',
          size: 800,
        })})`,
      }}
    >
      <div className={s.wrapper}>
        <div className={s.thumbnailArea}>
          <ResponsiveImage whRatio={2 / 3}>
            <img
              src={getImgProxyUrl(movieDetail.posterPath || '', { type: 'poster', size: 500 })}
              alt={movieDetail.title}
              width={MovieThumbnailSize.width}
              height={MovieThumbnailSize.height}
              className={s.thumbnailImg}
            />
          </ResponsiveImage>
        </div>

        <div className={s.contentArea}>
          <div className={s.titleArea}>
            <div className={classNames(s.title, 'hover-opacity')}>{movieDetail.title}</div>
            <p className={s.subtitle}>{getDisplayGenres(movieDetail.genres)}</p>
          </div>

          <div className={s.buttonsArea}>
            <MovieUserScore className={s.userScore} score={86} size={60} fontSize={24} />
          </div>

          <p className={s.tagline}>{movieDetail.tagline}</p>

          <div className="hide-max-lg">
            <div className={s.bigLabel}>Overview</div>
            <p>{movieDetail.overview}</p>
          </div>
        </div>
      </div>

      <div className={classNames(s.overviewSp, 'hide-min-lg')}>
        <div className={s.bigLabel}>Overview</div>
        <p>{movieDetail.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetailSection;
