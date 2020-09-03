import React from 'react';
import '../App/App.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.scss';
import {routes} from '../../routes';
import {Link} from 'react-router-dom';

function Header({ title = 'Start', expandedMenuClass, setExpandedMenuClass }) {
    const onToggleButtonClicked = () => {
        console.log(expandedMenuClass);
        setExpandedMenuClass(expandedMenuClass ? '' : 'page-layout-swiped');
    };

    return (
        <Navbar collapseOnSelect
                className='justify-content-start header'
                expand="md"
                bg="white"
                variant="light"
                onToggle={onToggleButtonClicked}
                expanded={false}>
            <Navbar.Toggle className='mr-2'/>
            <Navbar.Brand className='navbar-toggler brand'>{title}</Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Brand as={Link} to='/' className='brand'>Proxify App</Navbar.Brand>
                <Nav className="mr-auto">
                    { routes.slice(1).map(route => (
                        <Nav.Link as={Link} to={route.path}>{route.name}</Nav.Link>
                    )) }
                </Nav>
                <Nav>
                    <Nav.Link href="#logout">Sign Out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
