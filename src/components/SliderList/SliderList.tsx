import SkeletonImage from '@/components/SkeletonImage';
import { Empty, Skeleton } from 'antd';
import React, { ReactNode } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import s from './SliderList.module.scss';

function SliderList({
  children,
  isLoading,
  isEmpty,
}: {
  children: ReactNode[];
  isLoading?: boolean;
  isEmpty?: boolean;
}) {
  if (isLoading) {
    return (
      <div className={s.container}>
        <div className={s.inner}>
          {Array(10)
            .fill(null)
            .map((_, index) => {
              return (
                <div key={index} className={s.movieItem}>
                  <SkeletonImage style={{ width: 150, height: 225 }} />
                  <Skeleton active title={false} paragraph={{ rows: 2 }} style={{ marginTop: 12 }} />
                </div>
              );
            })}
        </div>
      </div>
    );
  }

  if (isEmpty) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  return (
    <div className={s.container}>
      <div className={s.outer}>
        <div className={s.inner}>{children}</div>
      </div>
    </div>
  );
}

export default SliderList;
