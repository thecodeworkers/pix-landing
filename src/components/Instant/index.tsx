import React, { useRef, useEffect } from 'react';
import {PixPhone, OrangePix} from '../Svg';
import { ScrollDown, Separator } from '../../components';
import { saveReference } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTrans } from '../../i18n/withTrans';
import './style.scss'
import checked from '../../assets/img/phone.png';

const Instant = ({ action, t, i18n }) => {

  // const { saveReference } = action;
  const instantRef: any = useRef();

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
            </div>
            <OrangePix />
          </div>

          <div className='_productRightO'>
            <div className='_phoneContainerO'>
          <PixPhone />
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

export default connect(mapStateToProps, mapDispatchToProps) (withTrans(Instant));
    


      
{/* <div className='_productParentTwo'>
<div className='_productGeneral'>

  <div className='_productLeft'>
    <div className='_pixelCenter'>
      <ScrollDown color='#57D6AF' />
    </div>
    <PixPhone />
    <div className='_phoneContainerTwo'>
    
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
</div> */}