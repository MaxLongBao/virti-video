import React from 'react';
import Image from '../image';
import './style.css';

// let showss = false;
// let counterLeft = 0;
// let counterRight = 0;
// let counterCentral = 0;

const ImagesLayer = (props) => {

  const { prefix, time } = props;

  const imgLeft = `${prefix}images/image1.png`;
  const imgRight = `${prefix}images/image2.png`;
  const imgCenter = `${prefix}images/image3.png`;
  
  const show = (startTime, endTime) => {
    if (time >= startTime && time <= endTime) {
      // if (showss === false) {
      //   showss = true;
      //   counterLeft++;
      //   console.log(showss)
      //   console.log(counterLeft)
        return 'show';
      };
    // } else {
    //   showss = false;
      return 'hidden';
    // };
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