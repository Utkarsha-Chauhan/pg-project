import React from "react";
import FacultyHeader from "../components/FacultyHeader";
import "../styles/facultyadmin.css"
import { useLocation } from 'react-router-dom';


const FacultyAdmin = () => {
  // Access the location state
  const location = useLocation();
  const { email } = location.state || {}; // Destructure email from state or set it to an empty object if state is undefined
  return (
    <>
      <FacultyHeader userEmail={email} /> {/* Pass userEmail as a prop to StudHeader */}
      <div className="facultyAdmin">
        <div className="comming_soon">
          <h1>Page will Coming Soon</h1>
        </div>
      </div>
    </>
  );
};

export default FacultyAdmin;
