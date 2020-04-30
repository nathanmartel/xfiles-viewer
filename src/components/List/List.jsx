import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/xfiles.js';

const List = () => {
  
  const [monsters, setMonsters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCharacters(page)
      .then(data => { console.log(data); setMonsters(data); });
  }, [page]);


  const monsterList = monsters.map((monster, index) => (
    <li key={index}>
      <a href={`./monster/${monster.name}`}>
        <img src={monster.image} alt={monster.name} />
      </a>
    </li>
  ));

  return (
    <>
      <button onClick={() => setPage(page - 1)} disabled={ page <= 1 }>Prev</button>
      &nbsp;&nbsp; {page} &nbsp;&nbsp;
      <button onClick={() => setPage(page + 1)}>Next</button>
      <ul>
        {monsterList}
      </ul>
    </>
  );
};

export default List;
