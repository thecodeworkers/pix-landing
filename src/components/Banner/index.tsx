import React from 'react';
import { connect } from 'react-redux';
import { Background } from './components';
import { CardCurrency, ScrollDown, Lang } from '../../components';
import { DownloadAndroid, DownloadIos } from '../Svg';
import './styles.scss';

export const Banner = ({ scroll }) => {
  const { aboutRef } = scroll;
  
  return (
    <div>
      <div className="_bannerContainer">
        <div className="_bannerDesc">
          <div className="_bannerTexts">
            <div className="_childrenText">App and Desktop wallet with the world's fast, safe and intuitive service on cryptocurrency</div>
            <div className="_childrenTitle">Today's Index Value</div>
          </div>
          <div className="_bannerCards">
            <CardCurrency/>
          </div>
          <div className="_bannerButton">
            <p className="_buttonText">Send, receive & exchange cryptocurrency</p>
            <button className="_buttonGradient">DOWNLOAD</button>
          </div>
        </div>
      </div>

      <div className="_bannerFooter">
        <div className="_footerElements">
          <div className="_footerNetwork">
            <div className="_iosInfo">
              <DownloadIos/>
            </div>
            <div className="_androidInfo">
              <DownloadAndroid/>
            </div>
          </div>
          <div className="_footerScroll">
            <div className="_scrollDimension">
              <ScrollDown color="#45B649" reference={aboutRef}/>
            </div>
          </div>
          <div className="_footerLang">
            <Lang/>
          </div>
        </div>
      </div>
      <Background/>
    </div>
  );
}

const mapStateToProps = ({ scroll }) => ({ scroll });

export default connect(mapStateToProps)(Banner);
