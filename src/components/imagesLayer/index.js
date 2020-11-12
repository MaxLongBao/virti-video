import React from 'react';
import Image from '../image';
import './style.css';

const ImagesLayer = (props) => {

  const { prefix, time } = props;

  const imgLeft = `${prefix}images/image1.png`;
  const imgRight = `${prefix}images/image2.png`;
  const imgCenter = `${prefix}images/image3.png`;
  
  const show = (startTime, endTime) => {
    if (time >= startTime && time <= endTime) {
        return 'show';
      };
      return 'hidden';
  };

  let showLeft = 'hidden';
  let showRight = 'hidden';
  let showCentral = 'hidden';

  showLeft = show(3.5, 8.0);
  showRight = show(6.0, 8.0);
  showCentral = show(7.0, 8.5);
  
  return(
    <div className='wrapper'>
      <div className='upper'>
        <Image src={imgLeft} show={showLeft} />
        <Image src={imgRight} show={showRight} />
      </div>
      <div className='central'>
        <Image src={imgCenter} show={showCentral} />
      </div>
    </div>
  );
};

export default ImagesLayer;