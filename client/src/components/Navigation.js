import React from 'react';
import { Outlet, Link } from 'react-router-dom';

/* React Bootstrap Components */
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
    return (
        <div>
            <Navbar style={{paddingLeft: "2rem"}} bg="dark" variant="dark" >
                    <Navbar.Brand><Link style={{textDecoration: "none", color: "white"}} to='/'>Home</Link></Navbar.Brand>
                    <Navbar.Brand><Nav.Link href='/mymovies' style={{textDecoration: "none", color: "white"}} >My Movies</Nav.Link></Navbar.Brand>
            </Navbar>
            <Outlet/>
        </div>
    );
}

export default Navigation;