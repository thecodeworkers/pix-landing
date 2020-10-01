import React, { useEffect, useRef } from 'react';
import { PixPhone, DiamondUsdPhone, DiamondBtcPhone, DiamondTurquese, DiamondBlack, CubePhone, PixelLogo, DownloadAndroid, DownloadIos } from '../Svg';
import './style.scss';
import { saveReference } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { scrolling } from '../../utils/common';
import { withTrans } from '../../i18n/withTrans';
import Login from '../Login';

const Phone = ({ scroll, action, about, phone, t }) => {

  const { saveReference } = action;

  const scrollToLogin = () => {
    scrolling(scroll.loginRef);
  }

  return (
    <div>

  
    <div className={'_storeFather'} >
      <div className={'_storeNewContainer'}>
          <p className="_phoneText" style={{ marginTop: 40, marginBottom: 40, }}>{t('be_part')}</p>
          <div className="_footerNetwork">
            <div className="_iosInfo">
              <a className='_link' target='_blank' href="https://www.apple.com/la/ios/app-store/">
                <DownloadIos />
              </a>
            </div>
            <div className="_androidInfo">
              <a className='_link' target='_blank' href="https://play.google.com/store?hl=es_VE">
                <DownloadAndroid />
              </a>
            </div>
          </div>
        </div>

      <div className='_phoneBox' >

        

        <div className='_tiny'>
          <div className='_tinyDimensions'>
            <CubePhone />
          </div>
        </div>
        <div className='_little'>
          <div className='_littleDimensions'>
            <CubePhone />
          </div>
        </div>
        <div className='_medium'>
          <div className='_mediumDimensions'>
            <CubePhone />
          </div>
        </div>
        <div className='_big'>
          <div className='_bigDimensions'>
            <CubePhone />
          </div>
        </div>
        <div className='_turquesetinyDiamond'>
          <div className='_turquesetinyDiamondDimensions'>
            <DiamondTurquese />
          </div>
        </div>
        <div className='_usdDiamond'>
          <div className='_usdDiamondDimensions'>
            <DiamondUsdPhone />
          </div>
        </div>
        <div className='_turqueseDiamond'>
          <div className='_turqueseDimensions'>
            <DiamondTurquese />
          </div>
        </div>
        <div className='_blackDiamond'>
          <div className='_blackDimensions'>
            <DiamondBlack />
          </div>
        </div>
        <div className='_btcDiamond'>
          <div >
            <DiamondBtcPhone />
          </div>
        </div>
        <div className='_phoneDimension'>
          <PixPhone />
        </div>
      </div>
    
    </div>
    <div className='_pixelLogoBox' onClick={() => scrollToLogin()}>
        <PixelLogo color={'#57D6AF'} />
      </div>
    </div>
  )

};

const mapStateToProps = ({ scroll }) => ({ scroll });

const mapDispatchToProps = dispatch => {
  const actions = {
    saveReference
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTrans(Phone));

