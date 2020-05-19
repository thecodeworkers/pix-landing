import React from 'react';
import { PixAppOne, Square, PixAppTwo, Exchange, Check} from '../Svg';
import { ScrollDown } from '../../components';
import './style.scss'

const Product = () => {
  return (
    <div>
      <div className='_productParent'>
        <div className='_productGeneral'>
          <div className='_productLeft'>
            <div className='_pixLeftDescription'>
              <div className='_centerSquare'>
                <Square />
              </div>

              <h5>Secure platform</h5>
              <p className='_wallPix'>PIX Wallet</p>
              <p className='_paragraph'>PIX Wallet is a feature allowing users to transfer seamlessly between PIX accounts.</p>
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
              <ScrollDown scrollTo={null} reference={null} color='#57D6AF' />
            </div>
           
            <div className='_phoneContainerTwo'>
              <PixAppTwo />
            </div>
          </div>
          <div className='_productLeft'>
            <div className='_pixLeftDescription'>
              <p className='_wallPix'>PIX Instant</p>
              <p className='_paragraph'>PIX Instant is designed for customers that want to use Virtual Assets but prefer to convert to fiat currency quickly and avoid taking price fluctuation exposure.</p>
              <Exchange />

              <div className='_checkCenter'>
                  <Check />
              </div>
             
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Product;