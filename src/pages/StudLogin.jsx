import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../styles/StudLogin.css";
import { Button } from "react-bootstrap";

const StudLogin = () => {
  return (
    <Container className="studlogin">
      <Row>
        <h1 className="text-center">Student Login</h1>
      </Row>

      <Row>
        <Col className="col1">
          <form>
            <div class="mb-3">
              <label for="studentid" class="form-label">
                Email
              </label>
              <input
                type="text"
                class="form-control"
                id="studentid"
                name="studentid"
                required
              />
            </div>
            <div class="mb-3">
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

            <Button className="btnLogin">
              Submit
            </Button>

          </form>
        </Col>
      </Row>

      <p className="msg">
        Don't have an account?
        <Link to="/student-signup">Sign Up</Link>
      </p>
    </Container>
  );
};

export default StudLogin;
