import React, { useState, useEffect } from 'react';
import List from '../List/List';

export default function App() {
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


  return ( 
    <>
      <h1>X-Files Monsters of the Week</h1>
      <List monsters={monsters} />
    </>
  );
}
