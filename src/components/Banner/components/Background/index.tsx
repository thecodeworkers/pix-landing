import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleDarkTheme } from '../../../../store/actions';
import { Box, Diamond } from '../../../Svg';
import { BoxA, BoxB, BoxC, BoxD, BoxE, BoxF, BoxG, BoxH, BoxI, BoxJ, BoxK, BoxL, DiamondA, DiamondPink, DiamondTurquese, DiamondYellow, DiamondPurple } from '../../components';
import './styles.scss';

export const Background = ({ theme }) => {
  const { darkTheme } = theme;

  return (      
    <div>
      {/* Left */}
      {/* box 1 */}
      <div className="_box" style={{ width: 290, height: 340, bottom: 0, left: 10 }}>
        <div className="_box1">
          <Box
            animation={{ entryPoint: '0px', middlePoint: '-10px' }}
            opacityBox={darkTheme ? null : 0.71}
            linearGradients={BoxA(darkTheme).linearGradient}
            polygons={BoxA(darkTheme).polygon}
          />
        </div>
      </div>

      {/* box 2 */}
      <div className="_box" style={{ width: 110, height: 160, bottom: '38.425%', left: -41 }}>
        <div>
          <Box
            animation={{ entryPoint: '0px', middlePoint: '10px' }}
            opacityBox={darkTheme ? null : 0.71}
            linearGradients={BoxB(darkTheme).linearGradient}
            polygons={BoxB(darkTheme).polygon}
          />
        </div>
      </div>

      {/* box 3 */}
      <div className="_box" style={{ width: 190, height: 240, bottom: '53%', left: 92 }}>
        <div>
          <Box
            viewWidth={383.3}
            viewHeight={453.69}
            animation={{ entryPoint: '0px', middlePoint: '-10px' }}
            opacityBox={darkTheme ? null : 0.71}
            linearGradients={BoxC(darkTheme).linearGradient}
            polygons={BoxC(darkTheme).polygon}
          />
        </div>
      </div>

      {/* box 4 */}
      <div className="_box" style={{ width: 140, height: 190, bottom: '26.5%', left: 300 }}>
        <div>
          <Box
            viewWidth={383.3}
            viewHeight={453.69}
            animation={{ entryPoint: '0px', middlePoint: '10px' }}
            opacityBox={darkTheme ? null : 0.71}
            linearGradients={BoxD(darkTheme).linearGradient}
            polygons={BoxD(darkTheme).polygon}
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
            opacityBox={darkTheme ? null : 0.71}
            linearGradients={BoxE(darkTheme).linearGradient}
            polygons={BoxE(darkTheme).polygon}
          />
        </div>
      </div>

      {/* box 6 */}
      <div className="_box" style={{ width: 150, height: 200, bottom: '31.8%', left: 545 }}>
        <div>
          <Box
            viewWidth={383.3}
            viewHeight={453.69}
            animation={{ entryPoint: '0px', middlePoint: '10px' }}
            opacityBox={darkTheme ? null : 0.71}
            linearGradients={BoxF(darkTheme).linearGradient}
            polygons={BoxF(darkTheme).polygon}
          />
        </div>
      </div>

      {/* Right */}
      {/* box 7 */}
      <div className="_box" style={{ width: 250, height: 300, bottom: '4.6375%', right: 0 }}>
        <div className="_box7">
          <div style={{ width: 250, height: 300 }}>
            <div>
              <Box
                viewWidth={383.3}
                viewHeight={453.69}
                animation={{ entryPoint: '0px', middlePoint: '10px' }}
                opacityBox={darkTheme ? null : 0.71}
                linearGradients={BoxG(darkTheme).linearGradient}
                polygons={BoxG(darkTheme).polygon}
              />
            </div>
          </div>
        </div>
      </div>

      {/* box 8 */}
      <div className="_box" style={{ width: 120, height: 170, bottom: '63.6%', right: 0 }}>
        <div className="_box8">
          <div style={{ width: 120, height: 170 }}>
            <div>
              <Box
                viewWidth={383.3}
                viewHeight={453.69}
                animation={{ entryPoint: '0px', middlePoint: '-10px' }}
                opacityBox={darkTheme ? null : 0.71}
                linearGradients={BoxH(darkTheme).linearGradient}
                polygons={BoxH(darkTheme).polygon}
              />
            </div>
          </div>
        </div>
      </div>

      {/* box 9 */}
      <div className="_box" style={{ width: 190, height: 240, bottom: '46.375%', right: 205 }}>
        <div>
          <Box
            viewWidth={383.3}
            viewHeight={453.69}
            animation={{ entryPoint: '0px', middlePoint: '-10px' }}
            opacityBox={darkTheme ? null : 0.71}
            linearGradients={BoxI(darkTheme).linearGradient}
            polygons={BoxI(darkTheme).polygon}
          />
        </div>
      </div>

      {/* box 10 */}
      <div className="_box" style={{ width: 160, height: 210, bottom: '58.3%', right: 500 }}>
        <div>
          <Box
            viewWidth={383.3}
            viewHeight={453.69}
            animation={{ entryPoint: '0px', middlePoint: '10px' }}
            opacityBox={darkTheme ? null : 0.71}
            linearGradients={BoxJ(darkTheme).linearGradient}
            polygons={BoxJ(darkTheme).polygon}
          />
        </div>
      </div>

      {/* box 11 */}
      <div className="_box" style={{ width: 130, height: 180, bottom: '27%', right: 532 }}>
        <div>
          <Box
            viewWidth={383.3}
            viewHeight={453.69}
            animation={{ entryPoint: '0px', middlePoint: '-10px' }}
            opacityBox={darkTheme ? null : 0.71}
            linearGradients={BoxK(darkTheme).linearGradient}
            polygons={BoxK(darkTheme).polygon}
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
            opacityBox={darkTheme ? null : 0.71}
            linearGradients={BoxL(darkTheme).linearGradient}
            polygons={BoxL(darkTheme).polygon}
          />
        </div>
      </div>

      {/* diamond */}
      {/* diamond 1 */}
      <div className="_diamond" style={{ width: 100, height: 150, bottom: '75.525%', right: 160 }}>
        <Diamond 
          animation={{ entryPoint: '0px', middlePoint: '10px' }}
          linearGradients={DiamondA(darkTheme).linearGradient}
          linearGradientsColor={darkTheme ? DiamondPink : DiamondPurple}
        />
      </div>

      {/* diamond 2 */}
      <div className="_diamond" style={{ width: 90, height: 140, bottom: '41.075%', right: 70 }}>
        <Diamond
          animation={{ entryPoint: '0px', middlePoint: '-10px' }}
          linearGradients={DiamondA(darkTheme).linearGradient}
          linearGradientsColor={DiamondTurquese}
        />
      </div>

      {/* diamond 3 */}
      <div className="_diamond" style={{ width: 70, height: 130, bottom: '18.55%', right: 294 }}>
        <Diamond
          animation={{ entryPoint: '0px', middlePoint: '10px' }}
          linearGradients={DiamondA(darkTheme).linearGradient}
          linearGradientsColor={darkTheme ? DiamondYellow : DiamondPink}
        />
      </div>
    </div>
  );
}

const mapStateToProps = ({ theme }) => ({ theme });

export default connect(mapStateToProps)(Background);
