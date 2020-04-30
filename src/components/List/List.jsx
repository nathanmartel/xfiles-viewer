import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const List = () => {
  
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    setMonsters([{
      name: 'Lorem Ipsum',
      image: 'https://placekitten.com/200/200',
    }, {
      name: 'Dolor Sitar',
      image: 'https://placekitten.com/200/200',
    }]);  
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
