import React, { useState } from 'react';
import Video from '../video';
import ImagesLayer from '../imagesLayer';
import './style.css';

// let showed = false;

const Container = () => {

  const [time, setTime] = useState();

  const prefix = process.env.PUBLIC_URL;
  const video = `${prefix}Big_Buck_Bunny_1080_10s_5MB.mp4`;
  
  const getTime = (currentTime) => {
    setTime(currentTime);
  };

  return(
    <div className='container'>
      <Video src={video} getTime={getTime} />
      <ImagesLayer prefix={prefix} time={time} />
    </div>
  );
};

export default Container;