import React from 'react';
import { connect } from 'react-redux';
import { Background } from './components';
import { CardCurrency, ScrollDown, Lang } from '../../components';
import { DownloadAndroid, DownloadIos } from '../Svg';
import { withTrans } from '../../i18n/withTrans';
import './styles.scss';

export const Banner = ({ scroll, t }) => {
  const { aboutRef } = scroll;
  
  return (
    <div>
      <div className="_bannerContainer">
        <div className="_bannerDesc">
          <div className="_bannerTexts">
            <p className="_childrenText">{t('app_desktop')}</p>
            <p className="_childrenTitle">{t('today_index')}</p>
          </div>
          <div className="_bannerCards">
            <CardCurrency/>
          </div>
          <div className="_bannerButton">
            <p className="_buttonText">{t('crypto_transactions')}</p>
            <button className="_buttonGradient">{t('download')}</button>
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


          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="383.3" y="453.7"
    viewBox="0 0 383.3 453.7" width="383.3" height="453.7">
    <g>

      <linearGradient id="SVGCUBE_1_" gradientUnits="userSpaceOnUse" x1="192.1" y1="620.3" x2="358.6" y2="620.3" gradientTransform="matrix(1 0 0 1 0 -336)">
        <stop offset="0" style={{ stopColor: '#e2e3e4' }} />
        <stop offset="1" style={{ stopColor: '#fff' }} />
      </linearGradient>

      <linearGradient id="SVGCUBE_2_" x1="190.87" y1="284.33" x2="357.85" y2="284.33" gradientUnits="userSpaceOnUse"> 
      <stop offset="0" style={{ stopColor: '#000000' }} />
      </linearGradient>

      <polygon className="cubedark0" fill="url('#SVGCUBE_1_') url('#SVGCUBE_2_')" points="192.1,257.8 192.7,425.8 358.6,307.7 358.6,142.8 	" /> 

      <linearGradient id="SVGCUBE_3_" gradientUnits="userSpaceOnUse" x1="26.7" y1="620.6" x2="192.7" y2="620.6" gradientTransform="matrix(1 0 0 1 0 -336)">
        <stop offset="0" style={{ stopColor: '#fff' }} />
        <stop offset="1" style={{ stopColor: '#d5d7d8' }} />
      </linearGradient>


      <linearGradient id="SVGCUBE_4_" x1="191.65" y1="258.11" x2="191.65" y2="27.55" gradientUnits="userSpaceOnUse"></linearGradient>
     <polygon className="cubedark1" fill="url(#SVGCUBE_3_)" points="26.7,143.4 29.3,305.3 192.7,425.8 192.1,257.8 	" /> 


      <linearGradient id="SVGCUBE_5_" gradientUnits="userSpaceOnUse" x1="26.7" y1="478.85" x2="358.6" y2="478.85" gradientTransform="matrix(1 0 0 1 0 -336)">
        <stop offset="4.922280e-02" style={{ stopColor: '#e6e6e6' }} />
        <stop offset="1" style={{ stopColor: '#d5d7d8' }} />
      </linearGradient>


      <linearGradient id="SVGCUBE_6_" x1="25.44" y1="284.59" x2="191.9" y2="284.59" gradientUnits="userSpaceOnUse"></linearGradient>
      <polygon className="cubedark2" fill="url(#SVGCUBE_5_)" points="192.1,27.9 26.7,143.4 192.1,257.8 358.6,142.8 	" /> 



    </g>
  </svg>
            {/* <Lang/> */}
          </div>
        </div>
      </div>
      <Background/>
    </div>
  );
}

const mapStateToProps = ({ scroll }) => ({ scroll });

export default connect(mapStateToProps)(withTrans(Banner));
