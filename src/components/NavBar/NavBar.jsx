import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav  from 'react-bootstrap/Nav';
import Navbar  from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

    const {cantidad} = useCartContext()


  return <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Link to='/'>
                     City Cell
                </Link>   
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Link to='/categoria/celulares'>Celulares</Link>
                    <Link to='/categoria/accesorios'>Accesorios</Link>
                   
                    </Nav>
                    <Nav>
                    <Link to='/cart'>
                        {cantidad() != 0 && cantidad()}
                        <CartWidget/>
                    </Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
  </div>;
};

export default NavBar;
