export const getAPIAccessToken = (): string => {
  return process.env.REACT_APP_MOVIE_API_TOKEN || '';
};
