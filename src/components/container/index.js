import React, { useState } from 'react';
import Video from '../video';
import ImagesLayer from '../imagesLayer';
import './style.css';

const Container = () => {
  
  const [timeStamp, setTimeStamp] = useState();
  const [isRickRoll, setIsRickRoll] = useState(false);
  
  const video = '/Big_Buck_Bunny_1080_10s_5MB.mp4';
  const rickRollVideo = '/videoplayback.mp4';
  
  const getTime = (currentTime) => {
    setTimeStamp(currentTime);
  };

  const rickRoll = () => {
    setIsRickRoll(true);
  };

  return(
    <div className='container'>
      {isRickRoll ? 
      <Video src={rickRollVideo} getTime={getTime} auto={true} />
      : null}
      {isRickRoll ? 
      null
      : <Video src={video} getTime={getTime} auto={false} />}
      <ImagesLayer timeStamp={timeStamp} rickRoll={rickRoll} />
    </div>
  );
};

export default Container;