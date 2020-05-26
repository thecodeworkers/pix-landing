import React, { useEffect, useRef } from 'react';
import Separator from '../Separator';
import { Square } from '../Svg';
import './styles.scss';
import { saveReference } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const BannerImage = ({ children = null, isDark = false, scroll, action, about, product }) => {

  const { saveReference } = action;
  const aboutRef = useRef();
  const productRef = useRef();

  useEffect(() => {
    if(product) saveReference({ productRef });
    if(about) saveReference({ aboutRef });
  }, [scroll.productRef]);

  return (
      <div ref={about ? aboutRef : productRef} className={isDark ? '_imageBackgroundDark' : '_imageBackgroundLight'}>
      <div className="_imageContainer">
        <p className={`_imageContainerText  ${isDark ? '_whiteTxt' : '_blackTxt'}`}>{children}</p>
        <div style={{ width: '50%', marginTop: 10, marginBottom: 10 }}>
          <Separator />
        </div>
        <div style={{ marginTop: 25 }}>
          <Square />
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

