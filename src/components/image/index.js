import React from 'react';
import './style.css';

const Images = (props) => {

  const { src, alt, show } = props;
  return(
    <div className={show} >
      <img src={src} alt={alt} />
    </div>
  );
}

export default Images;