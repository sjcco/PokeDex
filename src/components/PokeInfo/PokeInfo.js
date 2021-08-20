import React from 'react';
import PropTypes from 'prop-types';
import {
  container, info, infoHeader, cardIcon, badgesContainer, genusTitle,
} from './PokeInfo.css';
import TypeBadge from '../TypeBadge/TypeBadge';
import { padLeadingZeros } from '../../helpers';

const PokeInfo = ({
  icon, pokeName, id, genus, type1, type2,
}) => (
  <div className={container}>
    <div className={info}>
      <div className={infoHeader}>
        <h1>{pokeName}</h1>
        <p>{`#${padLeadingZeros(id, 4)}`}</p>
      </div>
      <h2 className={genusTitle}>{genus}</h2>
      <div className={badgesContainer}>
        <TypeBadge type={type1} />
        {!(type2 === 'null') && <TypeBadge type={type2} />}
      </div>
    </div>
    <img className={cardIcon} src={icon} alt="" />
  </div>
);

PokeInfo.propTypes = {
  icon: PropTypes.string.isRequired,
  pokeName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  genus: PropTypes.string.isRequired,
  type1: PropTypes.string.isRequired,
  type2: PropTypes.string.isRequired,
};

export default PokeInfo;
