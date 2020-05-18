import React from 'react';
import { PixelLogo } from '../Svg';
import './style.scss';

const ScrollDown = ({scrollTo, landing, color}) => {
   return (
     <div>
       <div className='_scrollDown' onClick={() => scrollTo(landing)}>  
         <PixelLogo color={color} />
       </div>

        {/* <ScrollDown scrollTo={scrolling} landing='target_div' color='#FF8008' />  ejemplo para utilizar en home*/} 
     </div>
   )
}

export default ScrollDown;