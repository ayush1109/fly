import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';

function Header(props){
    return (
      <Navbar id="navbar" fixed="top" expand="lg" collapseOnSelect bg="dark" sticky="top">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="container">
              <Nav.Link id="heading" className="mx-auto">Home</Nav.Link>
              <Nav.Link id="heading" className="mx-auto">About</Nav.Link>
              <Nav.Link id="heading" className="mx-auto">Rooms</Nav.Link>
              <Nav.Link id="heading" className="mx-auto">Services</Nav.Link>
              <Nav.Link id="heading" className="mx-auto">Gallery</Nav.Link>
              <Nav.Link id="heading" className="mx-auto">See & Do</Nav.Link>
              <Nav.Link id="heading" className="mx-auto">Contact</Nav.Link>
              <Button variant="outline-light">Book A Room</Button>
              </div>
      </Navbar.Collapse>
  </Navbar>
    );
}

export default Header;



