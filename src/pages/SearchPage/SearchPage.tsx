import CommonContainer from '@/components/CommonContainer';
import MovieList from '@/components/MovieList';
import React from 'react';
import { useSearch } from './hooks/useSearch';

function SearchPage() {
  const { searchList, paginationInfo, error, isLoading, refetchMovies, updateSearchQuery } = useSearch();

  const handlePageChange = (newPage: number) => {
    updateSearchQuery({ page: newPage });
  };

  return (
    <CommonContainer>
      <MovieList
        list={searchList}
        paginationInfo={paginationInfo}
        isLoading={isLoading}
        error={error}
        onRetry={refetchMovies}
        onPageChange={handlePageChange}
      />
    </CommonContainer>
  );
}

export default SearchPage;
