import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { signOut } from 'firebase/auth'; // Import signOut method from Firebase auth
import '../styles/header.css';
import { auth } from '../firebase';

function StudHeader({ email }) {
  const handleLogout = async () => {
    try {
      // Sign out the user
      await signOut(auth);
      // Redirect to the login page or any other page after logout
      window.location.href = '/student-login'; // Example: Redirect to student login page
    } catch (error) {
      console.error('Error signing out:', error.message);
      // Handle error if any
    }
  };

  return (
    <>
    
      <Navbar expand="lg" className="bg-body-tertiary student-header">
        <Container >
          <Navbar.Brand as={Link} to="/">
            PG<span>-Pedia</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/student-admin">
                DashBoard
              </Nav.Link>
              <Nav.Link href="#">
                Select Topic
              </Nav.Link>
              <Nav.Link href="#">
                Submission
              </Nav.Link>
              <Nav.Link href="#contact">
                About Mentor
              </Nav.Link>
            </Nav>
             {/* Display user email */}
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default StudHeader;
