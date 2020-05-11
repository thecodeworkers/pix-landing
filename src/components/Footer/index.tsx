import React, { useState } from 'react';
import { SEO } from '../';
import { useTranslation } from 'react-i18next';
import { withTrans } from '../../i18n/withTrans';
import './style.scss';

const Footer = (props) => {

  return (
    <div className='_main'>
      <div className='container'>
        <div className='row'>

          <div className='col-md-7'>
            <div className='_links'>
              <p>About us</p>
              <p>Products</p>
              <p>Benefits</p>
            </div>

          </div>

          <div className='col-md-5 '>
            {/* <p>asdasdasdasdas</p> */}

          </div>
        </div>
    
      </div>
    </div>
  )
}

export default withTrans(Footer)
