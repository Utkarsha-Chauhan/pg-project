import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Make sure to import the auth object from your firebase.js file
import "../styles/FacultySignup.css";

const FacultySignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

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
        navigate("/faculty-admin", { state: { email: formData.email, password: formData.password } });
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
    <div className="faculty-signup">
      <h1>
        <Link to={"/"} className="logo">
          PG- <span>Pedia</span>
        </Link>
      </h1>

      <h1 className="text-center">Faculty Sign Up</h1>

      <form onSubmit={handleSubmit}>
        {/* name */}
        <div className="mb-3">
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        {/* email */}
        <div className="mb-3">
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        {/* password */}
        <div className="mb-3 pass">
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        {/* confirm password */}
        <div className="mb-3 pass">
          <input
            type="password"
            className={`form-control ${
              errors.confirmPassword ? "is-invalid" : ""
            }`}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
          {errors.confirmPassword && (
            <div className="invalid-feedback">{errors.confirmPassword}</div>
          )}
        </div>

        {errors.firebase && (
          <div className="alert alert-danger" role="alert">
            {errors.firebase}
          </div>
        )}

        <Button className="btnLogin" variant="primary" type="submit" 
          disabled={isSubmitting}
        >
          {isSubmitting ? <span>Loading...</span> : <span>Submit</span>}
        </Button>
      </form>

      <p>
        Already have an account? <Link to="/faculty-login">Login</Link>
      </p>
      <p>
        <Link to="/forgot-password">Forgot Password</Link>
      </p>
    </div>
  );
};

export default FacultySignup;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, db } from "../firebase";
// import { doc, setDoc } from "firebase/firestore";
// import "../styles/FacultySignup.css";

// const FacultySignUp = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//     setErrors({
//       ...errors,
//       [name]: ""
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     const newErrors = validateForm(formData);
//     if (Object.keys(newErrors).length === 0) {
//       try {
//         const userCredential = await createUserWithEmailAndPassword(
//           auth,
//           formData.email,
//           formData.password
//         );
//         const user = userCredential.user;
//         console.log("User signed up:", user);
//         // Store user data to Firestore
//         await addUserDataToFirestore(user.uid);
//         navigate("/student-admin"); // Redirect to student admin page
//       } catch (error) {
//         const errorMessage = error.message;
//         console.error("Error signing up:", errorMessage);
//         alert(errorMessage); // Show error message in an alert
//       } finally {
//         setIsSubmitting(false);
//       }
//     } else {
//       setErrors(newErrors);
//       setIsSubmitting(false);
//     }
//   };
//   const addUserDataToFirestore = async (userId) => {
//     try {
//         // Store user data in the "faculties" collection in Firestore
//         await setDoc(doc(db, "faculties", userId), {
//           name: formData.name,
//           email: formData.email
//         });
//         console.log("User data added to Firestore");
//       } catch (error) {
//         console.error("Error adding user data to Firestore:", error);
//         throw new Error("Error adding user data to Firestore");
//       }
//     };

//   const validateForm = (data) => {
//     let errors = {};

//     if (!data.name.trim()) {
//       errors.name = "Name is required";
//     }

//     if (!data.email.trim()) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//       errors.email = "Email is invalid";
//     }

//     if (!data.password.trim()) {
//       errors.password = "Password is required";
//     } else if (data.password.length < 6) {
//       errors.password = "Password must be at least 6 characters long";
//     }

//     if (data.password !== data.confirmPassword) {
//       errors.confirmPassword = "Passwords do not match";
//     }

//     return errors;
//   };

//   return (
//     <div className="studlogin">
//       {/* Form content */}
//     </div>
//   );
// };

// export default FacultySignUp;
