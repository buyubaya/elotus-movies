import React, { ReactNode } from 'react';
import s from './ResponsiveImage.module.scss';

function ResponsiveImage({ whRatio, children }: { whRatio: number; children: ReactNode }) {
  return (
    <div className={s.container}>
      <div
        className={s.imgInner}
        style={{
          paddingTop: `${(1 / (whRatio || 1)) * 100}%`,
        }}
      >
        <div className={s.img}>{children}</div>
      </div>
    </div>
  );
}

export default ResponsiveImage;
