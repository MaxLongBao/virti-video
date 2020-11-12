import React, { useRef } from 'react';
import Button from '../button';
import './style.css';

const Video = (props) => {

  const { src, getTime, auto } = props;
  const videoRef = useRef();

  let video;
  if (!auto) {
    video = <video ref={videoRef} onTimeUpdate={() => {getTime(videoRef.current.currentTime)}} controls className='video'>
    <source src={src} type='video/mp4'></source>
    </video>
  } else {
    video = <video autoPlay loop className='video'>
    <source src={src} type='video/mp4'></source>
    </video>
  }

  return(
    <div>
      {video}
      {auto ? 
      <Button />
      : null}
    </div>
  )
};

export default Video;