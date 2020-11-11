import React from 'react';
import './style.css';

const Images = (props) => {

  const { src } = props;
  return(
    <div className='image'>
      <img src={src} alt='alt' />
    </div>
  );
}

export default Images;