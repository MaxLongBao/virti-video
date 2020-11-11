import React from 'react';
import Video from '../video';
import Image from '../image';
import './style.css';

const Container = () => {

  const prefix = process.env.PUBLIC_URL;
  const img1 = `${prefix}images/image1.png`;
  const img2 = `${prefix}images/image2.png`;
  const img3 = `${prefix}images/image3.png`;
  const video = `${prefix}Big_Buck_Bunny_1080_10s_5MB.mp4`;

  return(
    <div className='container'>
      <Image src={img1} />
      <Image src={img2} />
      <Image src={img3} />
      <Video src={video} />
    </div>
  );
};

export default Container;