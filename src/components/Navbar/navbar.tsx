import React, { useState } from 'react'
import { SEO } from '../';
import './style.scss';
import { PixLogo } from '../../components/Svg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { withTrans } from '../../i18n/withTrans';
import { scrolling } from '../../utils/common';

const Navigation = (props) => {

  const {t,i18n, scroll} = props
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  

  return (
    <div>
      <Navbar className='_nav' fixed='top' dark expand="lg">
        <div className='container'>
          <NavbarBrand href="/">
            <div className='_logo'>
            <PixLogo color='#fff' />
            </div>

          </NavbarBrand>
          <NavbarToggler onClick={toggle} className='_toggle border w-3'/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto ml-auto" navbar>
              <NavItem className='_item' onClick={ scroll.aboutRef ? () => scrolling(scroll.aboutRef) : null}>
                <NavLink className='text-white'>{t('about_us').toUpperCase()}</NavLink>
              </NavItem>
              <NavItem className='_item' onClick={ scroll.productRef ? () => scrolling(scroll.productRef) : null}>
                <NavLink className='text-white '>{t('products'.toUpperCase())}</NavLink>
              </NavItem>
              <NavItem className='_item' onClick={scroll.benefitsRef ? () => scrolling(scroll.benefitsRef) : null}>
                <NavLink className='text-white'>{t('benefits').toUpperCase()}</NavLink>
              </NavItem>
            </Nav>

            <NavItem >
              <button className='_navBarBtnBlack'>{t('register').toUpperCase()}</button>
            </NavItem>

            <NavItem>
              <button className='_navBarBtnBlue'>{t('login').toUpperCase()}</button>
            </NavItem>
          </Collapse>
        </div>
      </Navbar>
    </div>
  )
}

const mapStateToProps = ({ scroll }) => ({ scroll });


export default connect(mapStateToProps)(withTrans(Navigation));
