import React, { useEffect, useRef } from 'react';
import Separator from '../Separator';
import { DiamondUsdc, DiamondEth, DarkCheckBox, OrangePixBanner } from '../Svg';
import './styles.scss';
import { saveReference } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const BannerImage = ({ children = null, childrenTitle = null, isDark = false, scroll, action, about, product }) => {

  const { saveReference } = action;
  const aboutRef = useRef();

  useEffect(() => {
    saveReference({ aboutRef });
  }, []);

  return (

    // isDark
    <div ref={aboutRef} className={true ? '_imageBackgroundDarkBanner' : '_imageBackgroundLight'}>
      <div className="_imageContainer">

        <div className='_headerAbotUs'>
          <h4 className='_pixOtcTitle'> PIX OTC </h4>

          <div className='_separatorBanner'>

            <Separator height={6} />
          </div >

          <div className='_newParentText'>
            <p className={'_imageContainerText _whiteTxt'}>{children}</p>
          </div>

          <div className={'_orange'}>
            <OrangePixBanner />
          </div>

        </div>

        <div className='_superParentCoins'>
          <div className={'_coins'}>
            <div className={'_coin'}>
              <DiamondUsdc />
            </div>
            <div className={'_darkCheck'}>
              <DarkCheckBox />
            </div>
            <div className={'_coin'}>
              <DiamondEth />
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BannerImage);

