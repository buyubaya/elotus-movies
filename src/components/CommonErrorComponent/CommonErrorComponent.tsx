import { APP_ROUTES_CONFIG } from '@/constants/routes';
import { Button, Result } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './CommonErrorComponent.module.scss';

function CommonErrorComponent({ isLoading, onRetry }: { isLoading?: boolean; onRetry?: () => Promise<void> | void }) {
  const [isRetryLoading, setIsRetryLoading] = useState<boolean>(false);

  const handleRetry = async () => {
    if (typeof onRetry === 'function') {
      setIsRetryLoading(true);
      await onRetry();
      setIsRetryLoading(false);
    }
  };

  return (
    <div className={s.container}>
      <Result
        status="error"
        title="Something went wrong"
        subTitle="Please check your network or try again later."
        extra={[
          <Button key="buy" onClick={handleRetry} loading={isLoading || isRetryLoading}>
            Try Again
          </Button>,
          <Button type="primary" key="console" loading={isLoading || isRetryLoading}>
            <Link to={APP_ROUTES_CONFIG.HOME.getRoute()}>Go to Home</Link>
          </Button>,
        ]}
      ></Result>
    </div>
  );
}

export default CommonErrorComponent;
