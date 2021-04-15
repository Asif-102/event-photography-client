import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/navLogo.svg';

const NavBar = () => {
    return (
        <div className='container font-weight-bold'>
            <Navbar expand="lg">
                <Navbar.Brand href="#home"> 
                    <img src={logo} alt="" width="40px"/> Event Photography
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link>
                            <Link to="/" className="nav-link mr-3">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="#projects" className="nav-link mr-3">Our Projects</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="#about-us" className="nav-link mr-3">About Us</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="#contact-us" className="nav-link mr-3">Contact Us</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/login" className="btn btn-warning mr-3">Login</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;