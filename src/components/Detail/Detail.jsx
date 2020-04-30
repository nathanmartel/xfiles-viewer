import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Detail = () => {
  
  const [name, setName] = useState('Lorem Ipsum');
  const [image, setImage] = useState('https://placekitten.com/200/200');
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet!');

  useEffect(() => {
    // setMonster({
    //   name: 'Lorem Ipsum',
    //   image: 'https://placekitten.com/200/200',
    //   description: 'Lorem ipsum dolor sit amet!'
  }, []);

  return (
    <>
      <p>Detail</p>
      <img src={image} alt={name} />
      <h3>{name}</h3>
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
