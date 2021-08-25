/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import DexEntries from './DexEntries';

test('renders content', () => {
  const component = renderer.create(<DexEntries
    description="it"
    weight="works"
    height="!!!"
  />).toJSON();
  expect(component).toMatchSnapshot();
});
