import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import "../styles/Home";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [name]: ""
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
  );
};

export default ContactUs;
