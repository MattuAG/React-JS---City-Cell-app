import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav  from 'react-bootstrap/Nav';
import Navbar  from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">City Cell</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#features">Inicio</Nav.Link>
                    <Nav.Link href="#pricing">Celulares</Nav.Link>
                    <Nav.Link href="#pricing">Accesorios</Nav.Link>
                   
                    </Nav>
                    <Nav>
                    <Nav.Link eventKey={2} href="#memes">
                        <CartWidget/>
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
  </div>;
};

export default NavBar;
