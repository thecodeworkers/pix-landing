import React, { useRef, useEffect, createRef } from 'react';
import './style.scss';
import { Square } from '../Svg';
import { ScrollDown } from '../../components';
import { saveReference } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
 
const AboutUs = ({ reference, theme, action, scroll }) => {
  const { saveReference } = action;
  const { productRef } = scroll;

  const aboutRef: any = useRef();

  useEffect(() => {
    saveReference({ aboutRef });
  }, []);

  return (
    <div ref={aboutRef} className={theme ? '_aboutUsParent' : '_anotherclass'}>
      <div className={theme ? '_titles' : '_titlesDark'}>
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
        <div className={theme ? '_textContent' : '_textContentDark'}>
          <Square />
          <h5>We believe inclusion is fuel for the economy</h5>
          <div className='_halfContent'>
            <p className='_pixTitle'>PIX Wallet</p>

            <p className={theme ? '_paragraph' : '_paragraphDark'}>
              Digital Wallets that allow users to store and transfer USD within PIX users.
              </p>

            <p className={theme ? '_paragraph' : '_paragraphDark'}>
              Hosted Wallets with the highest custody standards that allow users to store, manage and transfer Virtual Assets.
              </p>
          </div>

        </div>
      </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);
