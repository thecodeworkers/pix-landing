import React, { useEffect, useRef } from 'react';
import { PixPhone, DiamondUsd, DiamondBtc, DiamondTurquese, DiamondBlack, Cube, PixelLogo } from '../Svg';
import './style.scss';
import { saveReference } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTrans } from '../../i18n/withTrans';

const Phone = ({ scroll, action, about, product, t }) => {


  const { saveReference } = action;
  const aboutRef = useRef();
  const productRef = useRef();

  /* useEffect(() => {
    if (product) saveReference({ productRef });
    if (about) saveReference({ aboutRef });
  }, [scroll.productRef]);
 */

  return (
    <div>
      <div className='_phoneBox' >
        <div className='_tiny'>
          <div style={{ width: '60px' }}>
            <Cube />
          </div>
        </div>
        <div className='_little'>
          <div style={{ width: '90px' }}>
            <Cube />
          </div>
        </div>
        <div className='_medium'>
          <div style={{ width: '120px' }}>
            <Cube />
          </div>
        </div>
        <div className='_big'>
          <div style={{ width: '180px' }}>
          <Cube />
          </div>
        </div>
        <div className='_turquesetinyDiamond'>
          <div style={{ width: '40px' }}>
            <DiamondTurquese />
          </div>
        </div>
        <div className='_usdDiamond'>
          <div style={{ width: '100px' }}>
            <DiamondUsd />
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
            <DiamondBtc />
          </div>
        </div>
        <div className='_phoneDimension'>
          <PixPhone />
        </div>
      </div>
      <div className={'_pixelLogoBox'}>
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

