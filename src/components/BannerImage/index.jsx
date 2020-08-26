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
  
  gsapStartOne();

  useEffect(() => {
    saveReference({ aboutRef });
  }, []);
 
  return (

    <div ref={aboutRef} className={ !isDark ? '_imageBackgroundDarkBanner' : '_imageBackgroundLight'}>
      <div className="_imageContainer">
        <h4 className='_whiteHeader'>{childrenTitle}</h4>

        <div className='_separatorBanner'>
        <Separator height={10} />
        </div>
        <p className={'_imageContainerText _whiteTxt'}>{children}</p>

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

