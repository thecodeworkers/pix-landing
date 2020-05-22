import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleDarkTheme } from '../../store/actions';
import { Background } from './components';
import { CardCurrency, ScrollDown, Lang } from '../../components';
import { PixelLogo } from '../Svg';
import './styles.scss';
import { withTrans } from '../../i18n/withTrans'

export const Banner = ({ theme, scroll, t, i18n }) => {
  const { darkTheme } = theme;
  const { aboutRef } = scroll;

  console.log(scroll);
  

  return (
    <div style={{ backgroundColor: darkTheme ? '#00001F' : '#fff' }}>
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
          <div style={{ backgroundColor: 'blue', width: '22.5%' }}>
          {t('network')}
          </div>
          <div className="_footerScroll">
            {/* <div className="_scrollDimension">
              <PixelLogo color="#45B649"/>
            </div> */}
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

const mapStateToProps = ({ theme, scroll }) => ({ theme, scroll });

const mapDispatchToProps = dispatch => {
  const actions = {
    toggleDarkTheme
  };

  return {
    action: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTrans(Banner));
