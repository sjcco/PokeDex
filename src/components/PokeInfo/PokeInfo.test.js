/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import PokeInfo from './PokeInfo';

test('renders content', () => {
  const component = renderer.create(<PokeInfo
    icon="icon"
    pokeName="name"
    id="id"
    genus="genus"
    type1="type1"
    type2="type2"
  />).toJSON();
  expect(component).toMatchSnapshot();
});
