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
            <Lang/>
          </div>
        </div>
      </div>
      <Background/>
    </div>
  );
}

const mapStateToProps = ({ scroll }) => ({ scroll });

export default connect(mapStateToProps)(withTrans(Banner));
