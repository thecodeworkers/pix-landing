import React, { useRef, useEffect } from 'react';
import { PixAppOne, Square, OrangeCube } from '../Svg';
import { ScrollDown, Separator } from '../../components';
import { saveReference } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTrans } from '../../i18n/withTrans';
import './style.scss'
import gsapStartOne from './gsap'

const Product = ({ action, t, i18n, product, login }) => {

   const { saveReference } = action;
  const productRef: any = useRef();

  gsapStartOne();
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
              <div className='_centerSquare'>
                <Square />
              </div>

              <h5 className='_productext'>{t('secure_platform')}</h5>
              <p className='_wallPix'>{t('pix_wallet')}</p>
              <div className='_separatorProduct'>
              <Separator height={6} />
              </div >
         
              <p className='_paragraphProduct'>{t('pix_description')}</p>
              <div className='_cubeContainer'>
            <OrangeCube />
            </div>
            </div>
          
          </div>

          <div className='_productRight'>
            <div className='_phoneContainer'>
              <PixAppOne />
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
