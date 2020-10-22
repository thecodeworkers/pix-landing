import React, { useState, useEffect, createRef } from 'react';
import { PixelLogo } from '../Svg';
import './styles.scss';
import lottie from 'lottie-web';
import animation from '../../assets/animations/pix3d.json';
import { saveLoader } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Loader = (props) => {

  const [className, setClassName] = useState('_containerLoader');
  const [lottieName, setLottieName] = useState('_lottieContainer');

  const { children, action  } = props;

  const animationContainer:any = createRef()

    useEffect(() => {
      const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animation
    });

   anim.addEventListener('complete', () => showContent());
    return () => anim.destroy();
  }, []);

  const showContent = () => {
    setLottieName('_hiddenLoader');
    setClassName('_hide');
    action.saveLoader({loader: true});
  }

  return (
    <>
      <div className={className}> 
        <div className={`animation-container ${lottieName}`} ref={animationContainer}></div>
      </div>
      { children }
    </>
  );
}

const mapStateToProps = ({ loaderResult }) => ({ loaderResult });

const mapDispatchToProps = dispatch => {
  const actions = {
    saveLoader
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader);

