import React, { createRef, useEffect, useState } from "react";
import { OnBoardingFirst, OnBoardingSecond, OnBoardingThird } from '..';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveStep, postNewsletter } from '../../store/actions';
import './styles.scss';

const OnBoarding = ({ action, onboarding }) => {
  const parent = createRef();
  const secondscreen = createRef();
  const thirdscreen = createRef();

  const { completeSecondAnimation } = onboarding;

  const [firstExec, setExec] = useState(false);
  const [secondExec, setSecondExec] = useState(false);
  const [thirdExec, setThirdExec] = useState(false);

  useEffect(() => {
    window.addEventListener('wheel', (event) => {
      setExec(true);
    }, { once: true });

  }, []);

  useEffect(() => {
    if(firstExec) {
      parent.current.scrollTo({ left: secondscreen.current.offsetLeft, behavior: 'smooth' });
      action.saveStep({ stepOne: true });
    }
  }, [firstExec]);

  useEffect(() => {
    if(completeSecondAnimation) {
      window.addEventListener('wheel', (event) => {
        setSecondExec(true);
      }, { once: true });
    }
  }, [completeSecondAnimation]);

  useEffect(() => {
    if(secondExec) {
      let count = 0
      window.addEventListener('wheel', () => {
        if(count++ > 5) {
          setThirdExec(true);
          setSecondExec(false); 
        }
      });
    }
  }, [secondExec]);

  useEffect(() => {
    if(thirdExec) {
      navigateThirdScreen();
    }
  }, [thirdExec]);


  const navigateThirdScreen = () => {
    parent.current.scrollTo({ left: thirdscreen.current.offsetLeft, behavior: 'smooth' });
    action.saveStep({ stepTwo: true });
    window.removeEventListener("wheel", null);
  };

  
   return (
    <div className="_scrollingWrapper" ref={parent}>
      <div className='_cardsParent'>
        <div className='_cardCarrousel' >
          <OnBoardingFirst reference={secondscreen} referenceParent={parent} />
        </div>
        <div className='_cardCarrousel' ref={secondscreen} >

          <OnBoardingSecond reference={thirdscreen} referenceParent={parent} callback={navigateThirdScreen}/>

        </div>
        <div className='_cardCarrousel ' ref={thirdscreen} >

          <OnBoardingThird />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ onboarding, newsletter, loaderResult }) => ({ onboarding, newsletter, loaderResult});

const mapDispatchToProps = dispatch => {
  const actions = {
    saveStep,
    postNewsletter
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OnBoarding);
