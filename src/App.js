import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StudentLogin from "./pages/StudLogin"
import StudentSignUp from "./pages/StudSignUp"
import Header from './components/Header';
const App = () => {
  return (
    <Router>
      <Header/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/student-signup" element={<StudentSignUp />} />


          {/* Add more routes here */}
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;
