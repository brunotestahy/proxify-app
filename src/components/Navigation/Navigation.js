import React from 'react';
import './Navigation.scss';
import {routes} from '../../routes';
import ListGroup from 'react-bootstrap/cjs/ListGroup';
import {Link, useLocation} from 'react-router-dom';

function Navigation() {
    const location = useLocation();

    return (
        <div className='navigation container-fluid'>
            <div className='menu-nav'>
                <h2 className='menu-title mb-5'>Bruno</h2>
                <ListGroup as="ul">
                    { routes.map(route => (
                        <ListGroup.Item as={Link}
                                        key={route.path}
                                        to={route.path}
                                        active={location.pathname === route.path}>
                            {route.name}
                        </ListGroup.Item>
                    )) }
                </ListGroup>
                <Link className='logout' to='#logout'>Sign Out</Link>
            </div>
        </div>
    );
}

export default Navigation;
