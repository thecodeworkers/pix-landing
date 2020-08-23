import React from 'react';
import { connect } from 'react-redux';
import { Background } from './components';
import { CardCurrency, } from '../../components';
import { MacBook, Cube, DiamondTurquese} from '../Svg';
import { withTrans } from '../../i18n/withTrans';
import './styles.scss';

export const Banner = ({ scroll, t }) => {
  const { aboutRef } = scroll;

  return (

    <div >
      <div className="_bannerContainer">

        <div className="_macBox">

          <div className='mac'>
            <div className='_contenedor'>
              <p className="_childrenTitle">{t('today_index')}</p>
              <div className="_bannerCards">
                <CardCurrency />
              </div>

              <div className="_bannerButton">
                <button className="_buttonGradient">{t('download')}</button>
                <p className="_buttonText">{t('stay_on_day')}</p>

              </div>
              <Background />
            </div>

            <MacBook />

            <div className='_minimunCube'>
            <div style={{ width: '80px' }}>
              <Cube />
             </div>
            </div>

            <div className='_giantCube'>
            <div style={{ width: '180px' }}>
              <Cube />
             </div>
            </div>

            <div className='_mediumDiamond'>
            <div style={{ width: '50px' }}>
              <DiamondTurquese />
             </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

const mapStateToProps = ({ scroll }) => ({ scroll });

export default connect(mapStateToProps)(withTrans(Banner));
