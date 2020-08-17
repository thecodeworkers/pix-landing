import React, { useEffect, useRef } from 'react';
import { DownloadAndroid, DownloadIos, PixPhone } from '../Svg';
import { ScrollDown, Lang, Separator, } from '../../components';
import './style.scss';
import { saveReference } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTrans } from '../../i18n/withTrans';

const Store = ({childrenTitle = null, children= null, scroll, action, about, product, t }) => {


  const { saveReference } = action;
  const aboutRef = useRef();
  const productRef = useRef();

  /* useEffect(() => {
    if (product) saveReference({ productRef });
    if (about) saveReference({ aboutRef });
  }, [scroll.productRef]);
 */

  return (

    <div className='_imageBackgroundLight'>
      <div className="_storeContainer">
        <div style={{  width: '40%' }}>
        <h4 className='_blackHeader'>{childrenTitle}</h4>
        </div>
        <div style={{ width: '60%', marginTop: 10, marginBottom: 10, zIndex: 1 }}>
          <Separator height={10} />
        </div>
        <p className='_storeText'>{children}</p>
        <div style={{  marginTop: 30, }}>
        <button className='_registerBtnBlue'>{t('download').toUpperCase()}</button>
        </div>
        <p className="_storeText" style={{  marginTop: 40, marginBottom: 40, }}>{t('be_part')}</p>

        <div className="_footerNetwork">
            <div className="_iosInfo">
              <DownloadIos/>
            </div>
            <div className="_androidInfo">
              <DownloadAndroid/>
            </div>
          </div>
            <div className="_scrollDimension">
              <ScrollDown color="#fff" reference={aboutRef}/>
            </div>
            <div className='_phoneBox' >
          <PixPhone />
          </div>
     
      </div>
   
    </div>
  )
};

const mapStateToProps = ({ scroll }) => ({ scroll });

const mapDispatchToProps = dispatch => {
  const actions = {
    saveReference
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTrans(Store));

