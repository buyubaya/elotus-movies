import { useDetectScrollDirection } from '@/hooks/useDetectScrollDirection';
import classNames from 'classnames';
import React, { ReactNode, useCallback, useLayoutEffect, useRef, useState } from 'react';

import s from './HeaderWrapperWithScrollBehavior.module.scss';

const DEFAULT_HEIGHT = 64;

function HeaderWrapperWithScrollBehavior({
  scrollContainerID,
  children,
}: {
  scrollContainerID?: string;
  children?: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const placeHolderRef = useRef<HTMLDivElement>(null);
  const [shouldShowTopBar, setShouldShowTopBar] = useState<boolean>(true);

  const handleScrollUp = useCallback(() => {
    setShouldShowTopBar(true);
  }, []);

  const handleScrollDown = useCallback((offsetY: number) => {
    if (offsetY > (containerRef.current?.offsetHeight ?? DEFAULT_HEIGHT)) {
      setShouldShowTopBar(false);
    }
  }, []);

  useDetectScrollDirection({
    scrollContainerID: scrollContainerID,
    scrollUpCallback: handleScrollUp,
    scrollDownCallback: handleScrollDown,
  });

  useLayoutEffect(() => {
    if (placeHolderRef.current) {
      placeHolderRef.current.style.height = `${containerRef.current?.offsetHeight}px`;
    }
  }, []);

  return (
    <div>
      <div ref={placeHolderRef} className={s.placeholderDiv} />
      <div
        ref={containerRef}
        className={classNames({
          [s.container]: true,
          [s.shouldShow]: shouldShowTopBar,
          [s.shouldHide]: !shouldShowTopBar,
        })}
      >
        {children}
      </div>
    </div>
  );
}

export default HeaderWrapperWithScrollBehavior;
