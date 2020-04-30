import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/xfiles.js';

const List = () => {
  
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then(data => { console.log(data); setMonsters(data); });
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

export default List;
