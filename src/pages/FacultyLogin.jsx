import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../styles/FacultyLogin.css";

const FacultyLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState({});
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const newErrors = validateForm(formData);
    if (Object.keys(newErrors).length === 0) {
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed in:", user);
          navigate("/faculty-admin",{
            state: { email: formData.email, password: formData.password }
          }); // Redirect to faculty admin page
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.error("Error signing in:", errorMessage);
          alert(errorMessage); // Show error message in an alert
        });
    } else {
      setErrors(newErrors);
    } 
    setIsSubmitting(false);
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }

    if (!data.password.trim()) {
      errors.password = "Password is required";
    }

    return errors;
  };

  return (
    <div className="faculty-login">
      <h1>
        <Link to={"/"} className="logo">
          PG<span>-Pedia</span>
        </Link>
      </h1>

      <h1 className="text-center">Faculty Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <div className="mb-3">
          <input
            type="password"
            className={`form-control ${
              errors.password ? "is-invalid" : ""
            }`}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        <Button className="btnLogin" variant="primary" type="submit"
          disabled={isSubmitting}
        >
          {
            isSubmitting ? "Logging in..." : "Login"
          }
        </Button>
      </form>

      <p className="msg">
        Don't have an account? <Link to="/faculty-signup">Sign Up</Link>
      </p>
      <p>
        <Link to="/forgot-password">Forgot Password</Link>
      </p>
    </div>
  );
};

export default FacultyLogin;
