import { Layout } from 'antd';
import React from 'react';
import { Outlet } from 'react-router-dom';

import CommonLayout from '../CommonLayout/CommonLayout';
import s from './AppLayout.module.scss';
import AppHeader from './components/AppHeader';

function AppLayout() {
  return (
    <CommonLayout className={s.container}>
      <AppHeader />

      <CommonLayout>
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </CommonLayout>
    </CommonLayout>
  );
}

export default AppLayout;
