/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import PokemonCard from './PokemonCard';

test('renders content', () => {
  const component = renderer.create(<PokemonCard
    pokeIcon="icon"
    pokemon="pokemon"
    type1="type1"
    type2="type2"
  />).toJSON();
  expect(component).toMatchSnapshot();
});
