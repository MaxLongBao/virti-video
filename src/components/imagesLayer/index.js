import React from 'react';
import Image from '../image';
import './style.css';

const ImagesLayer = (props) => {

  const { prefix } = props;
  const img1 = `${prefix}images/image1.png`;
  const img2 = `${prefix}images/image2.png`;
  const img3 = `${prefix}images/image3.png`;

  return(
    <div className='wrapper'>
      <Image src={img1} />
      <Image src={img2} />
      <Image src={img3} />
    </div>
  );
};

export default ImagesLayer;