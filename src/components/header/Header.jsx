import React from 'react'
import './Header.css'
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Nav,Navbar } from "react-bootstrap"
import image  from "../../assets/images/logo.png"
import images  from "../../assets/images/icon.png"
import Search from '../search/Search'
const Header = () => {

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="light"
      className="px-4 py-8 "
      fixed="top"
    >
      <Navbar.Brand><img src={image} alt="" className='netflix'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-na" />
      <Navbar.Collapse id="responsive-navbar-nav" className='colapse d-flex justify-content-end align-items-right'>
        
        <Nav className="navba ml-auto  px-3">
          <Search className="" />
          <Nav className='profils'><img src={images} alt="" className='profile' /></Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default  Header;