import React, { useState, useEffect } from 'react';
import './style.css';


const Button = () => {
  
  const [corner, setCorner] = useState('upLeft');

  const handleSlipper = () => {
    switch (corner) {
      case 'upLeft':
        setCorner('upRight');
        break;
      case 'upRight':
        setCorner('downRight');
        break;
      case 'downRight':
        setCorner('downLeft');
        break;
      case 'downLeft':
        setCorner('upLeft');
        break;
      default:
        break;
    }
  }
  return(
    <div className={corner} onMouseOver={() => {handleSlipper()}}>
      <button className='button' type='button' onClick={() => {handleSlipper()}} >ABORT!</button>
    </div>
  );
};

export default Button;