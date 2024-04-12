import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import "../styles/Home.css";
import home_img from "../assets/home img.jpeg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
    <Header path="#home"  />
    <Container id="home" className="home">

      <Row>
        <Col className="col1">
            <h1>PG-<span>Pedia</span></h1>
            <p>
                {/* A Portal that manages the PG dissertation */}
                {/* make 15 word para on above */}
                A Portal that manages the PG dissertation of students and teachers. It provides a platform for students to submit their thesis and for teachers to evaluate them.
                
            </p>
            <Button>
                Get Started
            </Button>
        </Col>
        <Col>
            <img
                src={home_img}
                alt="home"
            />
        </Col>
      </Row>
    </Container>

    <Container id="about" className="about">
        <Row className="row1">
            <Col>
                <h1>About Us</h1>
            </Col>
        </Row>
        <Row className="row2">
            <Row>
                <Col>
                    <h2>
                        What is use of PG Pedia?
                    </h2>
                    <p>
                        PG Pedia is a portal that manages the PG dissertation of students and teachers. It provides a platform for students to submit their thesis and for teachers to evaluate them.
                    </p>
                </Col>
                <Col>
                    <h2>
                        How to use PG Pedia?
                    </h2>
                    <p>
                        Students can submit their thesis and teachers can evaluate them. Students can also view their grades and feedback given by teachers.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>
                        What is PG Dissertation?
                    </h2>
                    <p>
                        A dissertation is a long piece of writing on a particular subject, especially one that is done in order to receive a degree at college or university.
                        A dissertation is a piece of academic writing normally submitted as part of a postgraduate degree, whether it's your master's or PhD.
                    </p>
                </Col>
            </Row>
        </Row>
    </Container>

    {/* contact us form */}
    <Container id="contact" className="contact">
        <Row className="row1">
            <Col>
                <h1>Contact Us</h1>
            </Col>
        </Row>
        <Row className="row2">
            <Col>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Message"></textarea>
                    <Button>Send</Button>
                </form>
            </Col>
        </Row>
    </Container>
    <Footer/>
    </>
  );
};

export default Home;
