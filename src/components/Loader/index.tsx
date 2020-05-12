import React, { useState, useEffect } from 'react';
import { PixelLogo } from '../Svg';
import './styles.scss';

export default ({ children }) => {
  const [color, setColor] = useState('#ff8008');
  const [className, setClassName] = useState('_container');

  useEffect(() => {
    let count = 0;

    const interval = setInterval(() => {      
      if(!count) setColor('#33A3DC');
      if(count == 1) setColor('#45B649');
      if(count == 2) setClassName('_hide');

      if(count == 3) {
        setClassName('_noneElement');
        clearInterval(interval);
      }

      count++;
    }, 2000);
  }, []);

  return (
    <>
      <div className={className}>
        <div className="_pixel">
          <PixelLogo color={color}/>
        </div>
      </div>
      { children }
    </>
  );
}