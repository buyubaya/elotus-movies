import { searchMovies } from '@/apis/search/searchMovies';
import { ISearchMoviesResposne } from '@/apis/search/types';
import { movieListExtraDataToPaginationInfo } from '@/helpers/movieListExtraDataToPaginationInfo';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // STATEs
  const [searchData, setSearchData] = useState<ISearchMoviesResposne | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  //

  // COMPUTED
  const searchList = searchData ? searchData.results : [];
  const paginationInfo = searchData ? movieListExtraDataToPaginationInfo(searchData) : null;
  const { query, page } = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query') || '';
    const page = Number(searchParams.get('page') || '1');

    return {
      query: query,
      page: page,
    };
  }, [location.search]);
  //

  // HANDLERs
  const fetchMovies = async (query: string, page?: number) => {
    try {
      const data = await searchMovies({ query: query, page: page });

      setSearchData(data);
      setError('');
    } catch (reason) {
      setError((reason as { message: string })?.message);
    }
  };

  const updateSearchQuery = ({ query, page }: { query?: string; page?: number }) => {
    const searchParams = new URLSearchParams(location.search);
    if (typeof query !== 'undefined') {
      searchParams.set('query', query);
    }
    if (typeof page !== 'undefined') {
      searchParams.set('page', `${page}`);
    }
    navigate({ search: searchParams.toString() });
  };
  //

  // DID MOUNT
  useEffect(() => {
    setIsLoading(true);
    fetchMovies(query, page).then(() => {
      setIsLoading(false);
    });
  }, [query, page]);
  //

  const refetchMovies = async () => {
    await fetchMovies(query);
  };

  return {
    searchList: searchList,
    isLoading: isLoading,
    error: error,
    paginationInfo: paginationInfo,
    refetchMovies,
    updateSearchQuery,
  };
};
