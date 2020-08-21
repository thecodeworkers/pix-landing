import React, { useEffect, useRef} from 'react';
import { Arrows, Usd, Users } from '../Svg';
import { Separator } from '../../components';
import { withTrans } from '../../i18n/withTrans';
import './style.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveReference } from '../../store/actions';

const Benefits = (props) => {

  const { t, scroll, action} = props;
  const benefitsRef = useRef();

  useEffect(() => {
    action.saveReference({benefitsRef});
  }, [scroll.benefitsRef])

  return (
    <div ref={benefitsRef}>
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

            <p className='_skillsDescription '>
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
      <Separator height={6} />
      </div>
    </div>
  )
}

const mapStateToProps = ({ scroll }) => ({ scroll });

const mapDispatchToProps = dispatch => {
  const actions = {
    saveReference
  };

  return {
    action: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTrans(Benefits));
