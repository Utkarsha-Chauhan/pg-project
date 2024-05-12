import React from 'react';
import { useLocation } from 'react-router-dom';
import "../styles/StudAdmin.css";
import StudHeader from '../components/StudHeader';

const StudAdmin = () => {
  // Access the location state
  const location = useLocation();
  const { email } = location.state || {}; // Destructure email from state or set it to an empty object if state is undefined

  return (
    <div className="admin">
      <StudHeader userEmail={email} /> {/* Pass userEmail as a prop to StudHeader */}
    </div>
  );
};

export default StudAdmin;
