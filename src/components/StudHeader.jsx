import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar,  } from 'react-bootstrap';
import '../styles/header.css';

function StudHeader() {

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container >
         
          <Navbar.Brand as={Link} to="/student-admin">
            PG<span>-Pedia</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/student-admin">
                DashBoard
              </Nav.Link>
              <Nav.Link  href="#">
                Submit the PG  Project
              </Nav.Link>
              <Nav.Link  href="#contact">
                Chosse the Mentor
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* <Navbar.Collapse className="me-auto navbar-nav justify-content-end">
            <Button className='loginBtn' onClick={handleShow}>Registration/Login</Button>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>

      
    </>
  );
}

export default StudHeader;
