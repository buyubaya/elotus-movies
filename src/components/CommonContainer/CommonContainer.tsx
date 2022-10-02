import classNames from 'classnames';
import React, { ReactNode } from 'react';
import s from './CommonContainer.module.scss';

function CommonContainer({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={classNames(s.container, className)}>{children}</div>;
}

export default CommonContainer;
