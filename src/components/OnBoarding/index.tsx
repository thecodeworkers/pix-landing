import React, { Component, createRef } from "react";
import { PixDevices, DownloadIos, DownloadAndroid, PixOrange3d} from '../Svg';
import { OnBoardingFirst } from '../../components';
import { TimelineMax, gsap } from "gsap/all";
import './styles.scss';

interface IProps {
  timeLine?: any;
}

interface IState {
  flag?: string;
  overTime?: any;
  startTime?: any;
  parent?: any;
  secondscreen?: any;
  thirdscreen?: any;
  check?: boolean;
  timeLine?: any;
}

class OnBoarding extends Component<IProps, IState> {

  private parent = createRef<HTMLDivElement>();
  private secondscreen = createRef<HTMLDivElement>();
  private thirdscreen = createRef<HTMLDivElement>();

  private tl;

  constructor(props: IProps) {

    super(props);

    this.tl = null;

    this.state = {
      flag: '',
      overTime: null,
      startTime: null,
      check: false
    }

    // this.tl = null;
  }

  componentDidMount() {
    // const ref = this.hey.current;
    // document.addEventListener("mousewheel", () => this.scrollHandler());

    // ref.onscroll = () => {
    //   this.scrolling();
    // }


    // let tl = gsap.timeline( {
    //   scrollTrigger: "._second", // start the animation when ".box" enters the viewport (once)
    //   pin: true,
    //   scrub: 1,
    //   snap: {
    //     snapTo: "labels", // snap to the closest label in the timeline
    //     // duration: {min: 6, max: 9}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    //     delay: 2, // wait 0.2 seconds from the last scroll event before doing the snapping
    //     // ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
    //   }

    // });

    //   tl.addLabel("start")
    // // .addLabel("background")
    // .to("._second", {backgroundColor: 'red'})
    // .addLabel("color")
    // .to("._p", 0.6, { color: "red" })
    // // .addLabel("spin")
    // // .to(".p", {rotation: 360})
    // .addLabel("end");

    // this.timeLine 
    // .play()
    // .to('._parentSendSectionBodyLeft', 0.6, {x: 0, opacity: 1}, 0.3)
    // .to('._parentSendSectionBodyRight', 0.6,  {x: 0, opacity: 1}, 0.3)
    // .to('._sendRightTitle', 0.6,  { opacity: 1, y: 0 }, 0.4)
    // .to('._exchangeInstantly', 0.6,  { opacity: 1, y: 0 }, 0.6)
    // .to('._emailNewsletterSend', 0.6,  { opacity: 1, y: 0 }, 0.8)
    // .to('._macBookChangeTheme', 0.6,  { opacity: 1, x: 0 }, 0.4)
    // .to('._currencyCardsRow', 0.6,  { opacity: 1, y: 0 }, 0.6)
    // .to('._switchThemeParent', 0.6,  { opacity: 1, x: 0 }, 0.6)

    window.onmouseup = () => {
      this.setState({ overTime: new Date().getSeconds() });
      if (this.state.startTime != this.state.overTime) this.scrolling();
    };

    window.onmousedown = () => {
      this.setState({ startTime: new Date().getSeconds() });
    };

  }

  // scrollHandler() {
  //   this.scrolling();
  // }

  scrolling() {
    let target = this.secondscreen.current;

    if (this.state.flag == 'third') target = this.thirdscreen.current;
    this.parent.current.scrollTo({ top: 0, left: target.offsetLeft, behavior: 'smooth' });
    // target.classList.add('_transition');

    this.setState({ flag: 'third' })
  }

  changeTheme(): any {
    const checked = this.state.check;
    this.setState({ check: !checked })
  }

  render() {
    return (
      <div className="_scrollingWrapper" ref={this.parent}>
        <div className='_cardsParent'>
          <div className='_cardCarrousel' >

            <OnBoardingFirst />

          </div>
          <div className='_cardCarrousel' ref={this.secondscreen} >

            <div className='_smartMoneyParent'>
              <div className='_LeftSideSmartMoney'>

                {/* <p>sdadsdasdasdasdasdasdassa</p> */}

                <div className='_pixDevices'>
                  <PixDevices />

                  <div className='_orangePixFloat'>
                      <PixOrange3d />
                  </div>
                </div>
              </div>

              <div className='_rightSideSmartMoney'>

                <div className='_rightSideSmartContent'>
                  <h4>Disponible para app and desktop</h4>

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

          </div>
          <div className='_cardCarrousel ' ref={this.thirdscreen} >
            <div className='_third'>
              <h2>third</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OnBoarding;
