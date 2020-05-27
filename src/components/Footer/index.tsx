import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { withTrans } from '../../i18n/withTrans';
import { Twitter, Instagram, Facebook, Apple, Android, PixLogo } from '../Svg';
import { scrolling } from '../../utils/common';
import { postNewsletter } from '../../store/actions';
import { Tooltip } from 'reactstrap';
import './style.scss';

const Footer = ({ t, i18n, scroll, newsletter, action }) => {

  const [email, setEmail] = useState('');
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const { loading, result } = newsletter;

  const toggle = () => setTooltipOpen(!tooltipOpen);

  useEffect(() => {
    if(result == 'success') setEmail('');
    if(result == 'error') setTooltipOpen(true);

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


  return (
    <div className='_main'>
      <div className='container'>
        <div className='row'>

          <div className='col-md-7 '>

            <div className='_leftSide'>
              <div className='_links'>
                <p onClick={() => scrolling(scroll.aboutRef)}>{t('about_us')}</p>
                <p onClick={() => scrolling(scroll.productRef)}>{t('products')}</p>
                <p onClick={() => scrolling(scroll.benefitsRef)}>{t('benefits')}</p>
              </div>

              <div className='_icons'>
                <Twitter />
                <Instagram />
                <Facebook />
                <Apple />
                <Android />
              </div>

              <div className='_content'>
                <div className='_divLogo'>
                  <PixLogo />
                </div>
                <div className='_separator'>
                </div>

                <p>{t('copyright')}</p>
              </div>
            </div>

          </div>

          <div className='col-md-5 _rightSide'>
            <p className='_suscribe'>{t('subscribe')}</p>
            <p className='_emailText'>{t('enter_email')}</p>
            <input placeholder='e-mail' value={email} className='_newsletter' onChange={event => emailValidation(event.target.value)}></input>
            <div className='_divIcon'>
              {
                loading ? (
                  <div className="_arrow">
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                  </div>
                ) : result == 'success' ? (
                  <span className="material-icons _arrow">done</span>
                ) : result == 'error' ? (
                  <>
                    <span className="material-icons _arrow" id="TooltipExample">close</span>
                    <Tooltip placement="left" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
                      {t('error_occurred')}
                    </Tooltip>
                  </>
                ) : (
                  <span onClick={() => action.postNewsletter(email)}className={`material-icons ${isValid && email.length ? '_arrow' : '_arrowEnabled'}`} id='hey'>arrow_forward</span>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ newsletter, scroll }) => ({ newsletter, scroll });

const mapDispatchToProps = dispatch => {
  const actions = { postNewsletter };

  return {
    action: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTrans(Footer));
