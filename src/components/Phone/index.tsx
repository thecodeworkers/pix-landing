import React, { useEffect, useRef } from 'react';
import { PixPhone, DiamondUsdPhone, DiamondBtcPhone, DiamondTurquese, DiamondBlack, CubePhone, PixelLogo } from '../Svg';
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
      <div className='_phoneBox' >
        <div className='_tiny'>
          <div style={{ width: '60px' }}>
            <CubePhone />
          </div>
        </div>
        <div className='_little'>
          <div style={{ width: '90px' }}>
            <CubePhone />
          </div>
        </div>
        <div className='_medium'>
          <div style={{ width: '120px' }}>
            <CubePhone />
          </div>
        </div>
        <div className='_big'>
          <div style={{ width: '180px' }}>
          <CubePhone />
          </div>
        </div>
        <div className='_turquesetinyDiamond'>
          <div style={{ width: '40px' }}>
            <DiamondTurquese />
          </div>
        </div>
        <div className='_usdDiamond'>
          <div style={{ width: '100px' }}>
            <DiamondUsdPhone />
          </div>
        </div>
        <div className='_turqueseDiamond'>
          <div style={{ width: '60px' }}>
            <DiamondTurquese />
          </div>
        </div>
        <div className='_blackDiamond'>
          <div style={{ width: '80px' }}>
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

