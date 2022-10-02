import { initialize } from '@/helpers/initialize';
import { useAppDispatch } from '@/redux/hooks';
import { getMovieConfigurationAction } from '@/redux/slices/movieConfiguration/movieConfiguration.actions';
import { ReactElement, useEffect } from 'react';

function AppWrapper({ children }: { children: ReactElement }) {
  const appDispatch = useAppDispatch();

  useEffect(() => {
    appDispatch(getMovieConfigurationAction({})).then(() => {
      initialize();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
}

export default AppWrapper;
