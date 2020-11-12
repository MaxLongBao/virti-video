import React, { useRef } from 'react';
import './style.css';

const Video = (props) => {

  const { src, getTime } = props;
  const videoRef = useRef();

  return(
    // <video ref={videoRef} onTimeUpdate={() => console.log(videoRef.current.currentTime)} controls className='video'>
    <video ref={videoRef} onTimeUpdate={() => {getTime(videoRef.current.currentTime)}} controls className='video'>
      <source src={src} type='video/mp4'></source>
    </video>
  )
};

export default Video;