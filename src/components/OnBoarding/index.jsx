import React, { Component, createRef } from "react";
import { PixDevices, DownloadIos, DownloadAndroid, PixOrange3d, UsdtIcon, BtcIcon, UsdcIcon, EthIcon } from '../Svg';
import { OnBoardingFirst, OnBoardingSecond, OnBoardingThird } from '..';
import { TimelineMax, gsap } from "gsap/all";
import './styles.scss';


class OnBoarding extends Component {

   parent = createRef();
   secondscreen = createRef();
   thirdscreen = createRef();

  constructor(props) {

    super(props);

    this.timeLine = new TimelineMax({paused: true});

    this.state = {
      flag: '',
      overTime: null,
      startTime: null,
      check: false
    }
  }
  
  render() {
    return (
      <div className="_scrollingWrapper" ref={this.parent}>
        <div className='_cardsParent'>
          <div className='_cardCarrousel' >
            <OnBoardingFirst reference={this.secondscreen} referenceParent={this.parent} />
          </div>
          <div className='_cardCarrousel' ref={this.secondscreen} >

            <OnBoardingSecond reference={this.thirdscreen} referenceParent={this.parent}/>

          </div>
          <div className='_cardCarrousel ' ref={this.thirdscreen} >

            <OnBoardingThird />
          </div>
        </div>
      </div>
    )
  }
}

export default OnBoarding;
