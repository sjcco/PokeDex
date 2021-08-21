import React from 'react';
import TypeBadge from '../TypeBadge/TypeBadge';
import { container, btn } from './TypeSelector.css';

const TypeSelector = ({ filter }) => {
  const types = ['normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy'];
  return (
    <div className={container}>
      <button className={btn} onClick={() => (filter('all'))} type="button">All</button>
      {types.map(type => (
        <button className={btn} key={type} onClick={() => (filter(type))} type="button">
          <TypeBadge type={type} />
        </button>
      ))}
    </div>
  );
};

export default TypeSelector;
