


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StudentLogin from './pages/StudLogin';
import StudentSignUp from './pages/StudSignUp';
import StudentAdmin from './pages/StudAdmin';
import FacultySignup from './pages/FacultySignup';
import FacultyLogin from './pages/FacultyLogin';
import FacultyAdmin from './pages/FacultyAdmin';
import Image from './components/Image';

// Import Firebase
import { getFirestore } from 'firebase/firestore';
import { app } from './firebase'; // Import 'app' using destructuring

// Initialize Firestore
const db = getFirestore(app);

// Error Handling Component (Optional)
// import ErrorBoundary from './components/ErrorBoundary'; // Assuming you have an ErrorBoundary component

const App = () => {
  return (
    <Router>
      {/* Wrap routes with ErrorBoundary for error handling (optional) */}
      {/* <ErrorBoundary> */}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path="/faculty-login" element={<FacultyLogin />} />
            <Route path="/student-signup" element={<StudentSignUp db={db} />} />
            <Route path="/faculty-signup" element={<FacultySignup db={db} />} />

            {/* Protected Routes (implement logic to check authentication and roles) */}
            <Route path="/student-admin" element={<StudentAdmin db={db} />} />
            <Route path="/faculty-admin" element={<FacultyAdmin db={db} />} />
          </Routes>
        
        </div>
      {/* </ErrorBoundary> */}
    </Router>
  );
};

export default App;
