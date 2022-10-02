import { useEffect, useRef } from 'react';

type ScrollCallbackFn = (offsetY: number, delta: number) => void;

export function useDetectScrollDirection({
  scrollContainerID,
  scrollUpCallback,
  scrollDownCallback,
}: {
  scrollContainerID?: string;
  scrollUpCallback?: ScrollCallbackFn;
  scrollDownCallback?: ScrollCallbackFn;
}) {
  const lastScrollRef = useRef<number | null>(null);
  const scrollUpCallbackRef = useRef<ScrollCallbackFn | undefined>(undefined);
  const scrollDownCallbackRef = useRef<ScrollCallbackFn | undefined>(undefined);

  scrollUpCallbackRef.current = scrollUpCallback;
  scrollDownCallbackRef.current = scrollDownCallback;

  useEffect(() => {
    let _divToTrack: HTMLElement | Window | null = window;
    let _getScrollTopFn: () => number = () => window.pageYOffset;
    if (scrollContainerID) {
      const _div = document.getElementById(scrollContainerID);
      if (_div) {
        _divToTrack = _div;
        _getScrollTopFn = () => (_divToTrack as HTMLElement)?.scrollTop || 0;
      }
    }

    const handleScroll = (getScrollTopFn: () => number) => () => {
      const currentScroll = getScrollTopFn();
      if (!lastScrollRef?.current) {
        lastScrollRef.current = currentScroll;
        return;
      }

      if (lastScrollRef.current - currentScroll > 10) {
        if (typeof scrollUpCallbackRef.current === 'function') {
          scrollUpCallbackRef.current(currentScroll, (lastScrollRef.current || 0) - currentScroll);
        }
        lastScrollRef.current = null;
        return;
      }

      if (currentScroll - lastScrollRef.current > 10) {
        if (typeof scrollDownCallbackRef.current === 'function') {
          scrollDownCallbackRef.current(currentScroll, currentScroll - (lastScrollRef.current || 0));
        }
        lastScrollRef.current = null;
      }
    };

    if (_divToTrack) {
      _divToTrack.addEventListener('scroll', handleScroll(_getScrollTopFn));
    }

    return () => {
      if (_divToTrack) {
        _divToTrack.removeEventListener('scroll', handleScroll(_getScrollTopFn));
      }
    };
  }, [scrollContainerID]);
}
