import { IMovieDetail } from '@/apis/movieDetail/types';
import { Skeleton } from 'antd';
import React, { ReactNode } from 'react';
import s from './MovieDetailInformationArea.module.scss';

function DetailInfoRow({ label, children }: { label?: string; children?: ReactNode }) {
  return (
    <div className={s.detailInfoRow}>
      <dt className={s.detailInfoLabel}>{label}</dt>
      <dd className={s.detailInfoContent}>{children || '-'}</dd>
    </div>
  );
}

interface IMovieDetailInformationAreaProps {
  movieDetail: IMovieDetail | null;
  isLoading?: boolean;
}

function MovieDetailInformationArea({ movieDetail, isLoading }: IMovieDetailInformationAreaProps) {
  if (!movieDetail || isLoading) {
    return (
      <div>
        <Skeleton active />
        <Skeleton active />
      </div>
    );
  }

  const getDisplayProductionCompanies = () => {
    return movieDetail.productionCompanies.map((company) => company.name).join(', ');
  };

  const getDisplayProductionCountries = () => {
    return movieDetail.productionCountries.map((country) => country.name).join(', ');
  };

  return (
    <dl>
      <DetailInfoRow label={'Status'}>{movieDetail.status}</DetailInfoRow>
      <DetailInfoRow label={'Original Language'}>{movieDetail.originalLanguage?.toUpperCase()}</DetailInfoRow>
      <DetailInfoRow label={'Budget'}>{movieDetail.budget}</DetailInfoRow>
      <DetailInfoRow label={'Revenue'}>{movieDetail.revenue}</DetailInfoRow>
      <DetailInfoRow label={'Production Companies'}>{getDisplayProductionCompanies()}</DetailInfoRow>
      <DetailInfoRow label={'Production Countries'}>{getDisplayProductionCountries()}</DetailInfoRow>
    </dl>
  );
}

export default MovieDetailInformationArea;
