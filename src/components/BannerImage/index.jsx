import React from 'react';
import styled from 'styled-components';
import bannerLight from '../../images/banner-light.svg';
import Separator from '../Separator';
import { Square } from '../Svg';
import './styles.scss';

const Background = styled.div`
  height: 100vh;
  background-image: url(${bannerLight});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
`;

export default ({ children = null, theme = 'light' }) => (
  <Background>
    <div className="_imageContainer">
      <p style={{ color: theme == 'light' ? '#304352' : '#FFF' }} className="_imageContainerText">{children}</p>
      <div>
        <Separator/>
      </div>
      <div style={{ marginTop: 25 }}>
        <Square/>
      </div>
    </div>
  </Background>
);
