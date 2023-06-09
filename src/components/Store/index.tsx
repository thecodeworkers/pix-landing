import React, { useEffect, useRef } from 'react';
import { ScrollDown, Lang, Separator } from '../../components';
import './style.scss';
import { saveReference } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withTrans } from '../../i18n/withTrans';

const Store = ({childrenTitle = null, children= null, t }) => {

  return (

    
      <div className="_storeContainer">
        <div className='_storeTitle'>
        <h4 className='_blackHeaderTwo'>{childrenTitle}</h4>
        </div>
        <div  className='_storeLine'>
          <Separator height={10} />
        </div>
        <p className='_storeText'>{children}</p>
        <div className='_storeButtonContainer'>
        <a className='_link' target='_blank' href="https://play.google.com/store?hl=es_VE"> 
        <button className='_storeBtnBlue'>{t('download').toUpperCase()}</button>
        </a>
        </div>
    
           {/*  <div className="_scrollDimension">
              <ScrollDown color="#fff" reference={aboutRef}/>
            </div> */}
         
     
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

