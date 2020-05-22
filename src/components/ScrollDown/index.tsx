import React from 'react';
import { PixelLogo } from '../Svg';
import './style.scss';

const ScrollDown = ({reference = null, color}) => {
  const scrolling = (ref: any): void => {
    const target = ref.current;
    window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
  }
  
   return (
     <div>
       <div className='_scrollDown' style={{ cursor: reference ? 'pointer' : null }} onClick={() => scrolling(reference)}>  
         <PixelLogo color={color} />
       </div>

        {/* <ScrollDown scrollTo={scrolling} landing='target_div' color='#FF8008' />  ejemplo para utilizar en home*/} 
     </div>
   )
}

export default ScrollDown;