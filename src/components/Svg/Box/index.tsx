import React, { memo, useState } from 'react';
import { PixelBox } from './functions';
import './styles.scss';

const opacity = (value = null) => ({ opacity: value });
const defaultGradient = { stop: [], coordinates: {} }

const Box = ({
  viewWidth,
  viewHeight,
  animation,
  opacityBox = null,
  linearGradient = [],
  polygons = [],
  gradientOne = defaultGradient,
  gradientTwo = defaultGradient,
  gradientThree = defaultGradient,
  gradientFour = defaultGradient,
  gradientFive = defaultGradient,
  gradientSix = defaultGradient
}) => {
  const [show, setShow] = useState(false);
  // const [animatedClass, setAnimatedClass] = useState('');

  const propsValue = () => ({
    onMouseEnter: () => {
      setShow(true)
      // setAnimatedClass('boxAnimation')
    },
    onMouseLeave: () => {
      setShow(false)
      // setAnimatedClass('boxAnimationReverse')
    } 
  });

  return (
    <PixelBox {...animation}>
      <svg {...propsValue()} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewWidth} ${viewHeight}`}>
        <defs>
          <linearGradient id={linearGradient[0] ? linearGradient[0].linearId : ''} {...gradientOne.coordinates} gradientUnits="userSpaceOnUse">
            {
              gradientOne.stop.map((stopColor, index) => (
                <stop key={index} {...stopColor}/>
              ))
            }
          </linearGradient>
          <linearGradient id={linearGradient[1] ? linearGradient[1].linearId : ''} {...gradientTwo.coordinates} gradientUnits="userSpaceOnUse">
            {
              show
                ? gradientTwo.stop.map((stopColor, index) => (
                    <stop key={index} {...stopColor}/>
                  ))
                : null
            }
          </linearGradient>
          <linearGradient id={linearGradient[2] ? linearGradient[2].linearId : ''} {...gradientThree.coordinates} gradientUnits="userSpaceOnUse">
            {
              gradientThree.stop.map((stopColor, index) => (
                <stop key={index} {...stopColor}/>
              ))
            }
          </linearGradient>
          <linearGradient id={linearGradient[3] ? linearGradient[3].linearId : ''} {...gradientFour.coordinates} gradientUnits="userSpaceOnUse">
            {
              show 
                ? gradientFour.stop.map((stopColor, index) => (
                    <stop key={index} {...stopColor}/>
                  ))
                : null
            }
          </linearGradient>
          <linearGradient id={linearGradient[4] ? linearGradient[4].linearId : ''} {...gradientFive.coordinates} gradientUnits="userSpaceOnUse">
            {
              gradientFive.stop.map((stopColor, index) => (
                <stop key={index} {...stopColor}/>
              ))
            }
          </linearGradient>
          <linearGradient id={linearGradient[5] ? linearGradient[5].linearId : ''} {...gradientSix.coordinates} gradientUnits="userSpaceOnUse">
            {
              show 
                ? gradientSix.stop.map((stopColor, index) => (
                    <stop key={index} {...stopColor}/>
                  ))
                : null
            }
          </linearGradient>
        </defs>
        <g className="cls1" style={opacity(opacityBox)}>
          {
            polygons.map((polygon, index) => (
              <polygon key={index} {...polygon}/>
            ))
          }
        </g>
      </svg>
    </PixelBox>
  );
}

export default memo(Box);
