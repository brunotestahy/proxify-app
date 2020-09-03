import React from 'react';
import '../App/App.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.scss';
import {Link} from 'react-router-dom';

function Header({ title = 'Start' }) {
    return (
        <Navbar collapseOnSelect
                className='justify-content-start header'
                expand="md"
                bg="white"
                variant="light"
                expanded={false}>
            <Navbar.Toggle className='mr-2'/>
            <Navbar.Brand className='navbar-toggler brand'>{title}</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Brand as={Link} to='/' className='brand'>Proxify App</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/cart">Your Cart</Nav.Link>
                    <Nav.Link as={Link} to="/favourites">Favourites</Nav.Link>
                    <Nav.Link as={Link} to="/orders">Your Orders</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#logout">Sign Out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
