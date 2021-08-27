/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Abilities from './Abilities';

test('renders content', () => {
  const component = renderer.create(<Abilities ability="it" hiddenAbility="workds" />).toJSON();
  expect(component).toMatchSnapshot();
});
