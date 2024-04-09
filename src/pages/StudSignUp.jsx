import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../styles/StudSignUp.css";

const StudSignUp = () => {
  return (
    <Container className="studlogin">
      <Row>
        <h1 className="text-center">Student Sign Up</h1>
      </Row>

      <Row>
        <Col className="col1">
          <form>
            {/* name */}
            <div class="mb-3">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                required
              />
            </div>
            {/* email */}
            <div class="mb-3">
              <label for="email" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                required
              />
            </div>

            {/* password */}
            <div class="mb-3 pass">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                name="password"
                required
              />
            </div>

            {/* confirm password */}
            <div class="mb-3 pass">
              <label for="cpassword" class="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                class="form-control"
                id="cpassword"
                name="cpassword"
                required
              />
            </div>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        </Col>
        <p>
          Already have an account?
          <Link to="/student-login">Login</Link>
        </p>
          <Link to="/forgot-password">Forgot Password</Link>
      </Row>
    </Container>
  );
};

export default StudSignUp;
