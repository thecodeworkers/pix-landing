import React, { useState } from 'react';
import { SEO } from '../';
import { useTranslation } from 'react-i18next';
import { withTrans } from '../../i18n/withTrans';
import { Twitter, Instagram, Facebook, Apple, Android, PixLogo } from '../Svg';
import './style.scss';

const Footer = (props) => {

  return (
    <div className='_main'>
      <div className='container'>
        <div className='row'>

          <div className='col-md-7 '>

            <div className='_leftSide'>
              <div className='_links'>
                <p>About us</p>
                <p>Products</p>
                <p>Benefits</p>
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

                <p>Copyright © 2020. Copyright The Pic LLC. All rights reserved.</p>
              </div>
            </div>

          </div>

          <div className='col-md-5 _rightSide'>
            <p className='_suscribe'>Subscribe to PIX</p>
            <p className='_emailText'> Enter your email address to be added to our mailing list for future updates.</p>
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
