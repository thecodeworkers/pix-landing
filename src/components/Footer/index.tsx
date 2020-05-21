import React, { useState } from 'react';
import { SEO } from '../';
import { useTranslation } from 'react-i18next';
import { withTrans } from '../../i18n/withTrans';
import { Twitter, Instagram, Facebook, Apple, Android, PixLogo } from '../Svg';
import './style.scss';

const Footer = (props) => {

  const {t,i18n} = props

  return (
    <div className='_main'>
      <div className='container'>
        <div className='row'>

          <div className='col-md-7 '>

            <div className='_leftSide'>
              <div className='_links'>
                <p>{t('about_us')}</p>
                <p>{t('products')}</p>
                <p>{t('benefits')}</p>
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
            <input placeholder='e-mail' className='_newsletter'></input>
            <div className='_divIcon'>
              <span className="material-icons _arrow">arrow_forward</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default withTrans(Footer)
