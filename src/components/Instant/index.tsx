import React, { useRef, useEffect } from 'react';
import { PixAppTwo, OrangePix } from '../Svg';
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
              <Separator />
              <p className='_paragraph'>{t('pix_instant')}</p>

              <div className='_orangePixContainer'>
                <OrangePix />
              </div>
            </div>
          </div>

          <div className='_productRightO'>
            <div className='_phoneContainerO'>
              <PixAppTwo />
            </div>
          </div>
        </div>
      </div>

      <div className='_parentScroll'>
        <ScrollDown color='#FF8008' reference={aboutRef} />
      </div>

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
