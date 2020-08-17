import React from 'react';
import { PixelLogo, ArrowDown} from '../Svg';
import { scrolling } from '../../utils/common';
import './style.scss';

const ScrollDown = ({reference = null, color}) => {

  
   return (
     <div>
       <div className='_scrollDown' style={{ cursor: reference ? 'pointer' : null }} onClick={reference != null ? () => scrolling(reference) : null}>  
         <ArrowDown color={color} />
       </div>

        {/* <ScrollDown scrollTo={scrolling} landing='target_div' color='#FF8008' />  ejemplo para utilizar en home*/} 
     </div>
   )
}

export default ScrollDown;