import React, { useState } from 'react'
import { SEO } from '../';
import './style.scss';
import { PixLogo } from '../../components/Svg/pix-logo';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='_nav' fixed='top' dark expand="md">
        <div className='container'>
          <NavbarBrand href="/">
            <div className='_logo'>
              <PixLogo />
            </div>

          </NavbarBrand>
          <NavbarToggler onClick={toggle} className='_toggle'/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto ml-auto" navbar>
              <NavItem className='_item' >
                <NavLink href="/components/" className='text-white'>ABOUT</NavLink>
              </NavItem>
              <NavItem className='_item'>
                <NavLink href="https://github.com/reactstrap/reactstrap" className='text-white'>PRODUCTS</NavLink>
              </NavItem>
              <NavItem className='_item'>
                <NavLink href="https://github.com/reactstrap/reactstrap" className='text-white'>BENEFITS </NavLink>
              </NavItem>
            </Nav>

            <NavItem >
              <button className='_registerBtn'>REGISTER</button>
            </NavItem>

            <NavItem>
              <button className='_loginBtn'>LOG IN</button>
            </NavItem>
          </Collapse>
        </div>
      </Navbar>
    </div>
  )
}

export default Navigation;
