import React from 'react';
import PropTypes from 'prop-types';
import TypeBadge from '../TypeBadge/TypeBadge';
import {
  container, icon, caption, typeContainer,
} from './PokemonCard.css';

const PokemonCard = ({
  pokemon, pokeIcon, type1, type2,
}) => {
  const hasType2 = type2 !== 'null';
  return (
    <figure className={container}>
      <img className={icon} src={pokeIcon} alt="..." />
      <figcaption className={caption}>
        <h3>{pokemon}</h3>
        <div className={typeContainer}>
          <TypeBadge type={type1} />
          {hasType2 && <TypeBadge type={type2} />}
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
