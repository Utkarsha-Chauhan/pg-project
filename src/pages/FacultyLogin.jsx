import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
// import "../styles/StudLogin.css";
import "../styles/FacultyLogin.css";
import { Button } from "react-bootstrap";

const FacultyLogin = () => {
  return (
    <Container className="studlogin">
      <Row>
        <h1>
          <Link to={"/"} className="logo">
            PG- <span>Pedia</span>
          </Link>
        </h1>
      </Row>
      <Row>
        <h1 className="text-center">Faculty Login</h1>
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

            {/* <Button className="btnLogin">
              Submit
            </Button> */}

            <Link className="" to="/faculty-admin">
              <Button className="btnLogin" variant="primary" type="submit">
                Submit
              </Button>
            </Link>
          </form>
        </Col>
      </Row>

      <p className="msg">
        Don't have an account?
        <Link to="/faculty-signup">Sign Up</Link>
      </p>
    </Container>
  );
};

export default FacultyLogin;
