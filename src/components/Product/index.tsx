import React, { useRef, useEffect } from 'react';
import { PixAppOne, Square, PixAppTwo, Exchange, Check, Arrows, Users, Usd } from '../Svg';
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
              <p className='_wallPix'>PIX Wallet</p>
              <p className='_paragraph'>{t('pix_description')}</p>
            </div>
          </div>

          <div className='_productRight'>
            <div className='_phoneContainer'>
              <PixAppOne />
            </div>
          </div>
        </div>
      </div>
      <div className='_productParentTwo'>
        <div className='_productGeneral'>

          <div className='_productLeft'>
            <div className='_pixelCenter'>
              <ScrollDown color='#57D6AF' />
            </div>

            <div className='_phoneContainerTwo'>
              <PixAppTwo />
            </div>
          </div>
          <div className='_productLeft'>
            <div className='_pixLeftDescription'>
              <p className='_wallPix'>PIX Instant</p>
              <p className='_paragraph'>{t('pix_instant')}</p>
              <Exchange />
              <div className='_checkCenter'>
                <Check />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='_skillsParent'>
        <div className='_productSkills'>

          <div className='_skillItem'>
            <div className='_productIcon'>
              <Arrows />
            </div>

            <p className='_skillsDescription'>
            {t('exchange_fiat')}
            </p>
          </div>
          <div className='_skillItem'>
            <div className='_productIcon'>
              <Usd />
            </div>

            <p className='_skillsDescription'>
            {t('transfer_usd')}
            </p>
          </div>
          <div className='_skillItem'>
            <div className='_productIcon'>
              <Users />
            </div>

            <p className='_skillsDescription'>
            {t('cutomized_services')} <br />{t('high_clients')}
            </p>
           
          </div>
        </div>
      </div>

      <div className='_parentSeparatorLine'>
        <Separator />
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
