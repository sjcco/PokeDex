import React from 'react';
import PropTypes from 'prop-types';
import {
  container, abilityBar, hAbilityBar, hiddenTitle, hiddenBar,
} from './Abilities.css';

const Abilities = ({ ability, hiddenAbility }) => (
  <div className={container}>
    <h3 className={abilityBar}>{ability}</h3>
    <div className={hAbilityBar}>
      <h3 className={hiddenTitle}>Hidden</h3>
      <h3 className={hiddenBar}>{hiddenAbility}</h3>
    </div>
  </div>
);

Abilities.propTypes = {
  ability: PropTypes.string.isRequired,
  hiddenAbility: PropTypes.string,
};

Abilities.defaultProps = {
  hiddenAbility: 'none',
};

export default Abilities;
