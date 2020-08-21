import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleDarkTheme } from '../../../../store/actions';
import { Box , PaintedDiamond } from '../../../Svg';
import { BoxA, BoxB, BoxC, BoxD, BoxE, BoxF, BoxG, BoxH, BoxI, BoxJ, BoxK, BoxL, DiamondA, DiamondPink, DiamondTurquese, DiamondYellow, DiamondPurple } from '../../components';
import './styles.scss';



export const Background = ({ theme }) => {
  const { darkTheme } = theme;

  

  return (      
    <div>
      {/* Left */}
      {/* box 1 */}
      <div className="_box _box1">
        <div className="_box1Children">
            <div style={{ width: 250, height: 300 }}>
          <Box
            animation={{ entryPoint: '0px', middlePoint: '-10px' }}
            opacityBox={darkTheme ? null : 1}
            linearGradients={BoxA(darkTheme).linearGradient}
            polygons={BoxA(darkTheme).polygon}
          />
        </div>
        </div>
      </div>


      {/* box 3 */}
      <div className="_box _box3">
        <div>
          <Box
            viewWidth={383.3}
            viewHeight={453.69}
            animation={{ entryPoint: '0px', middlePoint: '-10px' }}
            opacityBox={darkTheme ? null : 1}
            linearGradients={BoxC(darkTheme).linearGradient}
            polygons={BoxC(darkTheme).polygon}
          />
        </div>
      </div>

      {/* box 4 */}
      <div className="_box _box4" >
        <div>
          <Box
            viewWidth={383.3}
            viewHeight={453.69}
            animation={{ entryPoint: '0px', middlePoint: '10px'}}
            opacityBox={darkTheme ? null : 0.3}
            linearGradients={BoxD(darkTheme).linearGradient}
            polygons={BoxD(darkTheme).polygon}
          />
        </div>
      </div>


      <div className="_middleSection">
        {/* box 6 */}
        <div className="_box" style={{ width: 90, height: 200, bottom: '27%', right: 395  }}>
          <div>
            <Box
              viewWidth={383.3}
              viewHeight={453.69}
              animation={{ entryPoint: '0px', middlePoint: '10px' }}
              opacityBox={darkTheme ? null : 0.3}
              linearGradients={BoxF(darkTheme).linearGradient}
              polygons={BoxF(darkTheme).polygon}
            />
          </div>
        </div>

        {/* Right */}
        {/* box 7 */}
        <div className="_box" style={{ width: 200, height: 300, bottom: '10%', right: 60 }}>
          <div className="_box7">
          {/*   <div style={{ width: 250, height: 300 }}> */}
              <div>
                <Box
                  viewWidth={383.3}
                  viewHeight={453.69}
                  animation={{ entryPoint: '0px', middlePoint: '10px' }}
                  opacityBox={darkTheme ? null : 1}
                  linearGradients={BoxG(darkTheme).linearGradient}
                  polygons={BoxG(darkTheme).polygon}
                />
              </div>
            {/* </div> */}
          </div>
        </div>

        {/* box 8 */}
        <div className="_box" style={{ width: 110, height: 170, bottom: '56%', right: 45   }}>
          <div >
          {/*   <div style={{ width: 120, height: 170 }}> */}
              <div>
                <Box
                  viewWidth={383.3}
                  viewHeight={453.69}
                  animation={{ entryPoint: '0px', middlePoint: '-10px' }}
                  opacityBox={darkTheme ? null : 0.61}
                  linearGradients={BoxH(darkTheme).linearGradient}
                  polygons={BoxH(darkTheme).polygon}
                />
              </div>
          {/*   </div> */}
          </div>
        </div>
      </div>

      <div className="_lastSection">
        {/* box 9 */}
        <div className="_box" style={{ width: 140, height: 240, bottom: '40%', right: 220 }}>
          <div>
            <Box
              viewWidth={383.3}
              viewHeight={453.69}
              animation={{ entryPoint: '0px', middlePoint: '-10px' }}
              opacityBox={darkTheme ? null : 1}
              linearGradients={BoxI(darkTheme).linearGradient}
              polygons={BoxI(darkTheme).polygon}
            />
          </div>
        </div>

        {/* box 10 */}
        <div className="_box" style={{ width: 80, height: 210, bottom: '43%', right: 395 }}>
          <div>
            <Box
              viewWidth={383.3}
              viewHeight={453.69}
              animation={{ entryPoint: '0px', middlePoint: '10px' }}
              opacityBox={darkTheme ? null : 0.3}
              linearGradients={BoxJ(darkTheme).linearGradient}
              polygons={BoxJ(darkTheme).polygon}
            />
          </div>
        </div>

        {/* box 11 */}
        <div className="_box" style={{ width: 130, height: 180, bottom: '14%', right: 330,  }}>
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
        <div className="_box _box12" style={{ width: 90, height: 300, bottom: -50, left: 400 }}>
          <div className="">
            <Box
              viewWidth={383.3}
              viewHeight={453.69}
              animation={{ entryPoint: '0px', middlePoint: '-10px' }}
              opacityBox={darkTheme ? null : 0.3}
              linearGradients={BoxL(darkTheme).linearGradient}
              polygons={BoxL(darkTheme).polygon}
            />
          </div>
        </div>

        {/* diamond */}
        {/* diamond 1 */}
        <div className="_diamond" style={{ width: 60, height: 150, bottom: '60%', right: 210 }}>
          <PaintedDiamond 
            animation={{ entryPoint: '0px', middlePoint: '10px' }}
            linearGradients={DiamondA(darkTheme).linearGradient}
            linearGradientsColor={darkTheme ? DiamondPink : DiamondPurple}
          />
        </div>

        {/* diamond 2 */}
        <div className="_diamond" style={{ width: 50, height: 140, bottom: '40%', right: 130 }}>
          <PaintedDiamond
            animation={{ entryPoint: '0px', middlePoint: '-10px' }}
            linearGradients={DiamondA(darkTheme).linearGradient}
            linearGradientsColor={DiamondTurquese}
          />
        </div>

        {/* diamond 3 */}
        <div className="_diamond" style={{ width: 50, height: 130, bottom: '28%', right: 260 }}>
          <PaintedDiamond
            animation={{ entryPoint: '0px', middlePoint: '10px' }}
            linearGradients={DiamondA(darkTheme).linearGradient}
            linearGradientsColor={darkTheme ? DiamondYellow : DiamondPink}
          />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ theme }) => ({ theme });

export default connect(mapStateToProps)(Background);
