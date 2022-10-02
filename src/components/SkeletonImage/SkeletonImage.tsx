import { Skeleton } from 'antd';
import React, { CSSProperties } from 'react';
import s from './SkeletonImage.module.scss';

function SkeletonImage({ style }: { style?: CSSProperties }) {
  return (
    <div className={s.container} style={style}>
      <Skeleton.Image active style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

export default SkeletonImage;
