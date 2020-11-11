import React from 'react';
import Video from '../video';
import ImagesLayer from '../imagesLayer';
import './style.css';

const Container = () => {

  const prefix = process.env.PUBLIC_URL;
  const video = `${prefix}Big_Buck_Bunny_1080_10s_5MB.mp4`;

  return(
    <div className='container'>
      <Video src={video} />
      <ImagesLayer prefix={prefix} />
    </div>
  );
};

export default Container;