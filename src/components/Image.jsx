import React from 'react';
import '../styles/Image.css';

const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default Image;