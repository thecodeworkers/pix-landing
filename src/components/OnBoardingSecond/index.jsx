import React, { useEffect, useState } from 'react';
import { PixDevices, PixOrange3d, UsdtIcon, BtcIcon, UsdcIcon, EthIcon, DownloadIos, DownloadAndroid } from '../Svg'
import './styles.scss';
import { saveStep } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTrans } from '../../i18n/withTrans';
import { TimelineMax } from 'gsap/all';

const OnBoardingSecond = (props) => {


  const { onboarding, reference, referenceParent, action} = props;

  const [flag, setFlag ] = useState(true);
  const timeLine = new TimelineMax({ paused: true });

  useEffect(() => {
    if (onboarding.stepTwo) animation();
  }, [onboarding.stepTwo]);

  useEffect(() => {
    console.log('enter');
    if(!flag) window.addEventListener("wheel", () => handleWheel(reference, referenceParent), {once: true})
  }, [flag]);

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

      setTimeout(() => {
       setFlag(false)
      }, 1000);
  }

  const handleWheel = (target, parent) => {
    if(!flag) {
      parent.current.scrollTo({ left: target.current.offsetLeft, behavior: 'smooth' });
      action.saveStep({ stepThree: true })
    }
 
  }

  return (
    <div className='_smartMoneyParent'>
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
          <h4 className='_availableDesktopTitle'>Disponible para app and desktop</h4>

          <div className='_manageMoneyText'>
            <p>Maneja tu dinero </p>
            <p>inteligente en</p>
            <p>cualquier lugar</p>
          </div>

          <div className='_downloadStores'>

            <div className='_appIosDown'>
              <DownloadIos />
            </div>

            <div className='_appAndroidDown'>
              <DownloadAndroid />
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
