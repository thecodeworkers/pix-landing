import React, { Component, createRef } from "react";
import { MacBook, BtcCard, EthCard, DashCard, UsdCard } from '../Svg';
import { TimelineMax } from "gsap/all";
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

  private timeLine = null;

  constructor(props: IProps) {

    super(props);

    this.timeLine = new TimelineMax({paused: true});

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
    //   scrollTrigger: ".second", // start the animation when ".box" enters the viewport (once)
    //   pin: true,
    //   scrub: 3,
    //   snap: {
    //     snapTo: "labels", // snap to the closest label in the timeline
    //     duration: {min: 1, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
    //     delay: 1, // wait 0.2 seconds from the last scroll event before doing the snapping
    //     // ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
    //   }

    // });

    //   tl.addLabel("start")
    // .from(".second", {backgroundColor: 'blue'})
    // .addLabel("color")
    // .to(".second", 3, { backgroundColor: "red"})
    // .addLabel("spin")
    // .to(".p", {rotation: 360})
    // .addLabel("end");

    this.timeLine 
    .play()
    .to('._parentSendSectionBodyLeft', 0.6, {width: '53%', opacity: 1}, 0.6)
    .to('._parentSendSectionBodyRight', 0.6,  { opacity: 1}, 0.6)
   

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
    this.setState({check: !checked })
  }

  render() {
    return (
      <div className="_scrollingWrapper" ref={this.parent}>
        <div className='_cardsParent'>
          <div className='_cardCarrousel' >

            <div className='_parentSendSection'>
              <div className='_parentSendSectionBodyLeft'>
                <div className='_sonofson'>

                  <div className='_sendContentChild'>
                    <h4 className='_sendRightTitle'>Disponible para app and desktop!</h4>

                    <div className='_exchangeInstantly'>
                      <p> Envía, recibe e</p>
                      <p> Intercambia dinero </p>
                      <p> instantáneamente </p>
                    </div>

                    <div className='_emailNewsletterSend'>
                      <p>Ingresa tu correo y recibe nuestras noticaciones de la app</p>

                      <input type='text' placeholder='email' className='_inputNewsletterSend'></input>
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
                      {/* On/Off */}
                        <input type="checkbox" className='_changeThemeCheckbox' checked={this.state.check} onChange={() => this.changeTheme()}/>
                        <span className="_slider _round"></span>
                      </label>

                    </div>
                    <div className='_macBookChangeTheme'>
                      <MacBook />
                    </div>

                    <div className='_currencyCardsRow'>
                      <BtcCard />
                      <EthCard />
                      <DashCard />
                      <UsdCard />
                    </div>
                  </div>

                </div>


              </div>
            </div>

          </div>
          <div className='_cardCarrousel' ref={this.secondscreen} >

            <div className='_second'>
              <h2>second</h2>
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
