import React from 'react';
import { Navbar} from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar>
      <Navbar.Brand href="#home">Crop Yield Prediction</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
