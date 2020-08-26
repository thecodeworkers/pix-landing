import React, { useState, useEffect, createRef } from 'react';
import { PixelLogo } from '../Svg';
import './styles.scss';
import lottie from 'lottie-web';
import animation from '../../assets/animations/loader.json';
import { saveLoader } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Loader = (props) => {
  const [color, setColor] = useState('#ff8008');
  const [className, setClassName] = useState('_containerLoader');
  const [lottieName, setLottieName] = useState('_lottieContainer');

  const { children, action, loaderResult } = props;

  const animationContainer:any = createRef()
  
  // useEffect(() => {
  //   let count = 0;

  //   const interval = setInterval(() => {
  //     if(!count) setColor('#2699FB');
  //     if(count == 1) setColor('#45B649'); 
  //     if(count == 2) setClassName('_hide');
  //     if(count >= 3) {
  //       setClassName('_noneElement');
  //       clearInterval(interval);
  //     }
      
  //     count++;
  //   }, 2000);
  // }, []);

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
    console.log('enter complete')
    setLottieName('_hiddenLoader');
    setClassName('_hide');
    action.saveLoader({loader: true});
    // anim.destroy();
  }

  return (
    <>
      <div className={className}> 
        <div className={`'animation-container ${lottieName}`} ref={animationContainer}></div>
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

