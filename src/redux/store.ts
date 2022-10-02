import { Action, AnyAction, Dispatch, getDefaultMiddleware, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { createStore } from 'redux-dynamic-modules';
import { getMovieConfigurationReducerModule } from './slices/movieConfiguration/movieConfiguration.module';
import { IMovieConfigurationReducerState } from './slices/movieConfiguration/types';
import { getMovieDetailReducerModule } from './slices/movieDetail/movieDetail.module';
import { IMovieDetailReducerState } from './slices/movieDetail/types';
import { getMovieListReducerModule } from './slices/movieList/movieList.module';
import { IMovieListReducerState } from './slices/movieList/types';

const defaultMiddlewares = getDefaultMiddleware();

export const store = createStore(
  {
    initialState: {
      /** initial state */
    },
    enhancers: [
      /** enhancers to include */
    ],
    extensions: [
      /** extensions to include i.e. getSagaExtension(), getThunkExtension() */
      {
        middleware: defaultMiddlewares,
      },
    ],
  },
  getMovieConfigurationReducerModule(),
  getMovieListReducerModule(),
  getMovieDetailReducerModule()
  /* ...any additional modules */
);

export type AppDispatch = ThunkDispatch<AppRootState, null, AnyAction> &
  ThunkDispatch<AppRootState, undefined, AnyAction> &
  Dispatch<AnyAction>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootState, unknown, Action<string>>;

export interface AppRootState {
  movieConfiguration: IMovieConfigurationReducerState;
  movieList: IMovieListReducerState;
  movieDetail: IMovieDetailReducerState;
}
