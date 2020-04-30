import React from 'react';
import PropTypes from 'prop-types';

const List = ({ monsters }) => {
  
  const monsterList = monsters.map((monster, index) => (
    <li key={index}>
      <a href={`./monster/${name}`}>
        <img src={monster.image} alt={monster.name} />
      </a>
    </li>
  ));

  return (
    <ul>
      {monsterList}
    </ul>
  );
};

List.propTypes = {
  monsters: PropTypes.arrayOf(PropTypes.shape({ 
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }))
};

export default List;
