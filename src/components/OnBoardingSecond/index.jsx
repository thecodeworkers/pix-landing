import React, { useEffect, useState } from 'react';
import { PixDevices, PixOrange3d, UsdtIcon, BtcIcon, UsdcIcon, EthIcon, DownloadIos, DownloadAndroid } from '../Svg'
import './styles.scss';
import { saveStep } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTrans } from '../../i18n/withTrans';
import { TimelineMax } from 'gsap/all';

const OnBoardingSecond = (props) => {
  const { onboarding, reference, referenceParent, action, t} = props;

  const [flag, setFlag ] = useState(true);
  const timeLine = new TimelineMax({ paused: true });

  useEffect(() => {
    if (onboarding.stepOne) animation();
  }, [onboarding.stepOne]);

  // useEffect(() => {
  //   if(!flag) window.addEventListener("wheel", handleWheel, {once: true})
  // }, [flag]);

  const animation = () => {
    timeLine.play()
      .to('._orangePixFloat', 0.6, { top: '30%', opacity: 1 }, 0.6)
      .to('._usdtFloat', 0.6, { bottom: '0%', opacity: 1 }, 0.6)
      .to('._btcFloat', 0.6, { bottom: '50%', opacity: 1 }, 0.6)
      .to('._usdcFloat', 0.6, { top: '0%', opacity: 1 }, 0.6)
      .to('._ethFloat', 0.6, { top: '16%', opacity: 1 }, 0.6)
      .to('._availableDesktopTitle', 0.6, { x: 0, opacity: 1 }, 0.5)
      .to('._manageMoneyText', 0.6, { x: 0, opacity: 1 }, 0.8)
      .to('._appIosDown', 0.6, { x: 0, opacity: 1 }, 1)
      .to('._appAndroidDown', 0.6, { x: 0, opacity: 1 }, 1.2)
      .to('._appAndroidDown', 0.6, { y: 0, opacity: 1 }, 1.2)
      timeLine.eventCallback("onComplete", () => completeAnimation());
  }
  // }

  const completeAnimation = () => {
    setFlag(false);
    action.saveStep({ completeSecondAnimation: true });
  }

  const navigateThird = (target, parent) => {
    referenceParent.current.scrollTo({ left: reference.current.offsetLeft, behavior: 'smooth' });
    action.saveStep({ stepTwo: true });
  }

  return (
    <div className='_smartMoneyParent'>
      
      <div className='_responsiveArrow' onClick={() => navigateThird(reference, referenceParent)}>
        <span className='material-icons' >arrow_forward</span>
      </div>  
      <div className='_LeftSideSmartMoney'>

        <div className='_pixDevices'>
          <PixDevices />

          <div className='_orangePixFloat'>
            <PixOrange3d />
          </div>

          <div className='_usdtFloat'>
            <UsdtIcon />
          </div>

          <div className='_btcFloat'>
            <BtcIcon />
          </div>

          <div className='_usdcFloat'>
            <UsdcIcon />
          </div>

          <div className='_ethFloat'>
            <EthIcon />
          </div>
        </div>
      </div>

      <div className='_rightSideSmartMoney'>

        <div className='_rightSideSmartContent'>
          <h4 className='_availableDesktopTitle'>{t('available_on')}</h4>

          <div className='_manageMoneyText'>
            <p>{t('manage_your_money1')}</p>
            <p>{t('manage_your_money2')}</p>
            <p>{t('manage_your_money3')}</p>
          </div>

          <div className='_downloadStores'>


            <div className='_appIosDown'>
            <a className='_link' target='_blank' href="https://www.apple.com/la/ios/app-store/">  
              <DownloadIos />
              </a>
            </div>

            <div className='_appAndroidDown'>
            <a className='_link' target='_blank' href="https://play.google.com/store?hl=es_VE"> 
              <DownloadAndroid />
              
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>

  )
};

const mapStateToProps = ({ onboarding }) => ({ onboarding });

const mapDispatchToProps = dispatch => {
  const actions = {
    saveStep
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTrans(OnBoardingSecond));
