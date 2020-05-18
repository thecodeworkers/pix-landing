import React, { useState } from 'react';
import './style.scss';
import { BtcLogo, EthLogo, UsdcLogo, UsdtLogo } from '../Svg';
import { useTranslation } from 'react-i18next';
import { withTrans } from '../../i18n/withTrans';


export default function Cards() {
    return (
      <div className="_card"> 
        <div className="container">
            <div className="row">
                <div className="_contentCard">
                    <div className=''>
                        <div className="_cardPadre">
                            <div className="_cardHijo"><UsdtLogo /></div>
                        </div>
                        <div className="_price"><h6>$1.230.03</h6></div>  
                    </div>
                    <div className=''>
                        <div className="_cardPadre">
                            <div className="_cardHijo"><UsdcLogo /></div>
                        </div>
                        <div className="_price"><h6>$1.230.03</h6></div>  
                    </div>
                    <div className=''>
                        <div className="_cardPadre">
                            <div className="_cardHijo"><EthLogo /></div>
                        </div>
                        <div className="_price"><h6>$1.230.03</h6></div>  
                    </div>
                    <div className=''>
                        <div className="_cardPadre">
                            <div className="_cardHijo"><BtcLogo /></div>
                        </div>
                        <div className="_price"><h6>$1.230.03</h6></div>  
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }