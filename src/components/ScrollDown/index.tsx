import React from 'react';
import { PixelLogo } from '../Svg';
import './style.scss';

const ScrollDown = ({scrollTo, landing}) => {
   return (
     <div>
       <div className='_scrollDown' onClick={() => scrollTo(landing)}>  
         <PixelLogo color='#FF8008' />
       </div>
       {/* <button >scroll down</button> */}
     </div>
   )
}

export default ScrollDown;