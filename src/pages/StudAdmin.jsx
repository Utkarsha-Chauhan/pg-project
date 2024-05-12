import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/StudAdmin.css";
import StudHeader from "../components/StudHeader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { loginStudent } from "../services/authService";

const getUserDetailsFromFireStore = async (email, password) => {
  try {
    // Call signInStudent function from authService
    const user = await loginStudent(email, password);
    // If sign-in is successful, navigate to student admin page
    // console.log(user.uid);
    return user.uid
  } catch (err) {
    console.error(err);
  }
};

const StudAdmin = () => {
  // Access the location state
  const location = useLocation();
  const { email, password } = location.state || {}; // Destructure name and email from state or set them to empty values if state is undefined

  // console.log(password);

  // consgetUserDetailsFromFireStore(email, password);

  return (
    <>
      <StudHeader email={email} />{" "}
      {/* Pass name and email as props to StudHeader */}
      <Container>
        <Row>
          <Col>
            <h1>Welcome, {email}!</h1>
            <p>Your email: {email}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default StudAdmin;
