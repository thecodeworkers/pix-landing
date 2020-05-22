import React from 'react';
import Separator from '../Separator';
import { Square } from '../Svg';
import './styles.scss';

export default ({ children = null, isDark = false }) => (
  <div className={isDark ? '_imageBackgroundDark' : '_imageBackgroundLight'}>
    <div className="_imageContainer">
      <p className={ `_imageContainerText  ${isDark ? '_whiteTxt' : '_blackTxt'}` }>{children}</p>
      <div style={{width:'50%', marginTop: 10, marginBottom:10}}>
        <Separator/>
      </div>
      <div style={{ marginTop: 25 }}>
        <Square/>
      </div>
    </div>
  </div>
);
