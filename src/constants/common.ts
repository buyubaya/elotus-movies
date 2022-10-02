import { IFilterQuery } from '@/types/common';

export const DEFAULT_PAGESIZE = 20;

export const DEFAULT_FILTER_QUERY: IFilterQuery = {
  pagination: {
    page: 1,
    pageSize: DEFAULT_PAGESIZE,
  },
};

export const DUMMY_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
