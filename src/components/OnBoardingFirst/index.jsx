import React, { useState, useEffect } from 'react';
import { DashCard, EthCard, UsdCard, BtcCard, MacBookTheme } from '../Svg';
import { TimelineMax } from 'gsap/all';
import { saveStep,postNewsletter } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTrans } from '../../i18n/withTrans'
import { Tooltip } from 'reactstrap';

import './styles.scss';

const OnBoardingFirst = (props) => {

  const { action, reference, referenceParent, newsletter, t, loaderResult} = props;
  const { loading, result } = newsletter;

  // const { loader } = loader;

  const timeLine = new TimelineMax({ paused: true });

  const [email, setEmail] = useState('');
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [check, setCheck] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  const changeTheme = () => setCheck(!check);

  useEffect(() => {
    if(result === 'success') setEmail('');
    if(result === 'error') setTooltipOpen(true);

    return () => {
      setEmail('');
      setTooltipOpen(false);
    }
  }, [result]);

  const emailValidation = (value) => {
    setEmail(value);
    const regex = new RegExp(/.+@.+\.[A-Za-z]+$/);
    const valid = regex.test(email);
    valid ? setIsValid(true) : setIsValid(false);
  };

  useEffect(() => {

    if(loaderResult.loader) {
      timeLine
      .play()
      .to('._parentSendSectionBodyLeft', 0.6, { x: 0, opacity: 1 }, 0.3)
      .to('._parentSendSectionBodyRight', 0.6, { x: 0, opacity: 1 }, 0.3)
      .to('._sendRightTitle', 0.6, { opacity: 1, y: 0 }, 0.4)
      .to('._exchangeInstantly', 0.6, { opacity: 1, y: 0 }, 0.6)
      .to('._emailNewsletterSend', 0.6, { opacity: 1, y: 0 }, 0.8)
      .to('._macBookChangeTheme', 0.6, { opacity: 1, x: 0 }, 0.4)
      .to('._currencyCardsRow', 0.6, { opacity: 1, y: 0 }, 0.6)
      .to('._switchThemeParent', 0.6, { opacity: 1, x: 0 }, 0.6)
    }
 
  }, [loaderResult.loader])

  const handleWheel = (target, parent) => {
    parent.current.scrollTo({ left: target.current.offsetLeft, behavior: 'smooth' });
    action.saveStep({ stepOne: true })
  }

  return (
    <div className='_parentSendSection'>

      <div className='_responsiveArrow' onClick={() => handleWheel(reference, referenceParent)}>
        <span className='material-icons' >arrow_forward</span>
      </div>  
      <div className='_parentSendSectionBodyLeft'>
        <div className='_sonofson'>
          <div className='_sendContentChild'>
            <h4 className='_sendRightTitle'>{t('available_on')}</h4>
            <div className='_exchangeInstantly'>
              <p>{t('crypto_transactions1')}</p>
              <p>{t('crypto_transactions2')}</p>
              <p>{t('crypto_transactions3')}</p>
            </div>

            <div className='_emailNewsletterSend'> 
              <p>{t('enter_email_app')}</p>
            
              <div className='_divIcon'>
              <input type='text' placeholder='email' className='_inputNewsletterSend' onChange={event => emailValidation(event.target.value)}></input>
              {
                loading ? (
                  <div className="_newsletterArrow">
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                  </div>
                ) : result === 'success' ? (
                  <span className="material-icons _newsletterArrow">done</span>
                ) : result === 'error' ? (
                  <>
                    <span className="material-icons _newsletterArrow" id="TooltipExample">close</span>
                    <Tooltip placement="left" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
                      {t('error_occurred')}
                    </Tooltip>
                  </>
                ) : (
                  <span onClick={() => action.postNewsletter(email)}className={`material-icons ${isValid && email.length ? '_newsletterArrow' : '_arrowDisabled'}`} id='hey'>arrow_forward</span>
                )
              }
            </div>
            </div>
          </div>

        </div>
      </div>
      <div className='_parentSendSectionBodyRight'>

        <div className='_sonofson'>
          <div className='_sendRightSideItems'>

            <div className='_switchThemeParent'>
              <span className='_OnOffToggle'> On / Off</span>
              <label className="_switch">
                <input type="checkbox" className='_changeThemeCheckbox' checked={check} onChange={() => changeTheme()} />
                <span className="_slider _round"></span>
              </label>

            </div>
            <div className='_macBookChangeTheme'>
              <MacBookTheme />
              <div className={check ? '_darkThemeLaptop' : '_lightThemeLaptop'}>
              </div>
            </div>

            <div className='_currencyCardsRow'>
              <div className='_cardBtcRounded' >
                <BtcCard />
              </div>

              <div className='_cardEthRounded' >
                <EthCard />
              </div>

              <div className='_cardDashRounded' >
                <DashCard />
              </div>

              <div className='_cardUsdRounded' >
                <UsdCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ onboarding, newsletter, loaderResult }) => ({ onboarding, newsletter, loaderResult});

const mapDispatchToProps = dispatch => {
  const actions = {
    saveStep,
    postNewsletter
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTrans(OnBoardingFirst));


