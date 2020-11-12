import React from 'react';
import Image from '../image';
import './style.css';

let isShownLeft = false;
let isShownRight = false;
let isShownCentral = false;

let counterLeft = 0;
let counterRight = 0;
let counterCentral = 0;

const ImagesLayer = (props) => {

  const { timeStamp, rickRoll } = props;

  const imgLeft = '/images/image1.png';
  const imgRight = '/images/image2.png';
  const imgCenter = '/images/image3.png';

  let showLeft = 'hidden';
  let showRight = 'hidden';
  let showCentral = 'hidden';

  const setShowLeft = (startTime, endTime, limit) => {
    if (timeStamp >= startTime && timeStamp <= endTime && counterLeft <= limit) {
      if (isShownLeft === false) {
        isShownLeft = true;
        counterLeft++;
        return 'show';
      };
    } else {
      isShownLeft = false;
      return 'hidden';
    };
  };

  const setShowRight = (startTime, endTime, limit) => {
    if (timeStamp >= startTime && timeStamp <= endTime && counterRight <= limit) {
      if (isShownRight === false) {
        isShownRight = true;
        counterRight++;
        return 'show';
      };
    } else {
      isShownRight = false;
      return 'hidden';
    };
  };

  const setShowCentral = (startTime, endTime, limit) => {
    if (timeStamp >= startTime && timeStamp <= endTime && counterCentral <= limit) {
      if (isShownCentral === false) {
        isShownCentral = true;
        counterCentral++;
        return 'show';
      };
    } else if (counterCentral <= limit) {
      isShownCentral = false;
      return 'hidden';
    } else {
      isShownCentral = false;
      rickRoll();
      return 'hidden';
    }
  };

  showLeft = setShowLeft(3.5, 8, 1);
  showRight = setShowRight(6, 8, 2);
  showCentral = setShowCentral(7, 8.5, 3);
  
  return(
    <div className='wrapper'>
      <div className='upper'>
        <Image src={imgLeft} alt={'banana'} show={showLeft} />
        <Image src={imgRight} alt={'controller'} show={showRight} />
      </div>
      <div className='central'>
        <Image src={imgCenter} alt={'flame'} show={showCentral} />
      </div>
    </div>
  );
};

export default ImagesLayer;