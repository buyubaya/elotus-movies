import { Skeleton } from 'antd';
import React, { ReactNode } from 'react';

const DEFAULT_SKELETON = <Skeleton active />;

export const renderWithSkeleton = (
  isSuccess: boolean,
  successContent: ReactNode,
  skeletonContent: ReactNode = DEFAULT_SKELETON
) => {
  if (!isSuccess) {
    return skeletonContent;
  }

  return successContent;
};
