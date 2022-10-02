import { describe, test } from '@jest/globals';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import React, { ReactElement } from 'react';
import { renderWithSkeleton } from './renderWithSkeleton';

describe('renderWithSkeleton helper', () => {
  test('Renders SuccessComponent', () => {
    const { getByText } = render(renderWithSkeleton(true, <h1>HELLO</h1>, <h2>LOADING</h2>) as ReactElement);
    expect(getByText('HELLO')).toBeInTheDocument();
  });

  test('Renders SkeletonComponent', () => {
    const { getByText } = render(renderWithSkeleton(false, <h1>HELLO</h1>, <h2>LOADING</h2>) as ReactElement);
    expect(getByText('LOADING')).toBeInTheDocument();
  });
});
