import React from 'react';
import './style.css';

const Video = (props) => {

  const { src } = props;
  
  return(
    <video controls className='video'>
      <source src={src} type='video/mp4'></source>
    </video>
  )
};

export default Video;