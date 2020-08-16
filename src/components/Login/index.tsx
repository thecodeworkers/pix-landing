import React, { useEffect, useRef } from 'react';
import Separator from '../Separator';
import { PixLogo } from '../Svg';
import './style.scss';
import { saveReference } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Login = ({ children = null, childrenTitle = null, scroll, action, about, product }) => {

  const { saveReference } = action;
  const aboutRef = useRef();
  const productRef = useRef();

  /* useEffect(() => {
    if (product) saveReference({ productRef });
    if (about) saveReference({ aboutRef });
  }, [scroll.productRef]);
 */

  return (

    <div className='_imageBackgroundLight'>
      <div className="_imageContainer">
        <h4 className='_blackHeader'>{childrenTitle}</h4>

        <div style={{ width: '120%', marginTop: 10, marginBottom: 10 }}>
          <Separator />
        </div>
        <p className='_blackTxt'>{children}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);

