import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ image, name, description }) => {
  
  return (
    <>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </>
  );
};

Detail.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Detail;
