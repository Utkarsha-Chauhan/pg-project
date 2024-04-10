import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Button, Modal } from 'react-bootstrap';
import '../styles/header.css';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            PG<span>-Pedia</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">
                Home
              </Nav.Link>
              <Nav.Link  href="#about">
                About Us
              </Nav.Link>
              <Nav.Link  href="#contact">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="me-auto navbar-nav justify-content-end">
            <Button className='loginBtn' onClick={handleShow}>Registration/Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Link to="/student-login">Student Login</Link>
          <Link to="/">Faculty Login</Link>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;
