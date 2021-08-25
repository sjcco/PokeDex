/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import TypeBadge from './TypeBadge';

test('renders content', () => {
  const component = renderer.create(<TypeBadge
    type="type"
  />).toJSON();
  expect(component).toMatchSnapshot();
});
