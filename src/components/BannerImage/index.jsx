import React, { useEffect, useRef } from 'react';
import Separator from '../Separator';
import { DiamondUsdc, DiamondEth, DarkCheckBox, OrangePix } from '../Svg';
import './styles.scss';
import gsapStartOne from './gsap'
import { saveReference } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const BannerImage = ({ children = null, childrenTitle = null, isDark = false, scroll, action, about, product }) => {

  const { saveReference } = action;
  const aboutRef = useRef();
  const productRef = useRef();
  
  gsapStartOne();

  useEffect(() => {
    if (product) saveReference({ productRef });
    if (about) saveReference({ aboutRef });
  }, [scroll.productRef]);
 

  return (

    <div ref={about ? aboutRef : productRef} className={'_imageBackgroundDarkBanner'}>
      <div className="_imageContainer">
        <h4 className='_whiteHeader'>{childrenTitle}</h4>

        <div className='_liine'>
        <Separator height={10} />
        </div>
        <p className={`_imageContainerText  ${isDark ? '_whiteTxt' : '_blackTxt'}`}>{children}</p>

          <div  className={'_orange'}>
          <OrangePix />
        </div>

        <div  className={'_coins'}>
        <div  className={'_coin'}>
          <DiamondUsdc />
        </div>
        <div  className={'_darkCheck'}>
          <DarkCheckBox />
        </div>
        <div  className={'_coin'}>
          <DiamondEth />
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

