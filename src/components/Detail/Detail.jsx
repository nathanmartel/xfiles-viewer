import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Detail = () => {
  
  const [charname, setName] = useState('Lorem Ipsum');
  const [image, setImage] = useState('https://placekitten.com/200/200');
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet!');

  const { name } = useParams();


  useEffect(() => {
    fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${name}`)
      .then(res => res.json())
      .then(data => {
        console.log('data is', data);
        setName(data[0].name);
        setImage(data[0].image);
        setDescription(data[0].description);
      });
  }, []);

  return (
    <>
      <p>Detail</p>
      <img src={image} alt={charname} />
      <h3>{charname}</h3>
      <p>{description}</p>
    </>
  );
};

// Detail.propTypes = {
//   image: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired
// };

export default Detail;
