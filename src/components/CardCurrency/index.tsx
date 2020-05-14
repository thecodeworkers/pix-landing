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
                <div className='col-md-3'>
                    <div className="card_P">
                        <div className="card_H"><UsdtLogo /></div>
                    </div>
                    <div className="price"><h6>$1.230.03</h6></div>  
                </div>
                <div className='col-md-3'>
                    <div className="card_P">
                        <div className="card_H"><UsdcLogo /></div>
                    </div>
                    <div className="price"><h6>$1.230.03</h6></div>  
                </div>
                <div className='col-md-3'>
                    <div className="card_P">
                        <div className="card_H"><EthLogo /></div>
                    </div>
                    <div className="price"><h6>$1.230.03</h6></div>  
                </div>
                <div className='col-md-3'>
                    <div className="card_P">
                        <div className="card_H"><BtcLogo /></div>
                    </div>
                    <div className="price"><h6>$1.230.03</h6></div>  
                </div>
            </div>
        </div>
        <h1 className="prueba">Ender Cards</h1>
      </div>
    )
  }