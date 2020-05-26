import React, { useState, useEffect } from 'react';
import { PixelLogo } from '../Svg';
import './styles.scss';

export default ({ children }) => {
  const [color, setColor] = useState('#ff8008');
  const [className, setClassName] = useState('_container');
  
  useEffect(() => {
    let count = 0;
    let currentCount = 0;
    let isLoad = false;

    const interval = setInterval(() => {
      if(isLoad) {
        setClassName('_hide');
        if(currentCount + 1 == count) {
          setClassName('_noneElement');
          clearInterval(interval);
        }
      }

      if(!isLoad) {
        if(!count) setColor('#2699FB');
        if(count == 1) setColor('#45B649');
      }
      
      count++;
    }, 2000);

    window.onload = () => {
      isLoad = true;
      currentCount = count;
    }
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