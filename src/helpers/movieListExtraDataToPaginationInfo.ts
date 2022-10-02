import { IGetMovieListResponse } from '@/apis/movieList/types';
import { DEFAULT_PAGESIZE } from '@/constants/common';

export const movieListExtraDataToPaginationInfo = (extraData?: Omit<IGetMovieListResponse, 'results'>) => {
  return {
    page: extraData?.page || 1,
    pageSize: DEFAULT_PAGESIZE,
    totalCount: extraData?.totalResults || 0,
  };
};
