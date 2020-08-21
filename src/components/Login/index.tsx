import React, { useEffect, useRef } from 'react';
import { PixLogo } from '../Svg';
import { CardCurrency, ScrollDown, Lang, Separator} from '../../components';
import {BackgroundLogin} from './components'
import './style.scss';
import { saveReference } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTrans } from '../../i18n/withTrans';
import { from } from 'core-js/fn/array';

const Login = ({childrenTitle = null, scroll, action, about, product, t }) => {
  console.log(scroll);
  console.log(product);
  const { saveReference } = action;
  const productRef = useRef();

  /* useEffect(() => {
    if (product) saveReference({ productRef });
    if (about) saveReference({ aboutRef });
  }, [scroll.productRef]);
 */

 const benefits = {
   fast: 'fast',
   easy:'easy',
   secure:'secure',
   intuitive: 'intuitiva'
 }

  return (

    <div className='_imageLoginLight'>
      <div className="_loginContainer">
        <div className='_logoSmall'>
          <PixLogo color='#00021C' />
        </div>
        <div className='_headerContainer'>
        <h4 className='_blackHeader'>{childrenTitle} Rapida</h4>
        </div>
        <div style={{ width: '120%', marginTop: 10, marginBottom: 10, zIndex: 1 }}>
          <Separator height={10} />
        </div>
        <div style={{  marginTop: 60, }}>
        <button className='_loginBtnBlack'>{t('login').toUpperCase()}</button>
        <button className='_registerBtnBlue'>{t('register').toUpperCase()}</button>
       
        </div>
        <div className="_footerScroll">
            <div className="_scrollDimension">
              <ScrollDown color="#fff" reference={productRef}/>
            </div>
          </div>
        <div className="_footerLang">
            <Lang/>
        </div>
      </div>
     <BackgroundLogin />
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

export default connect(mapStateToProps, mapDispatchToProps)(withTrans(Login));

