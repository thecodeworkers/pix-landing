import React, { useEffect } from 'react';
import './styles.scss';
import { PhoneLight, BtcExchangeEth, PhoneDark, BtcExchangeUsd, SendBtcCard } from '../Svg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTrans } from '../../i18n/withTrans';
import { TimelineMax } from 'gsap/all';

const OnBoardingThird = (props) => {

  const { onboarding } = props;

  const timeLine = new TimelineMax({ paused: true });

  useEffect(() => {
    if(onboarding.stepThree) playanimation();
  }, [onboarding.stepThree]);

  const playanimation = () => {
    timeLine.play()
      .to('._descriptionSectionParragraph', 0.6, { y: '0', opacity: 1 }, 0.6)
      .to('._phoneLigthDeviceParent', 0.6, { x: '0' }, 0.4)
      .to('._btcExchangeToEth', 0.6, { y: '0', opacity: 1 }, 0.8)
      .to('._btcExchangeToUsd', 0.6, { y: '0', opacity: 1 }, 0.9)
      .to('._descriptionSectionRightParragraph', 0.6, { y: '0', opacity: 1 }, 1)
  }

  return (
    <div className='_parenThirdSection'>
      <div className='_thirdSectionLeftSide'>
        <div className='_chilfOfLeftSide'>
          <div className='_descriptionSectionDouble'>

            <div className='_btcExchangeToEth'>
              <BtcExchangeEth />
            </div>

            <div className='_descriptionSectionParragraph'>
              <p> Haz tu vida </p>
              <p> más fácil</p>
              <p> y rápida </p>
            </div>
          </div>

          <div className='_phoneLigthDeviceParent'>
            <PhoneLight />
          </div>
        </div>
      </div>

      <div className='_thirdSectionRightSide'>
        <div className='_chilfOfRightSide'>

          <div className='_phoneLigthDeviceParent'>
            <PhoneDark />
          </div>

          <div className='_descriptionSectionDoubleRight'>
            <div className='_btcExchangeToUsd'>
              <BtcExchangeUsd />
            </div>

            <div className='_descriptionSectionRightParragraph'>
              <p> Con tu </p>
              <p> intiución </p>
              <p> basta </p>
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
    
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTrans(OnBoardingThird));