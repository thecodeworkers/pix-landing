import React, { Component } from 'react';
import { MacBook, DashCard, EthCard, UsdCard, BtcCard } from '../Svg';
import { TimelineMax } from 'gsap/all';
import './styles.scss';


interface IProps {
  timeLine?: any;
}

interface IState {
  check?: boolean;
}

class OnBoardingFirst extends Component<IProps, IState>{

  private timeLine = null;

  constructor(props) {
    super(props);
    this.timeLine = new TimelineMax({paused: true});

    this.state = {
      check: false
    }
  }

  componentDidMount() {
    this.timeLine 
    .play()
    .to('._parentSendSectionBodyLeft', 0.6, {x: 0, opacity: 1}, 0.3)
    .to('._parentSendSectionBodyRight', 0.6,  {x: 0, opacity: 1}, 0.3)
    .to('._sendRightTitle', 0.6,  { opacity: 1, y: 0 }, 0.4)
    .to('._exchangeInstantly', 0.6,  { opacity: 1, y: 0 }, 0.6)
    .to('._emailNewsletterSend', 0.6,  { opacity: 1, y: 0 }, 0.8)
    .to('._macBookChangeTheme', 0.6,  { opacity: 1, x: 0 }, 0.4)
    .to('._currencyCardsRow', 0.6,  { opacity: 1, y: 0 }, 0.6)
    .to('._switchThemeParent', 0.6,  { opacity: 1, x: 0 }, 0.6)
  }


  changeTheme(): any {
    const checked = this.state.check;
    this.setState({ check: !checked })
  }

  render() {
    return (
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
                  <input type="checkbox" className='_changeThemeCheckbox' checked={this.state.check} onChange={() => this.changeTheme()} />
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
    )
  }
}

export default OnBoardingFirst;