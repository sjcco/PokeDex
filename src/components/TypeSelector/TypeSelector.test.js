/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import TypeSelector from './TypeSelector';

test('renders content', () => {
  const fnc = jest.fn();
  const component = renderer.create(<TypeSelector
    filter={fnc}
  />).toJSON();
  expect(component).toMatchSnapshot();
});
