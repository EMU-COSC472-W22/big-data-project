import React from 'react';
import { Outlet, Link } from 'react-router-dom';

/* React Bootstrap Components */
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Navigation() {
    return (
        <div>
            <Navbar className="color-nav" style={{ paddingLeft: "2rem" }} >
                <Container>
                    <Nav>
                        <Navbar.Brand>IMDb Search</Navbar.Brand>
                        <Navbar.Brand><Link style={{textDecoration: "none", color: "blueviolet"}} to='/'>Home</Link></Navbar.Brand>
                        <Navbar.Brand><Link style={{textDecoration: "none", color: "blueviolet"}} to='/mymovies'>My Movies</Link></Navbar.Brand>
                    </Nav>
                </Container>
            </Navbar>
            
            <Outlet/>
        </div>
    );
}

export default Navigation;