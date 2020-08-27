import React, { useRef, useEffect, createRef } from 'react';
import './style.scss';
import { DiamondBtc, DiamondDash, DiamondUsdt, DiamondUsd } from '../Svg';
import { ScrollDown } from '../../components';
import { saveReference } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTrans } from '../../i18n/withTrans'

const AboutUs = ({ reference, theme, action, scroll, t, i18n }) => {

  const { saveReference } = action;
  const benefitsRef: any = useRef();

  useEffect(() => {
    saveReference({ benefitsRef });  
  }, []);

  return (
    // theme
    <div className={false ? '_aboutUsParent' : '_anotherclass'} ref={benefitsRef}>
      <div className={false ? '_titles' : '_titlesDark'}>
        <div className='_titles-child'>

          <div className='_floatingCoin'>
            <DiamondBtc />
          </div>
          <div className='_aboutFather'>
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
          <div className='_floatingCoin'>
            <DiamondUsd />
          </div>
        </div>

      </div>
      <div className='_floatingCoinTwo'>
        <DiamondUsdt />
        <DiamondDash />

      </div>
 {/*      <div className='_parentScroll'>
        <ScrollDown color='#00021C' reference={aboutRef} />
      </div> */}

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
