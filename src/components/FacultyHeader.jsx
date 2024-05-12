import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar,  } from 'react-bootstrap';
import '../styles/header.css';
import { signOut } from 'firebase/auth'; // Import signOut method from Firebase auth
import { auth } from '../firebase';
function FacultyHeader({ userEmail }) {
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
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container >
         
          <Navbar.Brand as={Link} to="/faculty-admin">
            PG<span>-Pedia</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/faculty-admin">
                DashBoard
              </Nav.Link>
              <Nav.Link  href="#">
                StudentList
              </Nav.Link>
            
            </Nav>
            <Navbar.Text>User Email: {userEmail} </Navbar.Text>
            <Button className='
              mx-3 
              bg-danger
              fw-bold
            ' onClick={handleLogout}>Logout</Button> {/* Logout button */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </>
  );
}

export default FacultyHeader;
