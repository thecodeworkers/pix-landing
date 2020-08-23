import React, { useState, useEffect } from 'react';
import { DashCard, EthCard, UsdCard, BtcCard, MacBookTheme } from '../Svg';
import { TimelineMax } from 'gsap/all';
import { saveStep } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTrans } from '../../i18n/withTrans'

import './styles.scss';

const OnBoardingFirst = (props) => {

  const { action, reference, referenceParent } = props;
  const [check, setCheck] = useState(false)
  const timeLine = new TimelineMax({ paused: true });

  useEffect(() => {
    window.addEventListener("wheel", () => handleWheel(reference, referenceParent), { once: true })

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

    return () => {
      window.removeEventListener("wheel", null);
    }
  }, [])

  const changeTheme = () => setCheck(!check);

  const handleWheel = (target, parent) => {
    parent.current.scrollTo({ left: target.current.offsetLeft, behavior: 'smooth' });
    action.saveStep({ stepOne: true })
    window.removeEventListener("wheel", null);
  }

  return (
    <div className='_parentSendSection'>

      <div className='_responsiveArrow' onClick={() => handleWheel(reference, referenceParent)}>
        <span className='material-icons' >arrow_forward</span>
      </div>  
      <div className='_parentSendSectionBodyLeft'>
        <div className='_sonofson'>
          <div className='_sendContentChild'>
          {/* <div className='_enter'> */}
            <h4 className='_sendRightTitle'>Disponible para app and desktop!</h4>
             {/* </div> */}

            <div className='_exchangeInstantly'>
              <p> Envía, recibe e</p>
              <p> Intercambia dinero </p>
              <p> instantáneamente </p>
            </div>

            <div className='_emailNewsletterSend'>

            
              <p>Ingresa tu correo y recibe nuestras noticaciones de la app</p>
             
              

              <input type='text' placeholder='email' className='_inputNewsletterSend'></input>
              <div style={{ position: 'relative' }}>
                <span className={`material-icons _arrowIconSendEmail`}>arrow_forward</span>
              </div>

              {/* ${isValid && email.length ? '_arrow' : '_arrowEnabled'}` */}
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
             
              <EthCard />
              <DashCard />
              <UsdCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ onboarding }) => ({ onboarding });

const mapDispatchToProps = dispatch => {
  const actions = {
    saveStep
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTrans(OnBoardingFirst));


