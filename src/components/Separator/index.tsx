import React from 'react';
import './style.scss';

const Separator = ({height}) => {
  return(
    <div className='_separatorMain'>
      <div className="_rentangleOne" style={{height:height}}></div>
      <div className="_rentangleTwo" style={{height:height}}></div>
      <div className="_rentangleThree" style={{height:height}}></div>
      <div className="_rentangleFour" style={{height:height}}></div>
    </div>
  )
}

export default Separator;