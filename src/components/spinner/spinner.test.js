/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import spinner from './spinner';

test('renders content', () => {
  const component = renderer.create(<spinner />).toJSON();
  expect(component).toMatchSnapshot();
});
