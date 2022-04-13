import React from 'react';
import { Outlet, Link } from 'react-router-dom';

/* React Bootstrap Components */
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Navigation() {
    return (
        <div>
            <Navbar style={{paddingLeft: "2rem"}} bg="dark" variant="dark" >
                <Navbar.Brand> <Link style={{textDecoration: "none", color: "white"}} to='/'>Home</Link> </Navbar.Brand>
                <Container>
                    <Nav>
                        <Link style={{textDecoration: "none", color: "white"}} to='/mymovies'>My Movies</Link>
                    </Nav>
                </Container>
            </Navbar>
            
            <Outlet/>
        </div>
    );
}

export default Navigation;