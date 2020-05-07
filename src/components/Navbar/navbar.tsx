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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Navbar className='_nav' expand="md">
        <div className='container'>
          <NavbarBrand href="/">
          
             <PixLogo />
          
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto ml-auto" navbar>
              <NavItem className='_item'>
                <NavLink href="/components/" >ABOUT</NavLink>
              </NavItem>
              <NavItem className='_item'>
                <NavLink href="https://github.com/reactstrap/reactstrap">PRODUCTS</NavLink>
              </NavItem>
              <NavItem className='_item'>
                <NavLink href="https://github.com/reactstrap/reactstrap">PRODUCTS</NavLink>
              </NavItem>
            
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
          </div>
        </Navbar>
    </div>
  )
}

export default Navigation;
