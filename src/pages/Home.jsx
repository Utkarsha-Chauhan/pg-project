import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../styles/Home.css";
import home_img from "../assets/home img.jpeg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length === 0) {
      // Form submission logic here
      console.log("Form submitted successfully!");
      // Redirect or perform any other action after successful form submission
    } else {
      setErrors(newErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.name.trim()) {
      errors.name = "Name is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }

    if (!data.subject.trim()) {
      errors.subject = "Subject is required";
    }

    if (!data.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  return (
    <>
      <Header />
      <Container id="home" className="home">
        <Row>
          <Col className="col1">
            <h1>
              PG-<span>Pedia</span>
            </h1>
            <p>
              A Portal that manages the PG dissertation of students and
              teachers. It provides a platform for students to submit their
              thesis and for teachers to evaluate them.
            </p>
            <Button
              variant="primary"
              href="/login"
              className="
                fs-4
                fw-bold
                py-2
                px-4
                mt-3
                "
            >
              Get Started
            </Button>
          </Col>
          <Col>
            <img src={home_img} alt="home" />
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
              <h2>What is use of PG Pedia?</h2>
              <p>
                PG Pedia is a portal that manages the PG dissertation of
                students and teachers. It provides a platform for students to
                submit their thesis and for teachers to evaluate them.
              </p>
            </Col>
            <Col>
              <h2>How to use PG Pedia?</h2>
              <p>
                Students can submit their thesis and teachers can evaluate them.
                Students can also view their grades and feedback given by
                teachers.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>What is PG Dissertation?</h2>
              <p>
                A dissertation is a long piece of writing on a particular
                subject, especially one that is done in order to receive a
                degree at college or university. A dissertation is a piece of
                academic writing normally submitted as part of a postgraduate
                degree, whether it's your master's or PhD.
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}

              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}

              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`form-control ${errors.subject ? "is-invalid" : ""}`}
              />
              {errors.subject && (
                <div className="invalid-feedback">{errors.subject}</div>
              )}

              <textarea
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
              />
              {errors.message && (
                <div className="invalid-feedback">{errors.message}</div>
              )}

              <Button type="submit">Send</Button>
            </form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
