import React, { useState } from 'react';
import './styles.scss';
import { Box1 } from '../Svg/Box';

export default ({ children = null }) => {
  const [show, setShow] = useState(false);
  const [className, setClassName] = useState('');

  const assignValues = (show: boolean, className: string) => {
    setShow(show);
    setClassName(className);
  }

  const propsValue = (classIn, classOut) => {
    return {
      onMouseEnter: () =>  assignValues(true, classIn),
      onMouseLeave: () => assignValues(false, classOut)
    }
  }

  return (
    <>
      <div className="_bannerContainer">
        {/* <div>
          { children }
        </div> */}
        <div {...propsValue('boxAnimation', 'boxAnimationReverse')} style={{ width: 200, height: 280, position: 'absolute', bottom: -60 }}>
          <Box1 showLine={show} className={className}/>
        </div>
      </div>
    </>
  );
}
