import React from 'react';
import './style.scss';
import { Square } from '../Svg';
import { ScrollDown } from '../../components';
const AboutUs = () => {
  return (
    <div className='_aboutUsParent'>
      <div className='_titles'>
        <div className='_titles-child'>
          <div>
            <p className='_aboutText'>Fast</p>
            <div style={{ position: 'relative' }}>
              <p className='_number'>01</p>
            </div>
          </div>

          <div>
            <p className='_aboutText'>Intuitive</p>
            <div style={{ position: 'relative' }}>
              <p className='_number'>02</p>
            </div>
          </div>

          <div>
            <p className='_aboutText'>Safe</p>
            <div style={{ position: 'relative' }}>
              <p className='_number'>03</p>
            </div>
          </div>
        </div>
      </div>

      <div className='_divBlock'>
        <div className='_textContent'>
          <Square />
          <h5>We believe inclusion is fuel for the economy</h5>
          <div className='_halfContent'>
            <p className='_pixTitle'>PIX Wallet</p>

            <p className='_paragraph'>
              Digital Wallets that allow users to store and transfer USD within PIX users.
              </p>

            <p className='_paragraph'>
              Hosted Wallets with the highest custody standards that allow users to store, manage and transfer Virtual Assets.
              </p>
          </div>

        </div>
      </div>

      <div className='_parentScroll'>
        <ScrollDown scrollTo={null} landing='target_div' color='#FF8008' />
      </div>

    </div>
  )
}

export default AboutUs;