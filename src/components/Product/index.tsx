import React, { useRef, useEffect } from 'react';
import { PixAppOne, Square, PixAppTwo, Exchange, Check, Arrows, Users, Usd } from '../Svg';
import { ScrollDown, Separator } from '../../components';
import { saveReference } from '../../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './style.scss'

const Product = ({ action }) => {
  const { saveReference } = action;
  const productRef: any = useRef();

  useEffect(() => {
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
              <ScrollDown color='#57D6AF' />
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


      <div className='_skillsParent'>
        <div className='_productSkills'>

          <div className='_skillItem'>
            <div className='_productIcon'>
              <Arrows />
            </div>

            <p className='_skillsDescription'>
              Exchange FIAT to Virtual assets 
            </p>
          </div>
          <div className='_skillItem'>
            <div className='_productIcon'>
              <Usd />
            </div>

            <p className='_skillsDescription'>
            transfer USD within PIX users
            </p>
          </div>
          <div className='_skillItem'>
            <div className='_productIcon'>
              <Users />
            </div>

            <p className='_skillsDescription'>
            Customized services <br />for our high demand clients
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
