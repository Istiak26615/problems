import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MEnubar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container>
    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        {/* <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link> */}
        
        <Link to="/" className="m-2">
                    <li>Problem 1</li>
        </Link>
        <Link to="/problem2" className="m-2">
                    <li>Problem 2</li>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default MEnubar;