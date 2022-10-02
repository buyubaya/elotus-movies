import { Progress } from 'antd';
import classNames from 'classnames';
import React from 'react';
import s from './MovieUserScore.module.scss';

function MovieUserScore({
  score,
  className,
  size = 34,
  fontSize,
}: {
  score: number;
  className?: string;
  size?: number;
  fontSize?: number;
}) {
  return (
    <div
      className={classNames(s.container, className)}
      style={{
        width: size + 4,
        height: size + 4,
      }}
    >
      <Progress
        style={{ width: size, height: size - 4 }}
        type="circle"
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
        percent={score}
        format={(percent) => <div style={{ fontSize: fontSize }}>{percent}</div>}
      />
    </div>
  );
}

export default MovieUserScore;
