import React, { memo, useState } from 'react';
import { PixelBox, opacity } from './styles';

const Box = ({
  viewWidth = 383.3,
  viewHeight = 453.69,
  animation,
  opacityBox = null,
  linearGradients = [],
  polygons = []
}) => {
  const [show, setShow] = useState(false);

  const propsValue = () => ({
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  });

  const showLine = (isShow) => {
    if(!isShow) return show
    return isShow;
  }

  return (
    <PixelBox {...animation}>
      <svg {...propsValue()} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${viewWidth} ${viewHeight}`}>
        <defs>
          {
            linearGradients.map(({ linearId, coordinates, showStop, stops, matrixCoordinates = null }, index) => (
              <linearGradient key={index} id={linearId} {...coordinates} gradientUnits="userSpaceOnUse" gradientTransform={matrixCoordinates}>
                {
                  showLine(showStop)
                    ? stops.map((stop, index) => (
                        <stop key={index} {...stop}/>
                      ))
                    : null
                }
              </linearGradient>
            ))
          }
        </defs>
        <g style={opacity(opacityBox)}>
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
