import React, { useRef, useEffect } from 'react';
import { PixAppOne, Square, PixPhone, Exchange, Check, Arrows, Users, Usd, OrangeCube } from '../Svg';
import { ScrollDown, Separator } from '../../components';
import { saveReference } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTrans } from '../../i18n/withTrans';
import './style.scss'

const Product = ({ action, t, i18n }) => {

  // const { saveReference } = action;
  const productRef: any = useRef();

  // useEffect(() => {
  //   saveReference({ productRef });
  // }, []);

  return (
    <div>
      <div className='_productParent'>
        <div className='_productGeneral'>
          <div className='_productLeft'>
            <div className='_pixLeftDescription'>
              <div className='_centerSquare'>
                <Square />
              </div>

              <h5>{t('secure_platform')}</h5>
              <p className='_wallPix'>{t('pix_wallet')}</p>
              <Separator />
              <p className='_paragraph'>{t('pix_description')}</p>
            </div>
            <OrangeCube />
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
