import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StudentLogin from "./pages/StudLogin"
import StudentSignUp from "./pages/StudSignUp"
import StudentAdmin from './pages/StudAdmin';
import FacultySignup from './pages/FacultySignup';
import FacultyLogin from './pages/FacultyLogin';
import FacultyAdmin from './pages/FacultyAdmin';
const App = () => {
  return (
    <Router>
      {/* <Header/> */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/faculty-login" element={<FacultyLogin />} />
          <Route path="/student-signup" element={<StudentSignUp />} />
          <Route path="/faculty-signup" element={<FacultySignup />} />
          <Route path="/student-admin" element={<StudentAdmin />} />
          <Route path="/faculty-admin" element={<FacultyAdmin />} />


          {/* Add more routes here */}
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;
