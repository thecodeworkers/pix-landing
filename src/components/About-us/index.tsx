import React, { useRef, useEffect, createRef } from 'react';
import './style.scss';
import { Square } from '../Svg';
import { ScrollDown } from '../../components';
import { saveReference } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTrans } from '../../i18n/withTrans'
 
const AboutUs = ({ reference, theme, action, scroll, t, i18n}) => {

  // const { saveReference } = action;
  const { productRef } = scroll;

  // // const aboutRef: any = useRef();

  // useEffect(() => {
  //   // saveReference({ aboutRef });
  // }, []);

  return (
    <div  className={theme ? '_aboutUsParent' : '_anotherclass'}>
      <div className={theme ? '_titles' : '_titlesDark'}>
        <div className='_titles-child'>
          <div className='_aboutBox'>
          <div className='_aboutContainer'>
          <p className='_aboutText'>100%</p>
            <p className='_aboutText'>{t('fast')}</p>
            <p className='_aboutTextDescription'>{t('fast_description')}</p>
          
            </div>
          </div>

          <div className='_aboutBox'>
            <div className='_aboutContainer'>
            <p className='_aboutText'>100%</p>
            <p className='_aboutText'>{t('safe')}</p>
            <p className='_aboutTextDescription'>{t('safe_description')}</p>
            </div>
          </div>

          <div className='_aboutBox'>
          <div className='_aboutContainer'>
          <p className='_aboutText'>100%</p>
            <p className='_aboutText'>Digital</p>
            <p className='_aboutTextDescription'>{t('digital_description')}</p>
           
          </div>
          </div>
        </div>
      </div>

     {/*  <div className='_divBlock'>
        <div className={theme ? '_textContent' : '_textContentDark'}>
          <Square />
          <h5>{t('we_believe')}</h5>
          <div className='_halfContent'>
            <p className='_pixTitle'>PIX Wallet</p>

            <p className={theme ? '_paragraph' : '_paragraphDark'}>
            {t('digital_wallets')}
              </p>

            <p className={theme ? '_paragraph' : '_paragraphDark'}>
            {t('hosted_wallets')}
              </p>
          </div>

        </div>
      </div> */}

      <div className='_parentScroll'>
        <ScrollDown color='#FF8008' reference={productRef}/>
      </div>

    </div>
  )
}

const mapStateToProps = ({ scroll }) => ({ scroll });

const mapDispatchToProps = dispatch => {
  const actions = {
    saveReference
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTrans(AboutUs));
