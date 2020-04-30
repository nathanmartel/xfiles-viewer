import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchCharacterDetail } from '../../services/xfiles.js';

const Detail = () => {
  
  const [charname, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const { name } = useParams();

  useEffect(() => {
    fetchCharacterDetail(name)
      .then(character => {
        setName(character.name);
        setImage(character.image);
        setDescription(character.description);
      });
  }, []);

  return (
    <>
      <h4>Character Detail</h4>
      <img src={image} alt={charname} />
      <h3>{charname}</h3>
      <p>{description}</p>
    </>
  );
};

export default Detail;
