import { Layout, LayoutProps } from 'antd';
import classNames from 'classnames';
import React from 'react';
import s from './CommonLayout.module.scss';

interface ICommonLayoutProps extends LayoutProps {}

function CommonLayout(props: ICommonLayoutProps) {
  const { className } = props;

  return <Layout {...props} className={classNames(s.container, className)} />;
}

export default CommonLayout;
