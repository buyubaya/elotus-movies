export const queryObjectToString = (query: Record<string, string | number>) => {
  const keys = Object.keys(query);
  if (!keys.length) {
    return '';
  }

  const string = keys
    .filter((key) => key && query[key])
    .map((key) => `${key}=${query[key]}`)
    .join('&');
  return `?${string}`;
};
