import { describe, expect, test } from '@jest/globals';

jest.mock('@/redux/store', () => {
  return {
    store: {
      getState: () => ({
        movieConfiguration: {
          status: 'SUCCESS',
          configuration: {
            images: {
              baseUrl: 'http://image.tmdb.org/t/p/',
              secureBaseUrl: 'https://image.tmdb.org/t/p/',
              backdropSizes: ['w300', 'w780', 'w1280', 'original'],
              logoSizes: ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'],
              posterSizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
              profileSizes: ['w45', 'w185', 'h632', 'original'],
              stillSizes: ['w92', 'w185', 'w300', 'original'],
            },
            changeKeys: [],
          },
        },
      }),
    },
  };
});

describe('getImgProxy helpers with real data', () => {
  const VALID_DATA = [
    {
      path: '/123.png',
      params: { type: 'poster', size: 300 },
      expectValue: 'http://image.tmdb.org/t/p/w342/123.png',
    },
    {
      path: '/123.png',
      params: { type: 'poster', size: 900 },
      expectValue: 'http://image.tmdb.org/t/p/w780/123.png',
    },
    {
      path: '/123.png',
      params: { type: 'backdrop', size: 800 },
      expectValue: 'http://image.tmdb.org/t/p/w780/123.png',
    },
    {
      path: '/123.png',
      params: { type: 'backdrop', size: 1500 },
      expectValue: 'http://image.tmdb.org/t/p/w1280/123.png',
    },
  ];

  VALID_DATA.forEach((item) => {
    test(`getImgProxyUrl(${item.path}, ${JSON.stringify(item.params)}) should equal ${item.expectValue}`, () => {
      // @ts-ignore
      expect(getImgProxyUrl(item.path, item.params)).toBe(item.expectValue);
    });
  });
});
