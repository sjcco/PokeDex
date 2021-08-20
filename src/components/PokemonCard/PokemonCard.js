import React from 'react';
import PropTypes from 'prop-types';
import {
  container, icon, caption, pkmnType, typeContainer,
} from './PokemonCard.css';

const PokemonCard = ({
  pokemon, pokeIcon, type1, type2,
}) => {
  const typeclass = type => {
    switch (type) {
      case 'normal':
        return '#a8a878';
      case 'fire':
        return '#f08030';
      case 'water':
        return '#6890f0';
      case 'grass':
        return '#98d8d8';
      case 'flying':
        return '#a890f0';
      case 'fighting':
        return '#c03028';
      case 'poison':
        return '#a040a0';
      case 'electric':
        return '#f8d030';
      case 'ground':
        return '#e0c068';
      case 'rock':
        return '#b8a038';
      case 'psychic':
        return '#f85888';
      case 'ice':
        return '#98d8d8';
      case 'bug':
        return '#a8b820';
      case 'ghost':
        return '#705898';
      case 'steel':
        return '#b8b8d0';
      case 'dragon':
        return '#7038f8';
      case 'dark':
        return '#705848';
      case 'fairy':
        return '#f0b6bc';
      case 'null':
        return null;
      default:
        return null;
    }
  };

  const colorStyle1 = {
    // stylelint-disable-next-line
    backgroundColor: typeclass(type1),
  };

  const colorStyle2 = {
    // stylelint-disable-next-line
    backgroundColor: typeclass(type2),
  };

  return (
    <figure className={container}>
      <img className={icon} src={pokeIcon} alt="..." />
      <figcaption className={caption}>
        <h3>{pokemon}</h3>
        <div className={typeContainer}>
          <div
            className={pkmnType}
            style={colorStyle1}
          >
            <span>{type1}</span>
          </div>
          {typeclass(type2)
          && <div className={pkmnType} style={colorStyle2}><span>{type2}</span></div>}
        </div>
      </figcaption>
    </figure>
  );
};

PokemonCard.propTypes = {
  pokeIcon: PropTypes.string.isRequired,
  pokemon: PropTypes.string.isRequired,
  type1: PropTypes.string.isRequired,
  type2: PropTypes.string.isRequired,
};

export default PokemonCard;
