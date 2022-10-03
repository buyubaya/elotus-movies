import { DUMMY_IMAGE } from '@/constants/common';
import { store } from '@/redux/store';

const getClosestSize = (size: number, sizeList: string[]) => {
  let selectedIndex = null;
  let minDiff = null;

  for (let i = 0, len = sizeList.length; i < len; i++) {
    if (sizeList[i].startsWith('w')) {
      const currentSize = Number(sizeList[i].split('w')?.pop());
      const newMinDiff = Math.abs(size - currentSize);
      if (minDiff === null || newMinDiff < minDiff) {
        minDiff = newMinDiff;
        selectedIndex = i;
      }
    }
  }

  if (selectedIndex === null) {
    return sizeList[sizeList.length - 1];
  }

  return sizeList[selectedIndex] || DUMMY_IMAGE;
};

export const getImgProxyUrl = (
  key: string,
  {
    type,
    size,
  }: {
    type: 'poster' | 'backdrop' | 'profile';
    size: number;
  }
) => {
  if (!key) {
    return DUMMY_IMAGE;
  }

  const configuration = store.getState().movieConfiguration.configuration?.images;
  const baseUrl = configuration?.baseUrl;

  if (!baseUrl) {
    return DUMMY_IMAGE;
  }

  if (!type || !size) {
    return DUMMY_IMAGE;
  }

  if (!type) {
    return DUMMY_IMAGE;
  }

  if (type === 'poster' || type === 'backdrop' || type === 'profile') {
    let sizeList: string[] | null = null;
    if (type === 'poster') {
      sizeList = configuration?.posterSizes || [];
    }
    if (type === 'backdrop') {
      sizeList = configuration?.backdropSizes || [];
    }
    if (type === 'profile') {
      sizeList = configuration?.profileSizes || [];
    }

    if (!sizeList) {
      return DUMMY_IMAGE;
    }

    const closestSize = getClosestSize(size, sizeList);

    if (!closestSize) {
      return DUMMY_IMAGE;
    }
    return `${baseUrl}${closestSize}${key}`;
  }

  return `${baseUrl}${size}${key}`;
};
