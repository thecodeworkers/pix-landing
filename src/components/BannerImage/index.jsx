import React from 'react';
import Separator from '../Separator';
import { Square } from '../Svg';
import './styles.scss';

export default ({ children = null, isDark = false }) => (
  <div className={isDark ? '_imageBackgroundDark' : '_imageBackgroundLight'}>
    <div className="_imageContainer">
      <p style={{ color: isDark ? '#FFF' : '#304352' }} className="_imageContainerText">{children}</p>
      <div>
        <Separator/>
      </div>
      <div style={{ marginTop: 25 }}>
        <Square/>
      </div>
    </div>
  </div>
);
