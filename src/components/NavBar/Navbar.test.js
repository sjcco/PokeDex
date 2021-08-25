/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

test('renders content', () => {
  const fnc = jest.fn();
  const component = renderer.create(<Navbar
    btn="filter"
    openFilter={fnc}
  />).toJSON();
  expect(component).toMatchSnapshot();
});
