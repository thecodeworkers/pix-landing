import React, { useEffect, useRef } from 'react';
import { PixLogo } from '../Svg';
import { CardCurrency, ScrollDown, Lang, Separator} from '../../components';
import {BackgroundLogin} from './components'
import './style.scss';
 import gsapStart from './gsap'
import { saveReference } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTrans } from '../../i18n/withTrans';

const Login = ({childrenTitle = null, scroll, action, about, product, phone, t }) => {

  console.log(scroll);
  
 
  const { saveReference } = action;
  const phoneRef = useRef();

  gsapStart();
  
/*    useEffect(() => {
    if (product) saveReference({ productRef });
     if (about) saveReference({ aboutRef });
  }, [scroll.productRef]);
  console.log(product , 'PRODUCT');

 */

 const benefits = {
   fast: 'fast',
   easy:'easy',
   secure:'secure',
   intuitive: 'intuitiva'
 }

  return (

    <div className='_imageLoginLight'>
    
        <div className='_logoSmall'>
          <PixLogo color='#00021C' />
        </div>
        <div style={{zIndex: 1}}>
        <h4 className='_blackHeader'>{childrenTitle} Rapida</h4>
        </div>
        <div className='_separatorLogin'>
          <Separator height={10} />
        </div>
        <div className='_buttonContainerLogin'>
        <button className='_loginBtnBlack'>{t('login').toUpperCase()}</button>
        <button className='_registerBtnBlue'>{t('register').toUpperCase()}</button>
       
        </div>
        
        <div className="_footerScrollLogin">
            <div className="_scrollDimensionLogin">
              <ScrollDown color="#fff" reference={scroll.phoneRef}/>
            </div>
          </div>

        <div className="_footerLangLogin">
            <Lang/>
        </div>
       
       

      <div className='_cubito'>
        <BackgroundLogin />
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

export default connect(mapStateToProps, mapDispatchToProps)(withTrans(Login));

