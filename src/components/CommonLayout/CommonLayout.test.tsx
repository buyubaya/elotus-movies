import { describe, expect, test } from '@jest/globals';
import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import CommonLayout from './CommonLayout';

describe('<CommonLayout />', () => {
  test('Render without crash', () => {
    const tree = renderer.create(<CommonLayout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
