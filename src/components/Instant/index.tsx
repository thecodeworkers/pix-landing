import React, { useRef, useEffect } from 'react';
import { PixAppTwo, OrangePix, EthRectangle, UsdRectangle, EuroFloating, UsdcFloating, UsdtFloating, DashFloating} from '../Svg';
import { ScrollDown, Separator } from '../../components';
import { saveReference } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTrans } from '../../i18n/withTrans';
import './style.scss'
const Instant = ({ action, t, i18n }) => {

  // const { saveReference } = action;
  const aboutRef: any = useRef();

  // useEffect(() => {
  //   saveReference({ instantRef });
  // }, []);

  return (
    <div>

      <div className='_productParentO'>
        <div className='_productGeneralO'>
          <div className='_productLeftO'>
            <div className='_pixLeftDescriptionO'>

              <p className='_wallPix'>PIX Instant</p>
              <div className='_separatorInstant'>
              <Separator  height={6} />
              </div>
           
              <p className='_paragraphInstant'>{t('pix_instant')}</p>

              <div className='_orangePixContainer'>
                <OrangePix />
              </div>
            </div>
          </div>

          <div className='_productRightO'>
            <div className='_phoneContainerO'>
              <PixAppTwo />
            </div>
            <div className='_usdtFloatingIcon'>
              <UsdtFloating />
            </div>
            <div className='_usdrectangle'>
              <UsdRectangle />
            </div>
            <div className='_ethrectangle'>
              <EthRectangle />
            </div>
            <div className='_usdcFloatingIcon'>
              <UsdcFloating />
            </div>
             <div className='_eurFloatingIcon'>
              <EuroFloating />
            </div>
            <div className='_dashFloatingIcon'>
              <DashFloating />
            </div>
          </div>
        </div>
      </div>

     {/*  <div className='_parentScroll'>
        <ScrollDown color='#fff' reference={aboutRef} />
      </div> */}

    </div>


  )
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  const actions = {
    saveReference
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTrans(Instant));
