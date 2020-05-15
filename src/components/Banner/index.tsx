import React, { useState } from 'react';
import './styles.scss';
import { Box } from '../Svg';
import {
  gradient1One, gradient1Two, gradient1Three, gradient1Four, gradient1Five, gradient1Six, linearGradientBox1, polygon1,
  linearGradientBox2, polygon2
} from './functions';

export default ({ children = null }) => {
  return (
    <div className="_banner">
      {/* Left */}
      {/* box 1 */}
      <div className="_box" style={{ width: 290, height: 340, bottom: 0, left: 10 }}>
        <div className="_box1">
          <Box
            viewWidth={383.3}
            viewHeight={453.69}
            animation={{ entryPoint: '0px', middlePoint: '-10px' }}
            opacityBox={0.71}
            linearGradient={linearGradientBox1}
            polygons={polygon1}
            gradientOne={gradient1One}
            gradientTwo={gradient1Two}
            gradientThree={gradient1Three}
            gradientFour={gradient1Four}
            gradientFive={gradient1Five}
            gradientSix={gradient1Six}
          />
        </div>
      </div>

      {/* box 2 */}
      <div className="_box" style={{ width: 110, height: 160, bottom: 290, left: -41 }}>
        <div>
          <Box
            viewWidth={383.3}
            viewHeight={453.69}
            animation={{ entryPoint: '0px', middlePoint: '10px' }}
            opacityBox={0.71}
            linearGradient={linearGradientBox2}
            polygons={polygon2}
            gradientOne={gradient1One}
            gradientTwo={gradient1Two}
            gradientThree={gradient1Three}
            gradientFour={gradient1Four}
            gradientFive={gradient1Five}
            gradientSix={gradient1Six}
          />
        </div>
      </div>

      {/* box 3 */}
      <div className="_box" style={{ width: 190, height: 240, bottom: 400, left: 92 }}>
        <div>
          <Box
            viewWidth={383.3}
            viewHeight={453.69}
            animation={{ entryPoint: '0px', middlePoint: '-10px' }}
            opacityBox={0.71}
            polygons={polygon1}
            gradientOne={gradient1One}
            gradientTwo={gradient1Two}
            gradientThree={gradient1Three}
            gradientFour={gradient1Four}
            gradientFive={gradient1Five}
            gradientSix={gradient1Six}
          />
        </div>
      </div>

      {/* box 4 */}
      <div className="_box" style={{ width: 140, height: 190, bottom: 200, left: 300 }}>
        <div>
          <Box
            viewWidth={383.3}
            viewHeight={453.69}
            animation={{ entryPoint: '0px', middlePoint: '10px' }}
            opacityBox={0.71}
            polygons={polygon1}
            gradientOne={gradient1One}
            gradientTwo={gradient1Two}
            gradientThree={gradient1Three}
            gradientFour={gradient1Four}
            gradientFive={gradient1Five}
            gradientSix={gradient1Six}
          />
        </div>
      </div>

      {/* box 5 */}
      <div className="_box" style={{ width: 210, height: 260, bottom: 0, left: 340 }}>
        <div className="_box5">
          <Box
            viewWidth={383.3}
            viewHeight={453.69}
            animation={{ entryPoint: '0px', middlePoint: '-10px' }}
            opacityBox={0.71}
            polygons={polygon1}
            gradientOne={gradient1One}
            gradientTwo={gradient1Two}
            gradientThree={gradient1Three}
            gradientFour={gradient1Four}
            gradientFive={gradient1Five}
            gradientSix={gradient1Six}
          />
        </div>
      </div>

      {/* box 6 */}
      <div className="_box" style={{ width: 150, height: 200, bottom: 240, left: 545 }}>
        <div>
          <Box
            viewWidth={383.3}
            viewHeight={453.69}
            animation={{ entryPoint: '0px', middlePoint: '10px' }}
            opacityBox={0.71}
            polygons={polygon1}
            gradientOne={gradient1One}
            gradientTwo={gradient1Two}
            gradientThree={gradient1Three}
            gradientFour={gradient1Four}
            gradientFive={gradient1Five}
            gradientSix={gradient1Six}
          />
        </div>
      </div>

      {/* Right */}
      {/* box 7 */}
      <div className="_box" style={{ width: 250, height: 300, bottom: 35, right: 0 }}>
        <div className="_box7">
          <div style={{ width: 250, height: 300 }}>
            <div>
              <Box
                viewWidth={383.3}
                viewHeight={453.69}
                animation={{ entryPoint: '0px', middlePoint: '10px' }}
                opacityBox={0.71}
                polygons={polygon1}
                gradientOne={gradient1One}
                gradientTwo={gradient1Two}
                gradientThree={gradient1Three}
                gradientFour={gradient1Four}
                gradientFive={gradient1Five}
                gradientSix={gradient1Six}
              />
            </div>
          </div>
        </div>
      </div>

      {/* box 8 */}
      <div className="_box" style={{ width: 120, height: 170, bottom: 480, right: 0 }}>
        <div className="_box8">
          <div style={{ width: 120, height: 170 }}>
            <div>
              <Box
                viewWidth={383.3}
                viewHeight={453.69}
                animation={{ entryPoint: '0px', middlePoint: '-10px' }}
                opacityBox={0.71}
                polygons={polygon1}
                gradientOne={gradient1One}
                gradientTwo={gradient1Two}
                gradientThree={gradient1Three}
                gradientFour={gradient1Four}
                gradientFive={gradient1Five}
                gradientSix={gradient1Six}
              />
            </div>
          </div>
        </div>
      </div>

      {/* box 9 */}
      <div className="_box" style={{ width: 190, height: 240, bottom: 350, right: 205 }}>
        <div>
          <Box
            viewWidth={383.3}
            viewHeight={453.69}
            animation={{ entryPoint: '0px', middlePoint: '-10px' }}
            opacityBox={0.71}
            polygons={polygon1}
            gradientOne={gradient1One}
            gradientTwo={gradient1Two}
            gradientThree={gradient1Three}
            gradientFour={gradient1Four}
            gradientFive={gradient1Five}
            gradientSix={gradient1Six}
          />
        </div>
      </div>

      {/* box 10 */}
      <div className="_box" style={{ width: 160, height: 210, bottom: 440, right: 500 }}>
        <div>
          <Box
            viewWidth={383.3}
            viewHeight={453.69}
            animation={{ entryPoint: '0px', middlePoint: '10px' }}
            opacityBox={0.71}
            polygons={polygon1}
            gradientOne={gradient1One}
            gradientTwo={gradient1Two}
            gradientThree={gradient1Three}
            gradientFour={gradient1Four}
            gradientFive={gradient1Five}
            gradientSix={gradient1Six}
          />
        </div>
      </div>

      {/* box 11 */}
      <div className="_box" style={{ width: 130, height: 180, bottom: 220, right: 532 }}>
        <div>
          <Box
            viewWidth={383.3}
            viewHeight={453.69}
            animation={{ entryPoint: '0px', middlePoint: '-10px' }}
            opacityBox={0.71}
            polygons={polygon1}
            gradientOne={gradient1One}
            gradientTwo={gradient1Two}
            gradientThree={gradient1Three}
            gradientFour={gradient1Four}
            gradientFive={gradient1Five}
            gradientSix={gradient1Six}
          />
        </div>
      </div>

      {/* box 12 */}
      <div className="_box" style={{ width: 250, height: 300, bottom: 0, right: 312 }}>
        <div className="_box12">
          <Box
            viewWidth={383.3}
            viewHeight={453.69}
            animation={{ entryPoint: '0px', middlePoint: '-10px' }}
            opacityBox={0.71}
            polygons={polygon1}
            gradientOne={gradient1One}
            gradientTwo={gradient1Two}
            gradientThree={gradient1Three}
            gradientFour={gradient1Four}
            gradientFive={gradient1Five}
            gradientSix={gradient1Six}
          />
        </div>
      </div>
    </div>
  );
}
