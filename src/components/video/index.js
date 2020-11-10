import React from 'react';
import './style.css';

const Video = (props) => {
  return(
    <video controls className='video'>
      <source src={process.env.PUBLIC_URL + 'Big_Buck_Bunny_1080_10s_5MB.mp4'} type='video/mp4'></source>
    </video>
  )
};

export default Video;