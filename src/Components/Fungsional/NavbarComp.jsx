import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText, Button
  } from 'reactstrap';
import { useContext } from 'react';
import { NavLink } from "react-router-dom"
import { CartContext } from '../../CartContext';

export const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const {value, setValue} = useContext(CartContext);

    return (
    <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink to="/" className="nav-link">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" className="nav-link">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/mahasiswa" className="nav-link">Mahasiswa</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/kelas" className="nav-link">Class</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/hooks" className="nav-link">Hooks</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/useeffect" className="nav-link">Use Effect</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/produk" className="nav-link">Produk</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/reducer" className="nav-link">Reducer</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <Button color="danger">
                <i className="fa fa-shopping-cart" />
                <span className="badge badge-light ml-1">{value}</span>
              </Button>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    )
}
