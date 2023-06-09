import React, { useRef, useEffect } from 'react';
import { PixAppOne, Square, OrangeCube, SendIcon, BtcRectangle,ProfileIcon } from '../Svg';
import { ScrollDown, Separator } from '../../components';
import { saveReference } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTrans } from '../../i18n/withTrans';
import './style.scss'
const Product = ({ action, t, i18n, product, login }) => {

   const { saveReference } = action;
  const productRef: any = useRef();

   useEffect(() => {
    if (product) saveReference({ productRef });
    saveReference({ productRef });
   }, []); 

  return (
    <div ref={productRef}> 
      <div className='_productParent'>
        <div className='_productGeneral'>
          
          <div className='_productLeft'>
            <div className='_pixLeftDescription'>
              {/* <div className='_centerSquare'>
                <Square />
              </div> */}

              {/* <h5 className='_productext'>{t('secure_platform')}</h5> */}
              <p className='_wallPix'>{t('pix_wallet')}</p>
              <div className='_separatorProduct'>
              <Separator height={6} />
              </div >
         
              <p className='_paragraphProduct'>{t('pix_description')}</p>
              <a className='_link' target='_blank' href="https://play.google.com/store?hl=es_VE"> 
               {/* <button className='_productBtnBlue'>{t('download_pix')} 
               <span className="material-icons _buttonIcon">arrow_forward</span>
               </button> */}
              </a>
             
              <div className='_cubeContainer'>
            <OrangeCube />
            </div>
            </div>
          
          </div>

          <div className='_productRight'>
          
            <div className='_phoneContainer'>
              <PixAppOne />
              <div className='_sendIcon'>
              <SendIcon />
            </div>
            <div className='_btcRecantgle'>
              <BtcRectangle />
            </div>
            <div className='_profile'>
              <ProfileIcon />
            </div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps) (withTrans(Product));
