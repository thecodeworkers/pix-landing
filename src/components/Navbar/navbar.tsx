import React, { useState } from 'react'
import { SEO } from '../';
import './style.scss';
import { PixLogo } from '../../components/Svg';
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

const Navigation = (props) => {

  const {t,i18n} = props

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='_nav' fixed='top' dark expand="lg">
        <div className='container'>
          <NavbarBrand href="/">
            <div className='_logo'>
              <PixLogo />
            </div>

          </NavbarBrand>
          <NavbarToggler onClick={toggle} className='_toggle border w-3'/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto ml-auto" navbar>
              <NavItem className='_item' >
                <NavLink href="/components/" className='text-white'>{t('about_us').toUpperCase()}</NavLink>
              </NavItem>
              <NavItem className='_item'>
                <NavLink className='text-white '>{t('products'.toUpperCase())}</NavLink>
              </NavItem>
              <NavItem className='_item'>
                <NavLink href="https://github.com/reactstrap/reactstrap" className='text-white'>{t('benefits'.toUpperCase())}</NavLink>
              </NavItem>
            </Nav>

            <NavItem >
              <button className='_registerBtn'>{t('register').toUpperCase()}</button>
            </NavItem>

            <NavItem>
              <button className='_loginBtn'>{t('login').toUpperCase()}</button>
            </NavItem>
          </Collapse>
        </div>
      </Navbar>
    </div>
  )
}

export default withTrans(Navigation);
