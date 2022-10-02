import { APP_ROUTES_CONFIG } from '@/constants/routes';
import ErrorPage from '@/pages/ErrorPage';
import MovieDetailPage from '@/pages/MovieDetailPage';
import MovieListPage from '@/pages/MovieListPage';
import SearchPage from '@/pages/SearchPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from '../AppLayout';
import RedirectRoute from './comnponents/RedirectRoute';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path={APP_ROUTES_CONFIG.HOME.path} element={<MovieListPage />} />
          <Route path={APP_ROUTES_CONFIG.MOVIE_DETAIL.path} element={<MovieDetailPage />} />
          <Route path={APP_ROUTES_CONFIG.SEARCH.path} element={<SearchPage />} />

          <Route path={APP_ROUTES_CONFIG.NOT_FOUND.path} element={<ErrorPage />} />
        </Route>

        <Route path="*" element={<RedirectRoute to={APP_ROUTES_CONFIG.NOT_FOUND.path} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
