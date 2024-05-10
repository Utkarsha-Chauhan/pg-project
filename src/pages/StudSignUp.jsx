
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase"; 
import { doc, setDoc } from "firebase/firestore";
import "../styles/StudSignUp.css"

const StudSignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ""
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length === 0) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        const user = userCredential.user;
        console.log("User signed up:", user);
        // Store user data to Firestore
        await addUserDataToFirestore(user.uid);
        navigate("/student-admin"); // Redirect to student admin page
      } catch (error) {
        const errorMessage = error.message;
        console.error("Error signing up:", errorMessage);
        alert(errorMessage); // Show error message in an alert
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
      setIsSubmitting(false);
    }
  };

  const addUserDataToFirestore = async (userId) => {
    try {
      await setDoc(doc(db, "students", userId), {
        name: formData.name,
        email: formData.email,
      });
      console.log("User data added to Firestore");
    } catch (error) {
      console.error("Error adding user data to Firestore:", error);
      throw new Error("Error adding user data to Firestore");
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

    if (!data.password.trim()) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <div className="studlogin">
      <h1>
        <Link to={"/"} className="logo">
          PG- <span>Pedia</span>
        </Link>
      </h1>

      <h1 className="text-center">Student Sign Up</h1>

      <form onSubmit={handleSubmit}>
        {/* name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name}</div>
          )}
        </div>
        {/* email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        {/* password */}
        <div className="mb-3 pass">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${
              errors.password ? "is-invalid" : ""
            }`}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        {/* confirm password */}
        <div className="mb-3 pass">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className={`form-control ${
              errors.confirmPassword ? "is-invalid" : ""
            }`}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && (
            <div className="invalid-feedback">{errors.confirmPassword}</div>
          )}
        </div>

        <Button className="btnLogin" variant="primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? <span>Loading...</span> : <span>Submit</span>}
        </Button>
      </form>

      <p>
        Already have an account? <Link to="/student-login">Login</Link>
      </p>
      <p>
        <Link to="/forgot-password">Forgot Password</Link>
      </p>
    </div>
  );
};

export default StudSignUp;
