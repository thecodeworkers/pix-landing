import React, { memo, useState } from 'react';
import { DiamondBox } from './styles';

const SvgLinears = ({ gradients }) => (
  <>
    {
      gradients.map(({ linearId, coordinates, matrixCoordinates, stops, polygons }, index) => (
        <g key={index}>
          <linearGradient key={index} id={linearId} {...coordinates} gradientTransform={matrixCoordinates} gradientUnits="userSpaceOnUse">
            {
              stops.map((stop, index) => (
                <stop key={index} {...stop}/>
              ))
            }
          </linearGradient>
          <polygon {...polygons}/>
        </g>
      ))
    }
  </>
)

const Diamond = ({ animation, linearGradients, linearGradientsColor }) => {
  const [show, setShow] = useState(false);

  const propsValue = () => ({
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  });

  return (
    <DiamondBox {...animation}>
      <svg {...propsValue()} viewBox="0 0 126.9 166">
        <SvgLinears gradients={show ? linearGradientsColor : linearGradients}/>
      </svg>
    </DiamondBox>
  )  
}

export default memo(Diamond);
