import './app.css'


import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StudentLogin from './pages/StudLogin';
import StudentSignUp from './pages/StudSignUp';
import StudentAdmin from './pages/StudAdmin';
import FacultySignup from './pages/FacultySignup';
import FacultyLogin from './pages/FacultyLogin';
import FacultyAdmin from './pages/FacultyAdmin';

// Import Firebase
import { getFirestore } from 'firebase/firestore';
import { app } from './firebase'; // Import 'app' using destructuring
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Initialize Firestore
const db = getFirestore(app);

// Error Handling Component (Optional)
// import ErrorBoundary from './components/ErrorBoundary'; // Assuming you have an ErrorBoundary component

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path="/faculty-login" element={<FacultyLogin />} />
            <Route path="/student-signup" element={<StudentSignUp db={db} />} />
            <Route path="/faculty-signup" element={<FacultySignup db={db} />} />
            <Route path="/student-admin" element={<StudentAdmin user={user} />} />
            <Route path="/faculty-admin" element={<FacultyAdmin user={user} />} />

          </Routes>
        
      {/* </ErrorBoundary> */}
    </Router>
  );
};

export default App;
