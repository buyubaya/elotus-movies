import { ICreditInfo } from '@/apis/movieDetail/types';
import ResponsiveImage from '@/components/ResponsiveImage';
import SliderList from '@/components/SliderList';
import { getImgProxyUrl } from '@/helpers/getImgProxyUrl';
import React from 'react';
import s from './CreditList.module.scss';

function CreditList({ data, isLoading }: { data: ICreditInfo | null; isLoading?: boolean }) {
  const castList = data?.cast || [];

  return (
    <SliderList isLoading={isLoading} isEmpty={!castList?.length}>
      {castList.map((castInfo) => {
        return (
          <div key={castInfo.id} className={s.movieItem}>
            <ResponsiveImage whRatio={185 / 278}>
              <img
                src={getImgProxyUrl(castInfo.profilePath || '', { type: 'profile', size: 200 })}
                alt={castInfo.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
              />
            </ResponsiveImage>
            <h3 className={s.castName}>{castInfo.name}</h3>
            <p className={s.charactername}>{castInfo.character}</p>
          </div>
        );
      })}
    </SliderList>
  );
}

export default CreditList;
