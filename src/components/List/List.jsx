import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const List = () => {
  
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://xfiles-api.herokuapp.com/api/v1/characters?category=Monster_of_the_Week&perPage=5')
      .then(res => res.json())
      .then(data => setMonsters(data.results));
  }, []);


  const monsterList = monsters.map((monster, index) => (
    <li key={index}>
      <a href={`./monster/${monster.name}`}>
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
