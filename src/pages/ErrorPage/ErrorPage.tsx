import { APP_ROUTES_CONFIG } from '@/constants/routes';
import { Button, Result } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import s from './ErrorPage.module.scss';

function ErrorPage() {
  return (
    <div className={s.container}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary">
            <Link to={APP_ROUTES_CONFIG.HOME.getRoute()}>Back Home</Link>
          </Button>
        }
      />
    </div>
  );
}

export default ErrorPage;
