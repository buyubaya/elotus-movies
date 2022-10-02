import { APP_ROUTES_CONFIG } from '@/constants/routes';
import { Button, Result } from 'antd';
import React, { ReactNode, useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './CommonErrorComponent.module.scss';

function CommonErrorComponent({
  isLoading,
  showGoToHomeBtn = true,
  onRetry,
}: {
  isLoading?: boolean;
  showGoToHomeBtn?: boolean;
  onRetry?: () => Promise<void> | void;
}) {
  const [isRetryLoading, setIsRetryLoading] = useState<boolean>(false);

  const handleRetry = useCallback(async () => {
    if (typeof onRetry === 'function') {
      setIsRetryLoading(true);
      await onRetry();
      setIsRetryLoading(false);
    }
  }, [onRetry]);

  const extraButtons = useMemo(() => {
    const buttons: ReactNode[] = [];

    buttons.push(
      <Button key="buy" onClick={handleRetry} loading={isLoading || isRetryLoading}>
        Try Again
      </Button>
    );

    if (showGoToHomeBtn) {
      buttons.push(
        <Button type="primary" key="console" loading={isLoading || isRetryLoading}>
          <Link to={APP_ROUTES_CONFIG.HOME.getRoute()}>Go to Home</Link>
        </Button>
      );
    }

    return buttons;
  }, [handleRetry, isLoading, isRetryLoading, showGoToHomeBtn]);

  return (
    <div className={s.container}>
      <Result
        status="error"
        title="Something went wrong"
        subTitle="Please check your network or try again later."
        extra={extraButtons}
      ></Result>
    </div>
  );
}

export default CommonErrorComponent;
