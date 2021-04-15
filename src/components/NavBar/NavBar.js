import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='container'>
            <Navbar expand="lg">
                <Navbar.Brand href="#home">Event Photography</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link>
                            <Link to="/" className="nav-link mr-3">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="#portfolio" className="nav-link mr-3">Our Portfolio</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="#out-team" className="nav-link mr-3">Our Team</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="#contact-us" className="nav-link mr-3">Contact Us</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="#contact-us" className="nav-link mr-3">Admin</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/login" className="btn btn-primary mr-3">Login</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;