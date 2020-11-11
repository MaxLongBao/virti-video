import React from 'react';

const Images = (props) => {

  const { src } = props;
  return(
    <div>
      <img src={src} />
    </div>
  );
}

export default Images;